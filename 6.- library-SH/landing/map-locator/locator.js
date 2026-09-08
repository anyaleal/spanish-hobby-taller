/**
 * The Spanish Map Locator — core logic
 *
 * Architecture:
 *   1. analyzeWord() POSTs the word to /api/analyze (the Vercel Edge Function in
 *      api/analyze.js). The Anthropic API key lives ONLY on the server, never here.
 *   2. illuminateMap() is a pure function: nodes[] → DOM mutations. No side effects.
 *   3. renderCards() builds at most 5 result cards from the structured response.
 *
 * Note: /api/analyze only exists on Vercel. Running this page off a plain static
 * server (e.g. python http.server) will render the UI but the analysis call will
 * fail — test the full flow on a Vercel preview/production URL.
 */

// Version stamp — open DevTools Console to confirm which build is running.
console.log('%c[Spanish Map Locator] build v5 — proxy + absolute asset paths', 'color:#1A6B7C;font-weight:bold');

/* ── Constants ── */
const MAX_CARDS = 5;
const ANALYZE_ENDPOINT = '/api/analyze'; // serverless proxy; the API key lives there, never here

const PART_LABELS = {
  1: 'Part 1',
  2: 'Part 2',
  3: 'Part 3',
};

/* ── DOM refs ── */
const searchForm = document.getElementById('search-form');
const wordInput  = document.getElementById('word-input');
const searchBtn  = document.getElementById('search-btn');
const btnText    = searchBtn.querySelector('.btn-text');
const btnLoading = searchBtn.querySelector('.btn-loading');
const results    = document.getElementById('results');
const resultsWord  = document.getElementById('results-word');
const resultsCount = document.getElementById('results-count');
const resultsCountLabel = document.getElementById('results-count-label');
const cardsGrid  = document.getElementById('cards-grid');
const errorState = document.getElementById('error-state');
const errorMsg   = document.getElementById('error-message');

/* ── Boot ── */
wordInput.focus();

/* ── Search ── */
searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const word = wordInput.value.trim();
  if (!word) return;

  setLoading(true);
  hideResults();
  hideError();
  resetMap();

  try {
    const allNodes = await analyzeWord(word);
    illuminateMap(allNodes); // map shows the full breadth Claude found

    // Hardcoded cap: ALWAYS show at most 5 cards, no matter how many the API
    // returns. selectTopNodes first reorders the nodes to span different parts
    // of the map, then we hard-slice the array to 5.
    const cardNodes = selectTopNodes(allNodes).slice(0, 5);
    renderCards(word, cardNodes);
  } catch (err) {
    showError(errorMessage(err));
  } finally {
    setLoading(false);
  }
});

/* ── Analysis call (via the serverless proxy) ── */
async function analyzeWord(word) {
  let response;
  try {
    response = await fetch(ANALYZE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ word }),
    });
  } catch {
    throw new Error('Network error. Check your connection and try again.');
  }

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body?.error || `Request failed (${response.status}).`);
  }

  const data = await response.json();
  if (!Array.isArray(data.nodes)) throw new Error('Unexpected response from the analyzer.');
  return data.nodes;
}

/* ── Map illumination (pure: nodes[] → DOM) ── */
function illuminateMap(nodes) {
  const nodeNames = new Set(nodes.map(n => n.category.toLowerCase()));
  document.querySelectorAll('.node').forEach(el => {
    const name = el.dataset.node.toLowerCase();
    if (nodeNames.has(name)) {
      el.classList.add('lit');
      el.setAttribute('tabindex', '0');
    }
  });
}

function resetMap() {
  document.querySelectorAll('.node.lit').forEach(el => {
    el.classList.remove('lit');
    el.setAttribute('tabindex', '-1');
  });
}

/* ── Result cards ── */
function renderCards(word, nodes) {
  // Defense-in-depth hard cap: even if called with more, never render >5.
  nodes = nodes.slice(0, MAX_CARDS);
  console.log(`[Spanish Map Locator] rendering ${nodes.length} card(s)`);

  resultsWord.textContent = capitalize(word);
  resultsCount.textContent = nodes.length;
  resultsCountLabel.textContent = nodes.length === 1 ? 'place' : 'places';

  cardsGrid.innerHTML = '';
  nodes.forEach(node => {
    cardsGrid.appendChild(buildCard(node));
  });

  results.removeAttribute('hidden');
  results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/**
 * Reorder nodes so they span different parts of the map (round-robin across
 * Part 1 / 2 / 3) instead of stacking up inside one section. Returns ALL nodes
 * reordered — the caller hard-slices to 5. The API already returns nodes
 * most-curious-first, so this keeps the strongest insights up front per part.
 */
function selectTopNodes(nodes) {
  const byPart = { 1: [], 2: [], 3: [] };
  nodes.forEach(n => { (byPart[n.part] || (byPart[n.part] = [])).push(n); });

  const ordered = [];
  let exhausted = false;
  while (!exhausted) {
    exhausted = true;
    for (const part of [1, 2, 3]) {
      if (byPart[part] && byPart[part].length) {
        ordered.push(byPart[part].shift());
        exhausted = false;
      }
    }
  }
  return ordered;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function buildCard(node) {
  const card = document.createElement('article');
  card.className = 'result-card';

  const partLabel = PART_LABELS[node.part] ?? `Part ${node.part}`;

  card.innerHTML = `
    <div class="card-badge">
      <span class="card-part-tag">${escHtml(partLabel)}</span>
    </div>
    <div>
      <div class="card-category">${escHtml(node.category)}</div>
      ${node.subcategory ? `<div class="card-subcategory">${escHtml(node.subcategory)}</div>` : ''}
    </div>
    <p class="card-insight">${escHtml(node.insight)}</p>
  `;
  return card;
}

/* ── UI helpers ── */
function setLoading(on) {
  searchBtn.disabled = on;
  btnText.hidden = on;
  btnLoading.hidden = !on;
}

function hideResults() {
  results.setAttribute('hidden', '');
  cardsGrid.innerHTML = '';
}

function hideError() {
  errorState.setAttribute('hidden', '');
}

function showError(msg) {
  errorMsg.textContent = msg;
  errorState.removeAttribute('hidden');
}

function errorMessage(err) {
  // The proxy already returns friendly, human messages — surface them directly.
  return err?.message || 'Something went wrong. Please try again.';
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
