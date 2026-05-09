import { Card } from '../components/Card'
import { Section } from '../components/Section'
import { useViewMode } from '../context/ViewModeContext'

export default function Idea() {
  const { isPresentation } = useViewMode()

  return (
    <>
      {isPresentation ? (
        <>
          <Section title="Problema" subtitle="Planificar viatges en grup avui continua sent fragmentat i poc eficient.">
            <div className="grid cols-3">
              <Card title="Caos operatiu">
                <p>
                  Coordenar pressupost, dates i activitats amb moltes eines genera errors i retards
                  en la presa de decisions.
                </p>
              </Card>
              <Card title="Multiplicitat d’apps">
                <p>
                  WhatsApp, Airbnb i Splitwise no comparteixen context ni historial consolidat del
                  viatge.
                </p>
              </Card>
              <Card title="Companys adequats">
                <p>
                  Trobar persones amb interessos compatibles segueix sent difícil i poc fiable en
                  les solucions actuals.
                </p>
              </Card>
            </div>
          </Section>

          <Section title="Solució WTO" subtitle="Una sola plataforma social per gestionar tot el viatge compartit.">
            <div className="grid cols-2">
              <Card title="Crear viatges col·laboratius">
                <p>Espais de grup amb itinerari, dates i tasques compartides en temps real.</p>
              </Card>
              <Card title="Matching de viatgers">
                <p>Perfils, interessos i filtres per connectar persones afins i generar confiança.</p>
              </Card>
              <Card title="Checklist compartit">
                <p>Seguiment de documents, reserves i pendents abans de sortir.</p>
              </Card>
              <Card title="Marketplace d’ofertes">
                <p>Accés a promocions i partners turístics integrats dins l’experiència.</p>
              </Card>
            </div>
          </Section>
        </>
      ) : (
        <>
          <Section title="Producte" subtitle="Presentem la solució de manera resumida i comercial.">
            <div className="grid cols-2">
              <Card title="Una sola app">
                <p>
                  WTO reuneix viatges, comunitat i despeses en una experiència simple i fàcil de
                  presentar a qualsevol públic.
                </p>
              </Card>
              <Card title="Per què funciona">
                <p>
                  Com més usuaris hi ha, millor és la xarxa: més perfils, més opcions i més valor
                  per al viatger final.
                </p>
              </Card>
            </div>
          </Section>

          <Section title="Beneficis">
            <div className="grid cols-3">
              <Card title="Menys fricció">
                <p>Tot el procés de coordinació queda centralitzat.</p>
              </Card>
              <Card title="Més confiança">
                <p>Perfils i interacció social per trobar gent amb més seguretat.</p>
              </Card>
              <Card title="Més valor comercial">
                <p>La plataforma obre espai per a ofertes i partners turístics.</p>
              </Card>
            </div>
          </Section>
        </>
      )}
    </>
  )
}
