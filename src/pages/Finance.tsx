import { Section } from '../components/Section'
import { Card } from '../components/Card'
import { FlowMap } from '../components/FlowMap'
import { financing, forecast, investmentItems } from '../data/content'
import { useViewMode } from '../context/ViewModeContext'

function DataTable({
  headers,
  rows,
}: {
  headers: string[]
  rows: Array<string[]>
}) {
  return (
    <div className="table-wrap fade-up">
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join('-')}>
              {row.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Finance() {
  const { isPresentation } = useViewMode()

  return (
    <>
      {isPresentation ? (
        <>
          <Section title="Inversió inicial" subtitle="Distribució de capital per a l’arrencada del projecte.">
            <DataTable
              headers={['Concepte', 'Import']}
              rows={investmentItems.map((item) => [item.item, item.amount])}
            />
          </Section>

          <Section title="Fonts de finançament">
            <DataTable
              headers={['Font', 'Import']}
              rows={financing.map((item) => [item.source, item.amount])}
            />
          </Section>

          <Section title="Previsió econòmica (Any 1-3)">
            <DataTable
              headers={['Any', 'Ingressos', 'Despeses', 'Resultat net']}
              rows={forecast.map((item) => [item.year, item.revenue, item.costs, item.net])}
            />
          </Section>

          <Section title="Punt d’equilibri">
            <p className="lead fade-up">
              El break-even operatiu s’estima entre finals de l’any 2 i inici de l’any 3, un cop
              consolidats els canals B2B i les cohorts recurrents del model premium.
            </p>
          </Section>
        </>
      ) : (
        <>
          <Section title="Finances resumides" subtitle="Una visió executiva per a la web corporativa.">
            <div className="grid cols-3">
              <Card title="Inversió inicial">
                <p>60.000 € per cobrir desenvolupament, infraestructura i llançament.</p>
              </Card>
              <Card title="Finançament">
                <p>Socis fundadors, préstec ICO i suport d’un business angel o acceleradora.</p>
              </Card>
              <Card title="Viabilitat">
                <p>Els primers anys hi ha pèrdues previstes, però el creixement d’ingressos accelera el punt d’equilibri.</p>
              </Card>
            </div>
          </Section>

          <Section title="Indicadors clau">
            <div className="stat-grid">
              {forecast.map((item) => (
                <article key={item.year} className="stat-card fade-up">
                  <strong>{item.net}</strong>
                  <span>{item.year}</span>
                </article>
              ))}
            </div>
          </Section>

          <Section title="Mapa financer" subtitle="Com es transforma la inversió en creixement i estabilitat.">
            <FlowMap
              title="De capital inicial a punt d’equilibri"
              subtitle="El flux financer resumeix com s’activen els recursos fins arribar a la sostenibilitat operativa."
              nodes={[
                {
                  kicker: '01',
                  title: 'Inversió inicial',
                  text: 'Desenvolupament, infraestructura i llançament absorbeixen el capital de partida.',
                },
                {
                  kicker: '02',
                  title: 'Finançament extern',
                  text: 'Els socis, l’ICO i el suport d’un inversor cobreixen la fase de tracció.',
                },
                {
                  kicker: '03',
                  title: 'Ingressos recurrents',
                  text: 'El premium B2C i els aliats B2B aporten estabilitat progressiva.',
                },
                {
                  kicker: '04',
                  title: 'Equilibri',
                  text: 'La combinació d’escala i monetització fa viable el creixement a mig termini.',
                },
              ]}
            />
          </Section>

          <Section title="Mapa financer resumit" subtitle="Quatre passos per entendre la viabilitat econòmica del projecte.">
            <FlowMap
              title="Capital, finançament, creixement i equilibri"
              subtitle="Una seqüència visual per explicar les finances sense carregar la web de números."
              nodes={[
                { kicker: '01', title: 'Capital inicial', text: '60.000 € per posar en marxa el projecte.' },
                { kicker: '02', title: 'Fonts diverses', text: 'Socis, ICO i inversió externa per repartir el risc.' },
                { kicker: '03', title: 'Ingressos mixtos', text: 'Premium B2C i col·laboracions B2B com a motor de tracció.' },
                { kicker: '04', title: 'Punt d’equilibri', text: 'L’objectiu és acostar-se a l’equilibri a mig termini.' },
              ]}
            />
          </Section>
        </>
      )}
    </>
  )
}
