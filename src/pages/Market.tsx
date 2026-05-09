import { Card } from '../components/Card'
import { FlowMap } from '../components/FlowMap'
import { Section } from '../components/Section'
import { competitors, pestel, swot } from '../data/content'
import { useViewMode } from '../context/ViewModeContext'

export default function Market() {
  const { isPresentation } = useViewMode()

  return (
    <>
      {isPresentation ? (
        <>
          <Section title="Analisi PESTEL" subtitle="Context estratègic del mercat de tecnologia turística.">
            <div className="grid cols-3">
              {pestel.map((item) => (
                <Card key={item.title} title={item.title}>
                  <p>{item.text}</p>
                </Card>
              ))}
            </div>
          </Section>

          <Section title="Competència" subtitle="Referents indirectes en descoberta, reserves i gestió de despeses.">
            <div className="chip-wrap">
              {competitors.map((name) => (
                <span key={name} className="chip fade-up">
                  {name}
                </span>
              ))}
            </div>
          </Section>

          <Section title="DAFO (SWOT)">
            <div className="grid cols-2">
              <Card title="Fortaleses">
                <ul>
                  {swot.strengths.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
              <Card title="Debilitats">
                <ul>
                  {swot.weaknesses.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
              <Card title="Oportunitats">
                <ul>
                  {swot.opportunities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
              <Card title="Amenaces">
                <ul>
                  {swot.threats.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
            </div>
          </Section>
        </>
      ) : (
        <>
          <Section title="Mercat i oportunitat" subtitle="Una lectura resumida per a visites corporatives.">
            <div className="grid cols-2">
              <Card title="Públic objectiu">
                <p>Joves i adults joves amb hàbit digital i interès per viatges compartits.</p>
              </Card>
              <Card title="Competència">
                <p>Airbnb, TripAdvisor i Splitwise existeixen, però cap resol el flux complet del viatge social.</p>
              </Card>
            </div>
          </Section>

          <Section title="Beneficis de mercat">
            <div className="grid cols-3">
              <Card title="Nínxol clar">
                <p>Integració de logística, xarxa social i divisió de costos en un sol producte.</p>
              </Card>
              <Card title="Efecte de xarxa">
                <p>Més usuaris generen més valor i fan créixer la proposta de manera natural.</p>
              </Card>
              <Card title="Canal B2B">
                <p>Els partners turístics obtenen una via nova de captació i recomanació.</p>
              </Card>
            </div>
          </Section>

          <Section title="Mapa del mercat" subtitle="Una lectura ràpida de la posició de WTO dins del sector de tecnologia turística.">
            <FlowMap
              title="Del context al nínxol de valor"
              subtitle="L’oportunitat neix quan unim viatge, comunitat i monetització en el mateix flux."
              nodes={[
                {
                  kicker: 'Entorn',
                  title: 'Mercat digitalitzat',
                  text: 'El turisme europeu ja opera amb canals digitals i una gran dependència del mòbil.',
                },
                {
                  kicker: 'Demanda',
                  title: 'Joves viatgers',
                  text: 'Cerquen experiències compartides, seguretat i menys cost per persona.',
                },
                {
                  kicker: 'Oferta',
                  title: 'Competidors parcials',
                  text: 'Les solucions existents cobreixen només una part del problema.',
                },
                {
                  kicker: 'Oportunitat',
                  title: 'WTO integrat',
                  text: 'Un producte que junta part social, operativa i aliats en una sola experiència.',
                },
              ]}
            />
          </Section>
        </>
      )}
    </>
  )
}
