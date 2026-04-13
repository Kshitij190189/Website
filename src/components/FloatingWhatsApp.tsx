import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a href="https://wa.me/910000000000" className="floating-whatsapp" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
      <MessageCircle size={32} />
    </a>
  );
}
