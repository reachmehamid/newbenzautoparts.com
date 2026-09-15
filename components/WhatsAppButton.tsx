import { MessageCircle } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

type WhatsAppButtonProps = {
  href: string;
  children?: ReactNode;
  className?: string;
  variant?: "primary" | "outline";
};

export function WhatsAppButton({ href, children = "Inquire on WhatsApp", className = "", variant = "primary" }: WhatsAppButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-bold transition ${
        variant === "primary"
          ? "bg-[#B8943E] text-white hover:bg-[#A07E30]"
          : "border border-[#E5E5E3] text-[#1A1A1A] hover:border-[#B8943E] hover:text-[#B8943E]"
      } ${className}`}
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      {children}
    </Link>
  );
}
