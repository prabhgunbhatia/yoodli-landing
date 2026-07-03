import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo-icon.png"
        alt="IG Technologies"
        width={30}
        height={30}
      />
      <span className="text-base font-semibold tracking-tight text-white">
        IG Technologies
      </span>
    </div>
  );
}
