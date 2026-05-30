export default function ProgressBar({ percent, showLabel = true }) {
  const value = Math.max(0, Math.min(100, percent || 0))
  return (
    <div className="progress">
      <div className="progress__track">
        <div className="progress__fill" style={{ width: `${value}%` }} />
      </div>
      {showLabel && <span className="progress__label">{value}%</span>}
    </div>
  )
}
