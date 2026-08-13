import type { InfoCard as InfoCardType } from '../../types';
import './InfoCard.css';

export function InfoCard({ icon: Icon, title, description }: InfoCardType) {
  return (
    <article className="info-card">
      <span className="info-card__icon" aria-hidden="true">
        <Icon size={21} />
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
