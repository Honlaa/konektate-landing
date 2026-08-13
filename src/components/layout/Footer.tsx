import { BrandMark } from '../ui/BrandMark';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <BrandMark />
          <p>Conexiones locales que convierten necesidades reales en oportunidades.</p>
        </div>
        <div className="footer__links">
          <a href="#que-es">Qué es</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#piloto">Piloto</a>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© 2026 Konektate</span>
        <span>Landing informativa · Propuesta en validación</span>
      </div>
    </footer>
  );
}
