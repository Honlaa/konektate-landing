import { CheckCircle2 } from 'lucide-react';
import { usePilotForm } from '../hooks/usePilotForm';
import './PilotSection.css';

export function PilotSection() {
  const { submitted, submit, reset } = usePilotForm();

  return (
    <section className="section pilot" id="piloto">
      <div className="container pilot__grid">
        <div>
          <span className="eyebrow eyebrow--light">Piloto Konektate</span>
          <h2>¿Te interesa conocer o probar la iniciativa?</h2>
          <p>
            Déjanos tus datos como registro de interés. Esto no crea una solicitud
            de servicio ni reemplaza la futura aplicación.
          </p>
          <ul className="check-list">
            <li><CheckCircle2 /> Conocer novedades del piloto</li>
            <li><CheckCircle2 /> Participar en validaciones</li>
            <li><CheckCircle2 /> Ayudarnos a entender necesidades reales</li>
          </ul>
        </div>
        {submitted ? (
          <div className="pilot-form pilot-form--success" role="status">
            <CheckCircle2 size={34} />
            <h3>¡Gracias por tu interés!</h3>
            <p>El formulario está listo para conectarse a tu backend o herramienta de captación.</p>
            <button className="button button--secondary" type="button" onClick={reset}>
              Registrar otra persona
            </button>
          </div>
        ) : (
          <form className="pilot-form" onSubmit={submit}>
            <label>Nombre<input name="name" autoComplete="name" required /></label>
            <label>Correo<input name="email" type="email" autoComplete="email" required /></label>
            <label>Distrito<input name="district" autoComplete="address-level2" required /></label>
            <label>
              Me interesa
              <select name="interest" defaultValue="solicitante">
                <option value="solicitante">Conocer Konektate como solicitante</option>
                <option value="prestador">Conocer Konektate como prestador</option>
                <option value="ambos">Ambos lados de la plataforma</option>
              </select>
            </label>
            <button className="button button--primary button--full" type="submit">
              Registrar mi interés
            </button>
            <small>Demo front-end: conecta este formulario a tu API o servicio de formularios.</small>
          </form>
        )}
      </div>
    </section>
  );
}
