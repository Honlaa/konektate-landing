import { faqs } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';
import './FaqSection.css';

export function FaqSection() {
  return (
    <section className="section section--soft" id="faq">
      <div className="container faq-layout">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Lo esencial antes de participar."
        />
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
