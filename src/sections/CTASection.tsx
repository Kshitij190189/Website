import { Calendar, Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="cta-section" aria-label="Call to action — book your dental appointment at Dentovilla">
      <div className="container cta-content">
        <h2>Ready for a Painless, Confident Smile?</h2>
        <p>
          Join thousands of happy patients at Dentovilla. Book your appointment today and
          experience the most comfortable dental care in Dombivli.
        </p>
        <div className="cta-actions">
          <button
            className="btn btn-white"
            aria-label="Book a dental appointment at Dentovilla"
          >
            <Calendar size={17} />
            Book Your Visit Today
          </button>
          <a
            href="tel:+919167192989"
            className="btn btn-ghost"
            aria-label="Call Dentovilla dental clinic directly"
          >
            <Phone size={17} />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
