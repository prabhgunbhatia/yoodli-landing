import { useId } from "react";

export function LogoIcon({ size = 32 }: { size?: number }) {
  const id = useId();
  const g = `${id}-grad`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={g} x1="0.35" y1="0" x2="0.65" y2="1">
          <stop offset="0" stopColor="#41e3ee" />
          <stop offset="0.5" stopColor="#2fa4e0" />
          <stop offset="1" stopColor="#2a5be0" />
        </linearGradient>
      </defs>
      <g fill="none" stroke={`url(#${g})`} strokeWidth="3">
        <circle cx="32" cy="32" r="5.2" fill={`url(#${g})`} stroke="none" />
        <circle cx="32" cy="32" r="10.5" strokeDasharray="52 13.97" transform="rotate(24 32 32)" />
        <circle cx="32" cy="32" r="16" strokeDasharray="26 8 30 8 20.53 8" transform="rotate(-52 32 32)" />
        <circle cx="32" cy="32" r="21.5" strokeDasharray="20 7 26 7 14 7 34 7 13.07 7" transform="rotate(88 32 32)" />
        <circle cx="32" cy="32" r="27" strokeDasharray="24 8 16 8 34 8 20 8 35.62 8" transform="rotate(196 32 32)" />
        <path d="M32 21.5 L32 16" transform="rotate(58 32 32)" />
        <path d="M32 16 L32 10.5" transform="rotate(-95 32 32)" />
        <path d="M32 27 L32 21.5" transform="rotate(150 32 32)" />
        <path d="M32 27 L32 21.5" transform="rotate(-18 32 32)" />
      </g>
    </svg>
  );
}

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoIcon size={42} />
      <span className="text-[21px] font-semibold tracking-tight text-white">
        IG Technologies
      </span>
    </div>
  );
}
