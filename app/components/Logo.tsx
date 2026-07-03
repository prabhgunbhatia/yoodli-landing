import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/logo-icon.png"
        alt="IG Technologies"
        width={38}
        height={38}
      />
      <span className="text-lg font-semibold tracking-tight text-white">
        IG Technologies
      </span>
    </div>
  );
}
