import { CheckCircle2, AlertTriangle } from 'lucide-react';

export default function DentalTips() {
  return (
    <section className="section bg-light" id="tips">
      <div className="container">
        <div className="section-header text-center">
          <h2>Dr. Pradhan's Educational Hub</h2>
          <p>Myths, Facts, and Tips for a Healthier Smile</p>
        </div>

        <div className="tips-wrapper">
          <div className="tip-card myth">
            <div className="tip-icon"><AlertTriangle size={32} color="#c5a059" /></div>
            <h3>Myth: Root Canals Cause Pain</h3>
            <p><strong>Fact:</strong> Root canals are meant to <i>relieve</i> pain! The infection itself is the source of suffering, and RCT is a safe, completely painless way to eliminate it and save your natural tooth.</p>
          </div>

          <div className="tip-card education">
            <div className="tip-icon"><CheckCircle2 size={32} color="#0b1e36" /></div>
            <h3>Why Night Brushing is Mandatory</h3>
            <p>Skipping your night brush allows bacteria to multiply drastically in your mouth while you sleep. This directly leads to morning bad breath, cavities, and severe gum disease.</p>
          </div>

          <div className="tip-card fact">
            <div className="tip-icon"><CheckCircle2 size={32} color="#0b1e36" /></div>
            <h3>The Truth About "Milk Teeth"</h3>
            <p>Milk teeth are crucial placeholders that guide permanent teeth. Early loss leads to alignment issues.</p>
          </div>
          
          <div className="tip-card myth">
            <div className="tip-icon"><AlertTriangle size={32} color="#c5a059" /></div>
            <h3>DIY Teeth Whitening & Bleeding Gums</h3>
            <p><strong>Warning:</strong> Avoid internet DIY hacks that permanently strip enamel. Also, bleeding while brushing is <strong>not normal</strong>; it’s an early sign of Pyorrhea (Gum Disease).</p>
          </div>

          <div className="tip-card fact">
            <div className="tip-icon"><CheckCircle2 size={32} color="#0b1e36" /></div>
            <h3>Toothpicks vs. Floss / Plaque vs. Tartar</h3>
            <p>Toothpicks damage your gums! Use a water flosser or interdental brush. Remember, soft plaque can be brushed away, but once it hardens into Tartar, only professional scaling can remove it safely.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
