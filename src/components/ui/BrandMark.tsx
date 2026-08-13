import './BrandMark.css';
export function BrandMark() {
  return (
    <a className="brand" href="#inicio" aria-label="Konektate, ir al inicio">
      <svg className="brand__mark" viewBox="0 0 42 42" aria-hidden="true">
        <path d="M10 11 21 21 32 10M21 21l11 11M21 21 10 11" />
        <circle cx="10" cy="11" r="4" />
        <circle cx="32" cy="10" r="4" />
        <circle cx="21" cy="21" r="4.5" />
        <circle cx="32" cy="32" r="4" />
        <circle cx="10" cy="32" r="4" />
      </svg>
      <span>Konektate</span>
    </a>
  );
}
