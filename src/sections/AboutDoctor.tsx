import docImg from '../assets/img_p4_5.png'; // Placeholder for doctor image

export default function AboutDoctor() {
  return (
    <section className="section bg-light" id="about">
      <div className="container about-container">
        <div className="about-image">
          <img src={docImg} alt="Dr. Pranav Pradhan" />
          <div className="experience-badge">
            <span className="number">11+</span>
            <span className="text">Years<br/>Experience</span>
          </div>
        </div>
        <div className="about-content">
          <h2>About Dr. Pranav Pradhan</h2>
          <h3 className="qualification">BDS, Dr. G.D. Pol Foundation YMT College of Management</h3>
          <p className="registration">Registration: A 31123, Maharashtra State Dental Council (2015)</p>
          
          <div className="about-description">
            <p>
              Dr. Pranav Pradhan is a highly experienced and approachable dentist dedicated to providing comfortable and confident smile care. At Dentovilla, he focuses on clear communication, ensuring every patient understands their options.
            </p>
            <p>
              Known for his patience and gentle approach, Dr. Pradhan specializes in clear aligners, painless root canals, pediatric dentistry, and comprehensive oral rehabilitation. His philosophy centers around making dental visits anxiety-free.
            </p>
          </div>
          
          <ul className="about-highlights">
            <li>✨ General & Cosmetic Dentistry</li>
            <li>🩺 Patient Comfort Focused</li>
            <li>👶 Family & Child Friendly</li>
            <li>💡 Clear Treatment Explanations</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
