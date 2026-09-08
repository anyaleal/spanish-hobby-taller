/**
 * The Spanish Map Locator — serverless proxy (Vercel Node Function)
 *
 * Endpoint: POST /api/analyze   body: { "word": "amor" }
 * Returns:  { "nodes": [ { part, category, subcategory, insight }, ... ] }
 *
 * The Anthropic API key lives ONLY here, read from the ANTHROPIC_API_KEY
 * environment variable set in the Vercel project. It is never sent to the
 * browser. The client calls this endpoint instead of the Anthropic API.
 *
 * Runtime: Node serverless (NOT edge) — Claude can take 20-40s on an exhaustive
 * analysis, which exceeds the Edge runtime's tight limits and caused 504s.
 * maxDuration gives the call room to finish.
 */

export const maxDuration = 60; // seconds (Hobby max; raise to 300 on Pro if needed)

const MODEL = 'claude-sonnet-4-6';
const ANTHROPIC_API = 'https://api.anthropic.com/v1/messages';
const MAX_INPUT_LEN = 80;

export default async function handler(req, res) {
  // Diagnostic: GET /api/analyze?debug=1 reports WHICH env vars the running
  // function can see (booleans only — never the values). Safe to leave in.
  if (req.method === 'GET') {
    if (req.query?.debug === '1') {
      return send(res, 200, {
        ok: true,
        env: {
          ANTHROPIC_API_KEY: !!process.env.ANTHROPIC_API_KEY,
          SUPABASE_URL: !!process.env.SUPABASE_URL,
          SUPABASE_ANON_KEY: !!process.env.SUPABASE_ANON_KEY,
        },
      });
    }
    return send(res, 405, { error: 'Method not allowed.' });
  }

  if (req.method !== 'POST') {
    return send(res, 405, { error: 'Method not allowed.' });
  }

  // Parse + validate input. Vercel auto-parses JSON bodies into req.body, but
  // accept a raw string too just in case.
  let word;
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    word = String(body?.word ?? '').trim();
  } catch {
    return send(res, 400, { error: 'Invalid request body.' });
  }
  if (!word) return send(res, 400, { error: 'Please enter a word or expression.' });
  if (word.length > MAX_INPUT_LEN) {
    return send(res, 400, { error: 'That input is too long — try a single word or short phrase.' });
  }

  // Log the search (text + timestamp) to Supabase. Awaited so it lands before
  // the function returns, but it can NEVER break the search.
  await logSearch(word);

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return send(res, 500, { error: 'The analyzer is not configured yet.' });
  }

  // Call Claude
  let upstream;
  try {
    upstream = await fetch(ANTHROPIC_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 3072,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: userPrompt(word) }],
      }),
    });
  } catch {
    return send(res, 502, { error: 'Could not reach the analyzer. Try again.' });
  }

  if (!upstream.ok) {
    // Don't leak upstream error bodies (may contain key hints) to the client.
    const status = upstream.status === 429 ? 429 : 502;
    const msg = upstream.status === 429
      ? 'The analyzer is busy right now. Wait a moment and try again.'
      : 'The analysis failed. Please try again.';
    return send(res, status, { error: msg });
  }

  const data = await upstream.json();
  const raw = data?.content?.[0]?.text ?? '';

  // Claude may wrap the JSON in prose or a code block — extract the object.
  const match = raw.match(/\{[\s\S]*\}/);
  if (!match) return send(res, 502, { error: 'Unexpected response format.' });

  let parsed;
  try {
    parsed = JSON.parse(match[0]);
  } catch {
    return send(res, 502, { error: 'Could not parse the analysis.' });
  }
  if (!Array.isArray(parsed.nodes)) {
    return send(res, 502, { error: 'The analysis came back empty.' });
  }

  return send(res, 200, { nodes: parsed.nodes });
}

/* ── Helpers ── */

/**
 * Record a search in the Supabase `searches` table (query text + timestamp).
 * Fire-and-forget semantics: any failure is swallowed so analytics logging can
 * never affect the user's result. Needs SUPABASE_URL + SUPABASE_ANON_KEY env vars.
 */
