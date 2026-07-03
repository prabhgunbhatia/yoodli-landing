export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M16 2L28 7.5V15.5C28 22.5 22.8 27.7 16 30C9.2 27.7 4 22.5 4 15.5V7.5L16 2Z"
          fill="url(#ig-shield-gradient)"
          opacity="0.9"
        />
        <path
          d="M16 2L28 7.5V15.5C28 22.5 22.8 27.7 16 30C9.2 27.7 4 22.5 4 15.5V7.5L16 2Z"
          stroke="url(#ig-shield-gradient)"
          strokeWidth="1.2"
        />
        <path
          d="M11 15.5L14.3 18.8L21 12"
          stroke="#050810"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="ig-shield-gradient" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22d3ee" />
            <stop offset="1" stopColor="#818cf8" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-lg font-semibold tracking-tight text-white">
        IG Technologies
      </span>
    </div>
  );
}
