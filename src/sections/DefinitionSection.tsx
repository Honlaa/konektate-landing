import { values } from '../data/content';
import { InfoCard } from '../components/ui/InfoCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import './DefinitionSection.css';

export function DefinitionSection() {
  return (
    <section className="section" id="que-es">
      <div className="container">
        <div className="split-heading">
          <SectionHeading
            eyebrow="Qué es Konektate"
            title="No es un directorio. Es una red que activa oportunidades."
          />
          <p className="lead-copy">
            En vez de recorrer decenas de perfiles, la necesidad inicia la conexión
            y Konektate busca activar personas compatibles según cercanía,
            disponibilidad y reputación.
          </p>
        </div>
        <div className="card-grid card-grid--3">
          {values.map((item) => <InfoCard key={item.title} {...item} />)}
        </div>
        <div className="comparison">
          <div>
            <span>Modelo tradicional</span>
            <strong>Buscar → comparar → negociar → contratar</strong>
          </div>
          <div className="comparison__arrow">→</div>
          <div>
            <span>Modelo Konektate</span>
            <strong>Publicar → conectar → confirmar → resolver</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
