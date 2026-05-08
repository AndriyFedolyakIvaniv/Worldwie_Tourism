import { Button } from './Button'
import { brand } from '../data/content'

export function Hero() {
  return (
    <section className="hero fade-up">
      <p className="tag">Portal corporatiu startup travel-tech</p>
      <h1>
        {brand.name} <span>{brand.slogan}</span>
      </h1>
      <p>
        Connectem viatgers, partners i inversors en una plataforma social de viatges compartits
        amb enfoc en tecnologia, comunitat i creixement sostenible.
      </p>
      <div className="hero-actions">
        <Button to="/idea">Explora el projecte</Button>
        <Button to="/contact" variant="secondary">
          Contacta amb nosaltres
        </Button>
      </div>
    </section>
  )
}
