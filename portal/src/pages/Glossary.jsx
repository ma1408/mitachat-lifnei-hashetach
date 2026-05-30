import { useState, useMemo } from 'react'
import { glossary, GLOSSARY_CATEGORIES } from '../data/glossary'

export default function Glossary() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState(null)

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return glossary.filter((t) => {
      const matchCat = !activeCategory || t.category === activeCategory
      const matchSearch =
        !q ||
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q) ||
        t.example.toLowerCase().includes(q)
      return matchCat && matchSearch
    })
  }, [search, activeCategory])

  return (
    <div className="container stack-lg">
      <header className="page-head">
        <p className="page-head__eyebrow">חומרי הקורס</p>
        <h1 className="page-head__title">מילון ואוצר מילים</h1>
        <p className="page-head__lead">
          המושגים המרכזיים שיעזרו לך להבין מה קורה מתחת לפני השטח של השיחה.
        </p>
      </header>

      <div className="glossary-controls">
        <div className="glossary-search">
          <span className="glossary-search__icon" aria-hidden="true">◎</span>
          <input
            className="glossary-search__input"
            type="search"
            placeholder="חיפוש מושג..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoComplete="off"
          />
          {search && (
            <button
              className="glossary-search__clear"
              onClick={() => setSearch('')}
              aria-label="נקה חיפוש"
            >
              ×
            </button>
          )}
        </div>

        <div className="glossary-filters">
          <button
            className={`glossary-pill ${!activeCategory ? 'glossary-pill--active' : ''}`}
            onClick={() => setActiveCategory(null)}
          >
            הכל
          </button>
          {GLOSSARY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`glossary-pill ${activeCategory === cat ? 'glossary-pill--active' : ''}`}
              onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="glossary-empty">
          <span className="glossary-empty__icon" aria-hidden="true">◎</span>
          <p>לא נמצאו מושגים. נסה מילת חיפוש אחרת.</p>
        </div>
      ) : (
        <>
          <p className="glossary-count muted">
            {filtered.length} מושגים
            {activeCategory && ` · ${activeCategory}`}
            {search && ` · "${search}"`}
          </p>
          <div className="glossary-grid">
            {filtered.map((term) => (
              <article key={term.id} className="glossary-card">
                <div className="glossary-card__head">
                  <span className="glossary-card__cat">{term.category}</span>
                  <h3 className="glossary-card__term">{term.term}</h3>
                </div>

                <p className="glossary-card__def">{term.definition}</p>

                <div className="glossary-card__example">
                  <span className="glossary-card__example-label">דוגמה</span>
                  <p>{term.example}</p>
                </div>

                <div className="glossary-card__question">
                  <span className="glossary-card__question-label" aria-hidden="true">❓</span>
                  <p>{term.smartQuestion}</p>
                </div>

                {term.appearsIn.length > 0 && (
                  <div className="glossary-card__lessons">
                    {term.appearsIn.map((lid) => (
                      <span key={lid} className="glossary-card__lesson-tag">
                        שיעור {lid.replace('l', '')}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
