import { Menu, X, Phone, Calendar } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ scrolled }: { scrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          <h2>Dentovilla</h2>
        </a>
        
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#about" onClick={() => setIsOpen(false)}>About Dr. Pradhan</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Treatments</a>
          <a href="#gallery" onClick={() => setIsOpen(false)}>Results</a>
          <a href="#reviews" onClick={() => setIsOpen(false)}>Reviews</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Visit Us</a>
        </div>

        <div className="nav-actions">
          <a href="tel:+910000000000" className="nav-phone">
            <Phone size={20} />
            <span>Call Now</span>
          </a>
          <button className="btn btn-primary nav-book">
            <Calendar size={18} style={{ marginRight: '8px' }} /> Book Visit
          </button>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
