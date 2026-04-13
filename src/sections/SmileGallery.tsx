import img1 from '../assets/img_p7_35.png';
import img2 from '../assets/img_p8_8.png';
// Using placeholders for gallery since we have many images.

export default function SmileGallery() {
  const galleryItems = [
    { id: 1, image: img1, title: 'Smile Correction' },
    { id: 2, image: img2, title: 'Clear Aligners' },
    { id: 3, image: img1, title: 'Teeth Whitening' },
    { id: 4, image: img2, title: 'Restorative Care' },
  ];

  return (
    <section className="section bg-light" id="gallery">
      <div className="container">
        <div className="section-header text-center">
          <h2>Smile Transformations</h2>
          <p>Real results from Dentovilla</p>
        </div>
        
        <div className="gallery-grid">
          {galleryItems.map(item => (
            <div key={item.id} className="gallery-item">
              <img src={item.image} alt={item.title} />
              <div className="gallery-overlay">
                <h4>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
        <p className="disclaimer text-center mt-4 text-small text-muted">
          * Treatment results vary by individual case. Please consult Dr. Pradhan for personalized advice.
        </p>
      </div>
    </section>
  );
}
