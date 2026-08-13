import { steps } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';
import './HowItWorksSection.css';

export function HowItWorksSection() {
  return (
    <section className="section section--dark" id="como-funciona">
      <div className="container">
        <SectionHeading
          eyebrow="Cómo funcionará la app"
          title="Una experiencia pensada para reducir fricción."
          description="Esta landing no ejecuta el servicio: explica el flujo que Konektate busca ofrecer cuando la aplicación esté operativa."
        />
        <div className="steps">
          {steps.map((step) => (
            <article className="step" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
