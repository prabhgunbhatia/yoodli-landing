type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function RadarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 2a10 10 0 1 0 10 10" />
      <path d="M12 6a6 6 0 1 0 6 6" />
      <path d="M12 12l7-7" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 2.5 20 6v6c0 5-3.4 8.4-8 9.5-4.6-1.1-8-4.5-8-9.5V6l8-3.5Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function TargetIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CloudIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M7 18h10a4 4 0 0 0 .6-7.95A5.5 5.5 0 0 0 7.1 9.2 4.5 4.5 0 0 0 7 18Z" />
    </svg>
  );
}

export function FingerprintIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 3a7 7 0 0 0-7 7v2c0 3 1 5 2 6.5" />
      <path d="M12 3a7 7 0 0 1 7 7v3c0 1.3-.2 2.5-.6 3.5" />
      <path d="M8 20c-1.2-1.7-2-3.8-2-7v-3a6 6 0 0 1 12 0v3" />
      <path d="M9.5 12.5v1c0 2 .6 3.7 1.8 5" />
      <path d="M14.5 12.5v1.5c0 1.6-.3 3-1 4.2" />
      <path d="M12 8a2.2 2.2 0 0 0-2.2 2.2v2c0 2.4.8 4.3 2 5.8" />
    </svg>
  );
}

export function AlertIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 3 2 20h20L12 3Z" />
      <path d="M12 10v4" />
      <circle cx="12" cy="17" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M5 4h3.2l1.3 4.2-2 1.6a12.6 12.6 0 0 0 6.7 6.7l1.6-2 4.2 1.3V19a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4Z" />
    </svg>
  );
}
