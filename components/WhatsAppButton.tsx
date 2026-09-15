import { MessageCircle } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

type WhatsAppButtonProps = {
  href: string;
  children?: ReactNode;
  className?: string;
  variant?: "primary" | "dark" | "outline";
};

export function WhatsAppButton({ href, children = "Inquire on WhatsApp", className = "", variant = "primary" }: WhatsAppButtonProps) {
  const variants = {
    primary: "bg-red-700 text-white hover:bg-red-600 shadow-lg shadow-red-950/20",
    dark: "bg-zinc-950 text-white hover:bg-zinc-800",
    outline: "border border-red-700 text-red-700 hover:bg-red-700 hover:text-white",
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${variants[variant]} ${className}`}
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      {children}
    </Link>
  );
}
