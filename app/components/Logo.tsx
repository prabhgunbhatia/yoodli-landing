export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M16 2L28 7.5V15.5C28 22.5 22.8 27.7 16 30C9.2 27.7 4 22.5 4 15.5V7.5L16 2Z"
          stroke="#3ecfb2"
          strokeWidth="1.5"
        />
        <path
          d="M11 15.5L14.3 18.8L21 12"
          stroke="#3ecfb2"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-base font-semibold tracking-tight text-white">
        IG Technologies
      </span>
    </div>
  );
}
