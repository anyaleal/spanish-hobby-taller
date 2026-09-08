// Spanish Hobby — Website UI Kit · The Building Blocks
const { ArticleCard } = window.SpanishHobbyDesignSystem_99e317;

function BuildingBlocksScreen() {
  const A = window.SH_ASSETS;
  const parts = [
    { img: 'tonal-warm.jpg', t: 'Spanish Interjections', e: 'Interjections add emotion, authenticity and rhythm to your Spanish. Think of them as the sparks of a conversation.' },
    { img: 'tonal-teal.jpg', t: 'Spanish Conjunctions', e: 'Conjunctions connect thoughts, actions and reasons. Learn how they shape meaningful communication from one sentence to the next.' },
    { img: 'structure-1.jpg', t: 'Spanish Prepositions', e: 'Small words with big meaning. You may not even notice them when native speakers use them — but without them, sentences fall apart.' },
    { img: 'tonal-peach.jpg', t: 'Spanish Pronouns', e: 'Pronouns replace nouns to make your sentences smoother and less repetitive.' },
    { img: 'structure-2.jpg', t: 'Spanish Adverbs', e: 'Discover how Spanish adverbs add nuance, precision and emotion to your sentences.' },
    { img: 'tonal-teal.jpg', t: 'Spanish Determiners', e: 'Learn the six types of Spanish determiners, and how they shape meaning in everyday Spanish.' },
  ];

  return (
    <div>
      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '72px 32px 36px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 60px)', color: 'var(--ink-900)', letterSpacing: '-0.02em' }}>
          The Building Blocks: The 9 Parts of a Spanish Sentence
        </h1>
        <img src={A + 'structure-1.jpg'} alt="Wooden blocks showing parts of speech"
          style={{ width: '100%', borderRadius: 'var(--radius-md)', marginTop: '28px', boxShadow: 'var(--shadow-md)' }} />
      </section>

      <section style={{ background: 'var(--teal-700)', padding: '64px 32px' }}>
        <div style={{ maxWidth: 'var(--width-wide)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)' }}>
          {parts.map((p, i) => (
            <ArticleCard key={i} image={A + p.img} title={p.t} excerpt={p.e} readMoreLabel="Explore" />
          ))}
        </div>
      </section>
    </div>
  );
}
window.BuildingBlocksScreen = BuildingBlocksScreen;