async function logSearch(word) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key) return; // not configured → skip silently
  try {
    await fetch(`${url}/rest/v1/searches`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': key,
        'Authorization': `Bearer ${key}`,
        'Prefer': 'return=minimal', // insert-only table: don't read back through RLS
      },
      body: JSON.stringify({ query: word }),
    });
  } catch {
    // swallow — logging must never break the search
  }
}

function send(res, status, obj) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  res.status(status).send(JSON.stringify(obj));
}

function userPrompt(word) {
  return `Analyze: "${word}"

Return exactly this JSON structure (no other text):
{
  "nodes": [
    {
      "part": <1, 2, or 3>,
      "category": "<exact node name from the map>",
      "subcategory": "<group name for Part 3 nodes, or null>",
      "insight": "<one sentence that reveals something curious without fully explaining it>"
    }
  ]
}`;
}

/* ── The analysis prompt (moved server-side from the client) ── */
const SYSTEM_PROMPT = `You are a Spanish linguistics expert and curriculum designer for Spanish Hobby — an editorial education brand that teaches English speakers how Spanish actually works: the patterns and logic beneath the surface.

Your job: analyze any Spanish word or expression and map it across The Spanish Map as exhaustively as possible. Almost every word lives in MANY places at once — that is the whole point of the map. A learner should look at the result and realize a single word touches the sound system, the grammar, the parts of speech, AND the lived culture all at the same time. Your default is breadth: walk every node and include it whenever a real, defensible connection exists, not only the most obvious one.

The Spanish Map has this exact structure:
PART 1 — The Hidden Structure (the invisible blueprint):
  Phonetics, Phonology, Morphology, Syntax, Semantics, Pragmatics

PART 2 — The Building Blocks (the 9 parts of speech):
  Noun, Verb, Adjective, Adverb, Pronoun, Preposition, Conjunction, Determiner, Interjection

PART 3 — Real World Spanish (the inhabited house):
  How Spanish Is Spoken: Regional variation, Social register, Code-switching
  Pitfalls and Bridges: Cognates, False friends, Common errors
  Natural Learning Path: Exposure, Recognition, Spontaneity
  Cultural Nuances: Cultural expressions, Proverbs and sayings, Humor and pop culture

How to be exhaustive (work the map node by node):
- PART 1 — The Hidden Structure: nearly every word has something real to say in ALL SIX nodes. It has sounds (Phonetics), a sound system at play like stress, syllables, or diphthongs (Phonology), internal structure such as roots, gender, number, or how it inflects (Morphology), a role and behavior in sentences (Syntax), a web of meaning and connotation (Semantics), and ways its use shifts with context, tone, or intent (Pragmatics). Include all six unless one truly does not apply.
- PART 2 — The Building Blocks: include EVERY part of speech the word can function as, not just the primary one. Many Spanish words cross categories (e.g. a word that is both noun and adjective, or both verb and interjection). List each real one.
- PART 3 — Real World Spanish: include every node where the word carries lived reality — regional differences, register shifts, cognate/false-friend status, common learner errors, where it shows up on the learning path, and any cultural expressions, proverbs, or pop-culture/humor it lives inside.

Rules:
- Be generous and thorough. A rich, common word (like "amor", "ser", "que") should easily light up 12–18 nodes. A narrow, rare word may light up fewer. Never artificially cap the count — include every node with a genuine connection.
- The ONLY reason to omit a node is that there is honestly nothing real to say about this specific word there. Do not omit a node just because the connection feels basic; find the interesting angle instead.
- Each insight is exactly one sentence that reveals something real and curious about THIS word at THAT node — it should open a question, not close it. Think of it as the first line of a chapter, not a dictionary definition. Make each insight specific to the word, never a generic description of the node.
- ORDER the nodes array from most surprising/curious to least, so the strongest insights come first. (The tool shows only a varied glimpse of the top ones.)
- Write insights in English. Warm, clear, editorial register—not academic jargon. No hype, no "amazing!", no exclamation points.
- Return ONLY valid JSON. No preamble, no explanation.`;
