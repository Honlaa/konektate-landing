import { pains } from '../data/content';
import { InfoCard } from '../components/ui/InfoCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import './ProblemSection.css';

export function ProblemSection() {
  return (
    <section className="section section--soft" id="problema">
      <div className="container">
        <SectionHeading
          eyebrow="El problema"
          title="Hoy existe una desconexión local."
          description="Personas que necesitan resolver algo y personas capaces de ayudar suelen encontrarse tarde, por canales informales o con demasiada incertidumbre."
          align="center"
        />
        <div className="card-grid card-grid--3">
          {pains.map((item) => <InfoCard key={item.title} {...item} />)}
        </div>
      </div>
    </section>
  );
}
