import { Section } from '../components/Section'

export default function Contact() {
  return (
    <Section title="Contacte" subtitle="Parlem de partnerships, inversio i creixement de WTO.">
      <div className="contact-grid">
        <form className="contact-form fade-up" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="name">Nom</label>
          <input id="name" name="name" type="text" placeholder="Escriu el teu nom" required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="tu@empresa.com" required />

          <label htmlFor="message">Missatge</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Explica'ns com et podem ajudar"
            required
          />

          <button className="btn btn-primary" type="submit">
            Enviar consulta
          </button>
        </form>

        <aside className="contact-panel fade-up">
          <h3>WTO S.L.</h3>
          <p>Email corporatiu: hello@wto-travel.com</p>
          <p>Barcelona, Catalunya</p>
          <p>LinkedIn / Instagram / X (simulat)</p>
        </aside>
      </div>
    </Section>
  )
}
