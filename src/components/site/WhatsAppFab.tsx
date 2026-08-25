import { MessageCircle } from "lucide-react";
import { WHATSAPP_MAIN } from "@/data/site";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_MAIN}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 left-5 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-navy-deep shadow-elegant transition-transform hover:-translate-y-0.5"
    >
      <MessageCircle className="h-5 w-5" />
      Fale no WhatsApp
    </a>
  );
}
