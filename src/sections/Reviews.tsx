import { Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    { id: 1, name: 'S. Patil', rating: 5, text: 'Dr. Pradhan is incredibly friendly and explains the issue perfectly. Highly approachable and understanding.' },
    { id: 2, name: 'R. Sharma', rating: 5, text: 'Very satisfied with my treatment. The clinic is clean and Dr. Pradhan made my root canal completely painless!' },
    { id: 3, name: 'A. Kadam', rating: 5, text: 'Exceptional patience during a long RCT. Best dental clinic in Dombivli East, especially for those who fear dentists.' }
  ];

  return (
    <section className="section" id="reviews">
      <div className="container">
        <div className="section-header text-center">
          <h2>Patient Reviews</h2>
          <p>100% Recommendation signal from our patients</p>
        </div>

        <div className="reviews-grid">
          {reviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" color="#fbbf24" />
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
              <p className="review-author">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
