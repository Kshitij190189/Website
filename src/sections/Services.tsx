import TreatmentCard from '../components/TreatmentCard';
import rctImg from '../assets/services/rct.png';
import veneersImg from '../assets/services/veneers.png';
import alignersImg from '../assets/services/aligners.png';
import implantsImg from '../assets/services/implants.png';
import pediatricImg from '../assets/services/pediatric.png';
import wisdomImg from '../assets/services/wisdom.png';
import scalingImg from '../assets/services/scaling.png';
import whiteningImg from '../assets/services/whitening.png';
import rehabImg from '../assets/services/rehab.png';

export default function Services() {
  const services = [
    { title: "Painless Root Canal", description: "RCT is meant to relieve pain, not cause it. We eliminate the infection safely and comfortably.", icon: "🦷", image: rctImg },
    { title: "Smile Makeovers & Veneers", description: "Achieve premium, natural, and long-lasting results. We craft your ideal celebrity smile.", icon: "✨", image: veneersImg },
    { title: "Clear Aligners", description: "Discreetly straighten teeth without metal braces. Perfect for working professionals seeking comfort.", icon: "😁", image: alignersImg },
    { title: "Full Mouth Implants", description: "A permanent, transformative alternative to dentures. Regain the confidence to eat your favorite foods without shifting.", icon: "🔩", image: implantsImg },
    { title: "Pediatric Care", description: "Milk teeth are placeholders for the future! We treat kids' dental issues early to guide permanent tooth alignment.", icon: "🧸", image: pediatricImg },
    { title: "Wisdom Tooth Removal", description: "Safe, painless extractions under anesthesia for impacted wisdom teeth causing pain or swelling.", icon: "🩺", image: wisdomImg },
    { title: "Professional Scaling", description: "Soft plaque hardens into Tartar fast. We provide deep clinical scaling to prevent early Pyorrhea.", icon: "🧼", image: scalingImg },
    { title: "Safe Teeth Whitening", description: "Avoid harmful DIY internet hacks. We offer safe, professional whitening for a bright, confident smile.", icon: "💎", image: whiteningImg },
    { title: "Full Mouth Rehabilitation", description: "Comprehensive restoration for a complete functional and aesthetic makeover of your entire smile.", icon: "🏥", image: rehabImg },
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
