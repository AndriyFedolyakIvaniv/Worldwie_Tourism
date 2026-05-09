import { Button } from './Button'
import { brand } from '../data/content'
import { useViewMode } from '../context/ViewModeContext'
import { BrandLogo } from './BrandLogo'

export function Hero() {
  const { isPresentation } = useViewMode()

  return (
    <section className="hero fade-up">
      <p className="tag">{isPresentation ? 'Presentació interactiva del projecte' : 'Web corporativa de tecnologia turística'}</p>
      <BrandLogo />
      <h1>
        {brand.name} <span>{brand.slogan}</span>
      </h1>
      <p>
        {isPresentation
          ? 'Una presentació completa del pla d’empresa, amb mercat, identitat de marca, model de negoci i full de ruta per mostrar el projecte amb profunditat.'
          : 'La plataforma social de viatges compartits pensada per presentar l’empresa, el producte i la proposta de valor de manera clara i professional.'}
      </p>
      <div className="hero-actions">
        <Button to="/idea">{isPresentation ? 'Veure el producte' : 'Explora la solució'}</Button>
        <Button to="/contact" variant="secondary">
          {isPresentation ? 'Veure contacte i aliats' : 'Contacta amb nosaltres'}
        </Button>
      </div>
    </section>
  )
}
