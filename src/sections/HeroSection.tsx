import { ArrowDownRight, BadgeCheck, MapPin, Zap } from 'lucide-react';
import './HeroSection.css';

export function HeroSection() {
  return (
    <section className="hero section" id="inicio">
      <div className="hero__glow hero__glow--one" aria-hidden="true" />
      <div className="hero__glow hero__glow--two" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="eyebrow eyebrow--light">Microtrabajos locales bajo demanda</span>
          <h1>
            Lo que necesitas,
            <span> conectado con quien puede resolverlo.</span>
          </h1>
          <p>
            Konektate es una iniciativa que busca conectar necesidades locales
            con personas cercanas, disponibles y verificadas mediante matching activo.
          </p>
          <div className="hero__actions">
            <a className="button button--primary button--light" href="#que-es">
              Descubre Konektate <ArrowDownRight size={18} />
            </a>
            <a className="button button--ghost" href="#piloto">
              Conocer el piloto
            </a>
          </div>
          <div className="hero__signals" aria-label="Principios de Konektate">
            <span><MapPin size={16} /> Local</span>
            <span><Zap size={16} /> Ágil</span>
            <span><BadgeCheck size={16} /> Basado en confianza</span>
          </div>
        </div>
        <div className="hero-network" aria-label="Ilustración conceptual de una red local">
          <div className="hero-network__core">K</div>
          <span className="node node--1">Necesidad</span>
          <span className="node node--2">Cercanía</span>
          <span className="node node--3">Disponibilidad</span>
          <span className="node node--4">Reputación</span>
        </div>
      </div>
    </section>
  );
}
