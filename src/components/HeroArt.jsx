export default function HeroArt() {
  return (
    <svg className="hero-art" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="candle" cx="16%" cy="24%" r="32%">
          <stop offset="0%" stopColor="#edd4a8" stopOpacity="0.95" />
          <stop offset="55%" stopColor="#e7c9a0" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#f6f1ea" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="resin" cx="86%" cy="18%" r="26%">
          <stop offset="0%" stopColor="#c89b72" stopOpacity="0.38" />
          <stop offset="100%" stopColor="#f6f1ea" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ember" cx="70%" cy="78%" r="22%">
          <stop offset="0%" stopColor="#d8b48a" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#f6f1ea" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="thread" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9c6b45" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#9c6b45" stopOpacity="0.62" />
          <stop offset="100%" stopColor="#1b1714" stopOpacity="0.12" />
        </linearGradient>
      </defs>
      <rect width="1440" height="900" fill="#f6f1ea" />
      <circle cx="200" cy="200" r="280" fill="url(#candle)" />
      <circle cx="1260" cy="160" r="240" fill="url(#resin)" />
      <circle cx="1040" cy="760" r="210" fill="url(#ember)" />
      <path
        className="thread"
        d="M70 640 C 260 430, 430 790, 650 530 S 990 250, 1200 450 1390 730, 1430 540"
        fill="none"
        stroke="url(#thread)"
        strokeWidth="1.5"
      />
      <path
        d="M90 220 C 310 150, 490 360, 720 230 S 1060 70, 1320 210"
        fill="none"
        stroke="#9c6b45"
        strokeOpacity="0.22"
        strokeWidth="1"
      />
      <path
        d="M180 760 C 360 690, 520 820, 740 700"
        fill="none"
        stroke="#1b1714"
        strokeOpacity="0.08"
        strokeWidth="1"
      />
      <g fill="none" stroke="#1b1714" strokeOpacity="0.14" strokeWidth="1">
        <path d="M1120 600 l86 -38 86 38 -86 38z" />
        <path d="M1206 562 v76" />
      </g>
      <g fill="#9c6b45" fillOpacity="0.2">
        <circle cx="340" cy="710" r="4.5" />
        <circle cx="980" cy="140" r="3.5" />
        <circle cx="760" cy="150" r="3" />
      </g>
    </svg>
  )
}
