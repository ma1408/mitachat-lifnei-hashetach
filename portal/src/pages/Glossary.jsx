import { useState, useMemo, useEffect, useCallback } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { glossary, GLOSSARY_CATEGORIES, getTermById } from '../data/glossary'

export default function Glossary() {
  const [searchParams] = useSearchParams()
  const [search, setSearch] = useState(() => searchParams.get('q') || '')
  const [activeCategory, setActiveCategory] = useState(null)
  const [expanded, setExpanded] = useState(() => new Set())

  // אם מגיעים מ-Lesson עם ?q=מושג — פתח אוטומטית
  useEffect(() => {
    const q = searchParams.get('q')
    if (!q) return
    setSearch(q)
    const match = glossary.find(
      (t) => t.term === q || t.id === q
    )
    if (match) setExpanded(new Set([match.id]))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const toggleExpand = useCallback((id) => {
    setExpanded((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }, [])

  const handleRelatedClick = useCallback((termId) => {
    const term = getTermById(termId)
    if (!term) return
    setSearch(term.term)
    setActiveCategory(null)
    setExpanded(new Set([termId]))
  }, [])

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return glossary.filter((t) => {
      const matchCat = !activeCategory || t.category === activeCategory
      const matchSearch =
        !q ||
        t.term.toLowerCase().includes(q) ||
        t.shortDefinition.toLowerCase().includes(q) ||
        t.deepDefinition.toLowerCase().includes(q)
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
            הכל ({glossary.length})
          </button>
          {GLOSSARY_CATEGORIES.map((cat) => {
            const count = glossary.filter((t) => t.category === cat).length
            return (
              <button
                key={cat}
                className={`glossary-pill ${activeCategory === cat ? 'glossary-pill--active' : ''}`}
                onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
              >
                {cat} ({count})
              </button>
            )
          })}
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
            {filtered.map((term) => {
              const isOpen = expanded.has(term.id)
              return (
                <article
                  key={term.id}
                  className={`glossary-card ${isOpen ? 'glossary-card--open' : ''}`}
                >
                  {/* ─── Header (always visible) ─── */}
                  <button
                    className="glossary-card__toggle"
                    onClick={() => toggleExpand(term.id)}
                    aria-expanded={isOpen}
                  >
                    <div className="glossary-card__head">
                      <span className="glossary-card__cat">{term.category}</span>
                      <h3 className="glossary-card__term">{term.term}</h3>
                      <p className="glossary-card__short">{term.shortDefinition}</p>
                    </div>
                    <span className="glossary-card__chevron" aria-hidden="true">
                      {isOpen ? '▲' : '▼'}
                    </span>
                  </button>

                  {/* ─── Expanded content ─── */}
                  {isOpen && (
                    <div className="glossary-card__body">
                      <p className="glossary-card__deep">{term.deepDefinition}</p>

                      <div className="glossary-card__section">
                        <span className="glossary-card__section-label">למה זה חשוב</span>
                        <p>{term.whyItMatters}</p>
                      </div>

                      <div className="glossary-card__example">
                        <span className="glossary-card__section-label">דוגמה</span>
                        <p>{term.realLifeExample}</p>
                      </div>

                      <div className="glossary-card__row">
                        <div className="glossary-card__notice">
                          <span className="glossary-card__section-label">מה לשים לב</span>
                          <p>{term.whatToNotice}</p>
                        </div>
                        <div className="glossary-card__warn">
                          <span className="glossary-card__section-label">מה לא להניח</span>
                          <p>{term.whatNotToAssume}</p>
                        </div>
                      </div>

                      <div className="glossary-card__question">
                        <span className="glossary-card__question-icon" aria-hidden="true">❓</span>
                        <p>{term.smartQuestion}</p>
                      </div>

                      {term.appearsIn?.length > 0 && (
                        <div className="glossary-card__meta-row">
                          <div className="glossary-card__lessons">
                            <span className="glossary-card__meta-label">מופיע בשיעורים</span>
                            {term.appearsIn.map((lid) => (
                              <Link
                                key={lid}
                                to={`/lesson/${lid}`}
                                className="glossary-card__lesson-tag"
                              >
                                שיעור {lid.replace('l', '')}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {term.relatedTerms?.length > 0 && (
                        <div className="glossary-card__related">
                          <span className="glossary-card__meta-label">מושגים קשורים</span>
                          <div className="glossary-card__related-pills">
                            {term.relatedTerms.map((rid) => {
                              const rel = getTermById(rid)
                              if (!rel) return null
                              return (
                                <button
                                  key={rid}
                                  className="glossary-pill glossary-pill--sm"
                                  onClick={() => handleRelatedClick(rid)}
                                >
                                  {rel.term}
                                </button>
                              )
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
