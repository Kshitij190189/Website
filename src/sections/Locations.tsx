import { MapPin, Navigation } from 'lucide-react';
import imgLocation from '../assets/img_p10_1.png'; // Clinic image placeholder

export default function Locations() {
  return (
    <section className="section bg-white" id="locations">
      <div className="container">
        <div className="section-header text-center">
          <h2>Visit Our Clinics.</h2>
          <p>Conveniently located in Dombivli East and Palava City</p>
        </div>

        <div className="locations-wrapper">
          <div className="location-card-large primary">
            <div className="badge-primary">Main Clinic</div>
            <img src={imgLocation} alt="Dentovilla Clinic" className="clinic-img" />
            <div className="content">
              <h3>Dentovilla</h3>
              <p className="address">
                <MapPin size={18} />
                Shop No. 22, Regency Anantam, Dombivli East, Dombivli, India 421203.
              </p>
              <a href="#" className="btn btn-primary mt-3">
                <Navigation size={18} style={{ marginRight: '8px' }} />
                Get Directions
              </a>
            </div>
          </div>

          <div className="location-card-large secondary">
            <div className="badge-secondary">Secondary Location</div>
            <div className="content">
              <h3>Dr Pradhan’s Dental Clinic</h3>
              <p className="address">
                <MapPin size={18} />
                Shop No. 1, Goumukh Society, Fourth Circle, Opposite Lodha Elite Office, Lodha Heaven, Nilje, Palava
              </p>
              <p className="landmark text-muted">Landmark: 4th chowk</p>
              <a href="#" className="btn btn-outline mt-3">
                <Navigation size={18} style={{ marginRight: '8px' }} />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
