import { BadgeCheck, History, ShieldCheck, Star } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import './TrustSection.css';

const trustItems = [
  { icon: BadgeCheck, title: 'Verificación', text: 'La identidad y los requisitos se adaptan al nivel de riesgo de cada categoría.' },
  { icon: Star, title: 'Reputación bilateral', text: 'Ambas partes podrán aportar señales de confianza después de cada experiencia.' },
  { icon: History, title: 'Trazabilidad', text: 'El historial ayuda a construir contexto más allá del boca a boca.' },
  { icon: ShieldCheck, title: 'Diseño por niveles de riesgo', text: 'Las tareas sensibles requieren protocolos adicionales y no forman parte del piloto inicial.' },
];

export function TrustSection() {
  return (
    <section className="section section--soft" id="confianza">
      <div className="container trust-grid">
        <SectionHeading
          eyebrow="Confianza"
          title="La rapidez solo sirve si también existe seguridad."
          description="Konektate plantea construir confianza de forma progresiva, combinando verificación, reputación e historial."
        />
        <div className="trust-list">
          {trustItems.map(({ icon: Icon, title, text }) => (
            <article key={title}>
              <Icon size={22} />
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
