import Link from "next/link";
import { whatsappHref } from "../lib/site";

type WhatsAppButtonProps = {
  children: React.ReactNode;
  className?: string;
  message?: string;
};

export function WhatsAppButton({ children, className = "", message }: WhatsAppButtonProps) {
  return (
    <Link href={whatsappHref(message)} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );
}
