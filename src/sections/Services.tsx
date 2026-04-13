import TreatmentCard from '../components/TreatmentCard';

export default function Services() {
  const services = [
    { title: "Painless Root Canal", description: "RCT is meant to relieve pain, not cause it. We eliminate the infection safely and comfortably.", icon: "🦷" },
    { title: "Smile Makeovers & Veneers", description: "Achieve premium, natural, and long-lasting results. We craft your ideal celebrity smile.", icon: "✨" },
    { title: "Clear Aligners", description: "Discreetly straighten teeth without metal braces. Perfect for working professionals seeking comfort.", icon: "😁" },
    { title: "Full Mouth Implants", description: "A permanent, transformative alternative to dentures. Regain the confidence to eat your favorite foods without shifting.", icon: "🔩" },
    { title: "Pediatric Care", description: "Milk teeth are placeholders for the future! We treat kids' dental issues early to guide permanent tooth alignment.", icon: "🧸" },
    { title: "Wisdom Tooth Removal", description: "Safe, painless extractions under anesthesia for impacted wisdom teeth causing pain or swelling.", icon: "🩺" },
    { title: "Professional Scaling", description: "Soft plaque hardens into Tartar fast. We provide deep clinical scaling to prevent early Pyorrhea.", icon: "🧼" },
    { title: "Safe Teeth Whitening", description: "Avoid harmful DIY internet hacks. We offer safe, professional whitening for a bright, confident smile.", icon: "💎" },
  ];

  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-header text-center">
          <h2>Transform Your Smile</h2>
          <p>Advanced Multispeciality Dental Care You Can Trust</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <TreatmentCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
