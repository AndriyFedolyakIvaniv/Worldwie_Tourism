import { Card } from '../components/Card'
import { Section } from '../components/Section'

export default function Idea() {
  return (
    <>
      <Section title="Problema" subtitle="Planificar viatges en grup avui es una experiencia dispersa.">
        <div className="grid cols-3">
          <Card title="Caos operatiu">
            <p>Coordinar preferencies, budget i activitats amb moltes eines es ineficient.</p>
          </Card>
          <Card title="Multiplicitat d'apps">
            <p>WhatsApp, Airbnb i Splitwise no comparteixen context ni historial consolidat.</p>
          </Card>
          <Card title="Companys adequats">
            <p>Trobar persones amb interessos compatibles segueix sent un repte gran.</p>
          </Card>
        </div>
      </Section>

      <Section title="Solucio WTO" subtitle="Una sola plataforma social per la experiencia de viatge compartit.">
        <div className="grid cols-2">
          <Card title="Crear viatges col.laboratius">
            <p>Espais de grup amb itinerari, dates i tasques compartides.</p>
          </Card>
          <Card title="Matching de viatgers">
            <p>Perfils, interessos i filtres per connectar persones afins.</p>
          </Card>
          <Card title="Checklist compartit">
            <p>Seguiment de documents, reserves i pendents abans de sortir.</p>
          </Card>
          <Card title="Marketplace d'ofertes">
            <p>Acces a promocions i partners turistics integrats dins l'experiencia.</p>
          </Card>
        </div>
      </Section>
    </>
  )
}
