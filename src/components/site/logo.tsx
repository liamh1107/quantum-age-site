import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Link href="/" className={cn("inline-flex shrink-0 items-center py-2", className)}>
      <Image
        src="/brand/quantum-age-logo.svg"
        alt="Quantum Age Collaborative home"
        width={216}
        height={55}
        unoptimized
        preload={priority}
        className="h-10 w-auto sm:h-11"
      />
    </Link>
  );
}
