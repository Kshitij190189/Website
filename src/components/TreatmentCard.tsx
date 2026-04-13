import { ArrowRight } from 'lucide-react';

interface TreatmentCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function TreatmentCard({ title, description, icon }: TreatmentCardProps) {
  return (
    <div className="treatment-card">
      <div className="icon-wrapper">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="card-link">
        Learn more <ArrowRight size={16} />
      </button>
    </div>
  );
}
