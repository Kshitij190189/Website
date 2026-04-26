import { Star } from 'lucide-react';
import doctorPatientBg from '../assets/doctor_patient_bg.jpg';

const reviews = [
  {
    id: 1,
    name: 'S. Patil',
    tag: 'Root Canal Patient',
    rating: 5,
    text: 'Dr. Pradhan is incredibly friendly and explains the issue perfectly. Highly approachable and understanding. My treatment was completely painless!',
  },
  {
    id: 2,
    name: 'R. Sharma',
    tag: 'Regular Patient',
    rating: 5,
    text: 'Very satisfied with my treatment. The clinic is spotlessly clean and Dr. Pradhan made my root canal completely painless. Best dentist in Dombivli!',
  },
  {
    id: 3,
    name: 'A. Kadam',
    tag: 'Long RCT Patient',
    rating: 5,
    text: 'Exceptional patience during a long RCT. Best dental clinic in Dombivli East, especially for those who fear dentists. Highly recommend!',
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '110px 0',
      }}
    >
      {/* ── Full background image — doctor treating patient ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${doctorPatientBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* ── Soft white overlay — just enough to keep text readable ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(255, 255, 255, 0.52)',
          backdropFilter: 'blur(2px)',
        }}
      />

      {/* ── Content ── */}
      <div
        className="container"
        style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}
      >
        {/* Section heading */}
        <div style={{ marginBottom: '60px' }}>
          <p
            style={{
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: '#6DA1A6', marginBottom: '10px',
            }}
          >
            ⭐ Patient Stories
          </p>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: 900, color: '#345359', letterSpacing: '-0.03em',
            }}
          >
            What Our Patients Say
          </h2>
        </div>

        {/* ── Three reviews — horizontal, no cards ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '48px',
            alignItems: 'start',
          }}
        >
          {reviews.map((review, i) => (
            <div
              key={review.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '14px',
                // Soft separator between reviews
                borderLeft: i > 0 ? '1px solid rgba(109,161,166,0.25)' : 'none',
                paddingLeft: i > 0 ? '48px' : '0',
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                {[...Array(review.rating)].map((_, idx) => (
                  <Star key={idx} size={18} fill="#FBBF24" color="#FBBF24" />
                ))}
              </div>

              {/* Review text */}
              <p
                style={{
                  fontSize: '15.5px',
                  lineHeight: 1.8,
                  color: '#2C3E40',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  textShadow: '0 1px 4px rgba(255,255,255,0.6)',
                }}
              >
                "{review.text}"
              </p>

              {/* Divider line */}
              <div
                style={{
                  width: '36px', height: '2px',
                  background: 'linear-gradient(90deg, #6DA1A6, #7EAFB4)',
                  borderRadius: '999px',
                }}
              />

              {/* Name & tag */}
              <div>
                <p
                  style={{
                    fontWeight: 800, fontSize: '15px',
                    color: '#345359', marginBottom: '3px',
                    textShadow: '0 1px 4px rgba(255,255,255,0.6)',
                  }}
                >
                  — {review.name}
                </p>
                <p
                  style={{
                    fontSize: '12px', color: '#000000',
                    fontWeight: 600, letterSpacing: '0.04em',
                  }}
                >
                  {review.tag}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
