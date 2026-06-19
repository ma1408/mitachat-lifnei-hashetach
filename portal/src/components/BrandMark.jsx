// סימן מותג מינימליסטי — קו "פני השטח", ומתחתיו נקודה.
// רמז ל"מתחת לפני השטח", בלי לוגו מלא ובלי טקסט.
// משתמש ב-currentColor; הצבע (זהב) נקבע ב-CSS.

export default function BrandMark({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3 8c3-2 6-2 9 0s6 2 9 0" />
      <line x1="12" y1="10.5" x2="12" y2="13" />
      <circle cx="12" cy="16" r="2.3" fill="currentColor" stroke="none" />
    </svg>
  )
}
