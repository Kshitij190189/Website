export default function TrustBar() {
  const items = [
    { icon: '🏆', text: '11+ Years of Excellence' },
    { icon: '😊', text: 'Painless Treatments' },
    { icon: '👨‍👩‍👧‍👦', text: 'Family & Child Friendly' },
    { icon: '🔬', text: 'Advanced Technology' },
    { icon: '❤️', text: 'Patient Comfort First' },
  ];

  return (
    <section id="trust" className="trust-bar" aria-label="Dentovilla key trust factors">
      <div className="container">
        <div className="trust-bar-inner" role="list">
          {items.map((item, i) => (
            <>
              <div className="trust-item" key={item.text} role="listitem">
                <div className="trust-icon" aria-hidden="true">{item.icon}</div>
                <span>{item.text}</span>
              </div>
              {i < items.length - 1 && <div className="trust-divider" aria-hidden="true" />}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
