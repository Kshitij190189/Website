import smileCorrection from '../assets/smilecorrection.png';
import clearAligners from '../assets/clearaligner.png';
import teethWhitening from '../assets/teethwhiting.png';
import restorativeCare from '../assets/resorativecare.png';

const galleryItems = [
  {
    id: 1,
    image: smileCorrection,
    title: 'Smile Correction',
    description: 'Veneers & alignment for a perfect smile',
    icon: '✨',
  },
  {
    id: 2,
    image: clearAligners,
    title: 'Clear Aligners',
    description: 'Invisible correction of crowded teeth',
    icon: '🦷',
  },
  {
    id: 3,
    image: teethWhitening,
    title: 'Teeth Whitening',
    description: 'Professional brightening for a radiant smile',
    icon: '⚡',
  },
  {
    id: 4,
    image: restorativeCare,
    title: 'Restorative Care',
    description: 'Full restoration of damaged or missing teeth',
    icon: '🔬',
  },
];

export default function SmileGallery() {
  return (
    <section className="section bg-light" id="results">
      <div className="container">
        <div className="section-header text-center">
          <h2>Smile Transformations</h2>
          <p>Real results from Dentovilla</p>
        </div>

        <div className="smile-gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="smile-gallery-card" role="img" aria-label={`Before and after results for ${item.title} at Dentovilla`}>
              <div className="smile-gallery-img-wrapper">
                <img
                  src={item.image}
                  alt={`Before and after ${item.title} treatment by Dr. Pranav Pradhan at Dentovilla`}
                  className="smile-gallery-img"
                />
              </div>
              <div className="smile-gallery-overlay">
                <div className="smile-gallery-label">
                  <span className="smile-gallery-icon">{item.icon}</span>
                  <h4 className="smile-gallery-title">{item.title}</h4>
                  <p className="smile-gallery-desc">{item.description}</p>
                </div>
                <div className="smile-gallery-badge">Before &amp; After</div>
              </div>
            </div>
          ))}
        </div>

        <p className="disclaimer text-center mt-4 text-small text-muted">
          * Treatment results vary by individual case. Please consult Dr. Pradhan for personalised advice.
        </p>
      </div>
    </section>
  );
}
