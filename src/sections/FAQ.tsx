import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  { question: "Where is Dentovilla located?", answer: "Dentovilla, our primary flagship clinic, is located at Shop No. 22, Regency Anantam, Dombivli East." },
  { question: "Is Dr. Pranav Pradhan available in Palava City also?", answer: "Yes, secondary consultations are available at Dr Pradhan’s Dental Clinic in Palava City, Dombivli." },
  { question: "What are the clinic timings?", answer: "We are open Monday to Sunday, 10:00 AM – 1:30 PM and 6:00 PM – 9:30 PM." },
  { question: "Do you treat children?", answer: "Absolutely! We specialize in pediatric dentistry and providing a comfortable, fear-free environment for kids." },
  { question: "Are clear aligners available?", answer: "Yes, we offer clear/invisible aligners and traditional braces for teeth straightening." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section bg-light" id="faq">
      <div className="container faq-container">
        <div className="section-header text-center">
          <h2>Frequently Asked Questions</h2>
          <p>Common questions from our patients</p>
        </div>

        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
