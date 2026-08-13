import { requesterBenefits, providerBenefits } from '../data/content';
import { InfoCard } from '../components/ui/InfoCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import './AudienceSection.css';

export function AudienceSection() {
  return (
    <section className="section" id="para-quien">
      <div className="container">
        <SectionHeading
          eyebrow="Dos lados, una misma red"
          title="Konektate crea valor para quien necesita y para quien resuelve."
          align="center"
        />
        <div className="audience-grid">
          <article className="audience-panel audience-panel--blue">
            <span className="audience-panel__tag">Quien necesita ayuda</span>
            <h3>Resolver una tarea sin convertirla en una búsqueda interminable.</h3>
            <div className="mini-grid">
              {requesterBenefits.map((item) => <InfoCard key={item.title} {...item} />)}
            </div>
          </article>
          <article className="audience-panel audience-panel--green">
            <span className="audience-panel__tag">Quien quiere generar ingresos</span>
            <h3>Transformar tiempo y habilidades prácticas en oportunidades cercanas.</h3>
            <div className="mini-grid">
              {providerBenefits.map((item) => <InfoCard key={item.title} {...item} />)}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
