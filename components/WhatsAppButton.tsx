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
<<<<<<< HEAD
    primary: "bg-[#202321] text-[#F5F3EE] hover:bg-[#151716]",
    dark: "bg-[#151716] text-[#F5F3EE] hover:bg-[#202321]",
    outline: "border border-[#A88A5A]/60 text-[#202321] hover:border-[#202321] hover:bg-[#202321] hover:text-[#F5F3EE]",
=======
    primary: "bg-red-700 text-white hover:bg-red-600 shadow-lg shadow-red-950/20",
    dark: "bg-zinc-950 text-white hover:bg-zinc-800",
    outline: "border border-red-700 text-red-700 hover:bg-red-700 hover:text-white",
>>>>>>> 3e5831ed6ee6134c6c7c70118e9c9d160167bd85
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
<<<<<<< HEAD
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold tracking-tight transition duration-300 ${variants[variant]} ${className}`}
=======
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${variants[variant]} ${className}`}
>>>>>>> 3e5831ed6ee6134c6c7c70118e9c9d160167bd85
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      {children}
    </Link>
  );
}
