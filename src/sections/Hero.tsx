import { ChevronRight } from 'lucide-react';
import HeroCanvas from '../components/HeroCanvas';

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-v2" id="home">

      {/* ── Three.js scene (tooth + rings + particles all inside) ── */}
      <HeroCanvas />

      {/* ── HTML overlay ── */}
      <div className="container hero-v2-container">

        {/* LEFT: Text */}
        <div className="hero-v2-content animate-fade-in">
          <div className="trust-strip">
            <span>Dentovilla Dental Clinic</span>
            <span className="dot">|</span>
            <span>Multispeciality</span>
          </div>

          <h1>
            Confidence in{' '}
            <span className="hero-accent">Every Bite.</span>
          </h1>

          <p className="hero-subtitle">
            Transform your smile with Dr. Pranav Pradhan. Skip the anxiety —
            experience painless, advanced, and reliable dental care.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary hero-cta">
              📅 Book Appointment
            </button>
            <a
              href="tel:+919167192989"
              className="btn btn-outline"
              style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              Learn more <ChevronRight size={16} />
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-num">500+</span>
              <span className="stat-label">Happy Patients</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="stat-num">11+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="stat-num">8+</span>
              <span className="stat-label">Treatments</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Badges float over the Three.js tooth — no <img> needed */}
        <div className="hero-v2-visual animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="badge-overlay-area">
            <div className="glass-badge badge-top-right">
              <span className="badge-icon">✅</span>
              <span>Painless RCT</span>
            </div>
            <div className="glass-badge badge-mid-left">
              <span className="badge-icon">⭐</span>
              <span>500+ Reviews</span>
            </div>
            <div className="glass-badge badge-bottom-right">
              <span className="badge-icon">🏆</span>
              <span>11+ Yrs Exp.</span>
            </div>
          </div>
        </div>

      </div>

      {/* ── Feature Pills ── */}
      <div className="hero-features-strip">
        <button className="feature-pill" onClick={scrollToServices}>
          <span>⚡</span> Advanced Technology
        </button>
        <button className="feature-pill" onClick={scrollToServices}>
          <span>💉</span> Painless Treatment
        </button>
        <button className="feature-pill" onClick={scrollToServices}>
          <span>👨‍⚕️</span> Expert Care
        </button>
        <button className="feature-pill" onClick={scrollToServices}>
          <span>😊</span> Patient Comfort
        </button>
      </div>

    </section>
  );
}
