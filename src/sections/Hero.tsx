import { Calendar, Phone, ChevronRight } from 'lucide-react';
import docImg from '../assets/hero.png'; // Need an image back

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="trust-strip">
            <span>Dentovilla Dental Clinic</span>
            <span className="dot">•</span>
            <span>Multispeciality</span>
          </div>
          <h1>Confidence in Every Bite.</h1>
          <p className="hero-subtitle">Transform your smile with Dr. Pranav Pradhan. Skip the anxiety—experience painless, advanced, and reliable dental care.</p>
          <div className="hero-actions">
            <button className="btn btn-primary">
              Book Appointment
            </button>
            <a href="tel:+919167192989" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              Learn more <ChevronRight size={16} />
            </a>
          </div>
        </div>
        <div className="hero-image animate-fade-in" style={{ animationDelay: '0.2s', marginTop: '40px', width: '100%', display: 'flex', justifyContent: 'center' }}>
          <div className="image-wrapper" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
            <img src={docImg} alt="Dr. Pranav Pradhan at Dentovilla" className="main-img" style={{ maxWidth: '800px', width: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
