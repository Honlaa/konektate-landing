import { BadgeCheck, MapPin, Network, Star } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import './AppPreviewSection.css';

export function AppPreviewSection() {
  return (
    <section className="section" id="preview">
      <div className="container preview-layout">
        <div>
          <SectionHeading
            eyebrow="Vista previa conceptual"
            title="Así podría sentirse la experiencia dentro de Konektate."
            description="Estos elementos representan el producto futuro. No ejecutan matching ni solicitudes desde esta landing."
          />
          <div className="preview-note">
            <BadgeCheck size={20} />
            <span>Prototipo visual — no aplicación operativa.</span>
          </div>
        </div>
        <div className="preview-stack" aria-label="Mockup conceptual de la futura app">
          <article className="preview-card preview-card--back">
            <Network />
            <span>Matching activo</span>
            <strong>Buscando coincidencias...</strong>
          </article>
          <article className="preview-card preview-card--front">
            <div className="preview-card__top">
              <span>Konektate</span>
              <BadgeCheck />
            </div>
            <h3>Persona disponible</h3>
            <div className="provider-row">
              <div className="avatar">CM</div>
              <div>
                <strong>Carlos M.</strong>
                <span><Star size={14} /> 4.9 · Verificado</span>
              </div>
            </div>
            <div className="preview-meta">
              <span><MapPin /> 1.6 km</span>
              <span>S/ 40 estimado</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
