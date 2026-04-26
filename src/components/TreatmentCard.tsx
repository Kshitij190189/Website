import { ArrowRight } from 'lucide-react';

interface TreatmentCardProps {
  title: string;
  description: string;
  icon: string;
  image: string;
}

export default function TreatmentCard({ title, description, icon, image }: TreatmentCardProps) {
  return (
    <div className="treatment-card">
      {/* Top Image Section */}
      <div className="card-image-section">
        <img src={image} alt={title} className="card-img" />
        {/* Icon badge at bottom-left of image */}
        <div className="card-icon-badge">{icon}</div>
      </div>

      {/* Bottom Content Section */}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="card-link">
          Learn more <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}
