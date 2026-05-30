import { downloads } from '../data/downloads'

export default function Downloads() {
  return (
    <div className="container stack-lg">
      <header className="page-head">
        <p className="page-head__eyebrow">חומרי הקורס</p>
        <h1 className="page-head__title">הורדות</h1>
        <p className="page-head__lead">
          חוברת התלמיד, המצגות, תרגילי הצפייה ודף השאלות החכמות - הכל במקום אחד.
        </p>
      </header>

      <div className="grid grid--downloads">
        {downloads.map((d) => (
          <article
            key={d.id}
            className={`download-card ${d.available ? '' : 'download-card--soon'}`}
          >
            <span className="download-card__icon">{d.icon}</span>
            <div className="download-card__body">
              <h3 className="download-card__title">{d.title}</h3>
              <p className="download-card__desc">{d.description}</p>
              <span className="download-card__type">{d.type}</span>
            </div>
            {d.available && d.file ? (
              <a className="btn btn--gold btn--sm" href={d.file} download>
                הורדה
              </a>
            ) : (
              <span className="download-card__badge">בקרוב</span>
            )}
          </article>
        ))}
      </div>

      <p className="downloads-note">
        חלק מהקבצים עדיין לא הועלו לפורטל. הם יופיעו כאן להורדה ברגע שייטענו
        קבצי הקורס.
      </p>
    </div>
  )
}
