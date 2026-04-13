import { MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2>Dentovilla</h2>
          <p>Premium, Painless, and Precision Dental Care by Dr. Pranav Pradhan.</p>
        </div>

        <div className="footer-locations">
          <div className="location-card primary-clinic">
            <div className="clinic-badge">Primary Flagship Clinic</div>
            <h3>Dentovilla</h3>
            <p><MapPin size={16} /> Shop No. 22, Regency Anantam, Dombivli East, Dombivli, India 421203</p>
            <p><Phone size={16} /> +91 00000 00000</p>
          </div>

          <div className="location-card secondary-clinic">
            <div className="clinic-badge secondary">Consultations Available</div>
            <h3>Dr Pradhan’s Dental Clinic</h3>
            <p><MapPin size={16} /> Shop No. 1, Goumukh Society, Fourth Circle, Opposite Lodha Elite Office, Lodha Heaven, Nilje, Palava</p>
            <p><Clock size={16} /> Mon - Sun: 10:00 AM – 1:30 PM & 6:00 PM – 9:30 PM</p>
            <p className="fee">Consultation Fee: ₹100</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Dentovilla. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
