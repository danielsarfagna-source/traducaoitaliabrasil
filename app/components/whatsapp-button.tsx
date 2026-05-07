import Link from "next/link";
import { whatsappHref } from "../lib/site";

type WhatsAppButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export function WhatsAppButton({ children, className = "" }: WhatsAppButtonProps) {
  return (
    <Link href={whatsappHref()} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );
}
