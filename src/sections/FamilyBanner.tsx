import familyBg from '../assets/family_brushing.jpg';

const slogans = [
  '"Your smile is your best accessory."',
  '"Brush twice, floss once, smile always."',
  '"A healthy mouth is a healthy body."',
  '"Don\'t wait for pain — prevent it."',
];

export default function FamilyBanner() {
  return (
    <section
      id="family"
      aria-label="Family dental health banner with inspiring slogans"
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '520px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* ── Background image — family brushing teeth ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${familyBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transform: 'scale(1.04)',
        }}
      />

      {/* ── Dark teal gradient overlay — keeps image visible, text pops ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(15,23,42,0.80) 0%, rgba(52,83,89,0.70) 50%, rgba(15,23,42,0.55) 100%)',
        }}
      />

      {/* ── Content ── */}
      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '80px 28px', textAlign: 'center' }}>
        {/* Section label chip */}
        <div
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.25)',
            backdropFilter: 'blur(8px)',
            color: 'white', fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            padding: '7px 18px', borderRadius: '999px', marginBottom: '24px',
          }}
        >
          🌿 Healthy Families, Healthy Smiles
        </div>

        <h2
          style={{
            fontSize: 'clamp(1.9rem, 4vw, 3rem)',
            color: 'white', fontWeight: 900,
            marginBottom: '16px',
            letterSpacing: '-0.03em',
            textShadow: '0 2px 12px rgba(0,0,0,0.3)',
          }}
        >
          Dental Health Starts at Home &amp; Grows at Dentovilla
        </h2>

        <p
          style={{
            fontSize: '17px', color: 'rgba(255,255,255,0.88)',
            lineHeight: 1.8, marginBottom: '32px', maxWidth: '640px', margin: '0 auto 32px',
          }}
        >
          From your child's first tooth to a full smile makeover — we are your family's
          trusted dental partner, every step of the way.
        </p>

        {/* Slogans as glass chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '40px' }}>
          {slogans.map((s) => (
            <div
              key={s}
              style={{
                background: 'rgba(255,255,255,0.10)',
                border: '1px solid rgba(255,255,255,0.22)',
                backdropFilter: 'blur(10px)',
                color: 'white', fontSize: '13px', fontWeight: 500,
                padding: '8px 20px', borderRadius: '999px', fontStyle: 'italic',
              }}
            >
              {s}
            </div>
          ))}
        </div>

        {/* CTA button */}
        <a
          href="tel:+919167192989"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'white', color: '#345359',
            fontWeight: 700, fontSize: '15px',
            padding: '14px 32px', borderRadius: '999px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            textDecoration: 'none',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          aria-label="Book a family dental appointment at Dentovilla"
        >
          📅 Book a Family Visit
        </a>
      </div>
    </section>
  );
}
