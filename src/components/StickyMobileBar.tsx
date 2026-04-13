import { Phone, Calendar, MessageCircle } from 'lucide-react';

export default function StickyMobileBar() {
  return (
    <div className="sticky-mobile-bar">
      <a href="tel:+910000000000" className="mobile-action phone">
        <Phone size={20} />
        <span>Call</span>
      </a>
      <a href="https://wa.me/910000000000" className="mobile-action whatsapp" target="_blank" rel="noreferrer">
        <MessageCircle size={20} />
        <span>WhatsApp</span>
      </a>
      <button className="mobile-action book">
        <Calendar size={20} />
        <span>Book</span>
      </button>
    </div>
  );
}
