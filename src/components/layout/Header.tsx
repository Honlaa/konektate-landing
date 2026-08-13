import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigation } from '../../data/content';
import { BrandMark } from '../ui/BrandMark';
import './Header.css';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <BrandMark />
        <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Navegación principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            className="button button--small button--primary"
            href="#piloto"
            onClick={() => setOpen(false)}
          >
            Conocer el piloto
          </a>
        </nav>
        <button
          className="menu-button"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
