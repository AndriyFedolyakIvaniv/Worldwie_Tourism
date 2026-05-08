import { Section } from '../components/Section'
import { financing, forecast, investmentItems } from '../data/content'

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
  return (
    <>
      <Section title="Inversio inicial" subtitle="Distribucio de capital per arrancada del projecte.">
        <DataTable
          headers={['Concepte', 'Import']}
          rows={investmentItems.map((item) => [item.item, item.amount])}
        />
      </Section>

      <Section title="Fonts de financiacio">
        <DataTable
          headers={['Font', 'Import']}
          rows={financing.map((item) => [item.source, item.amount])}
        />
      </Section>

      <Section title="Previsio economica (Any 1-3)">
        <DataTable
          headers={['Any', 'Ingressos', 'Despeses', 'Resultat net']}
          rows={forecast.map((item) => [item.year, item.revenue, item.costs, item.net])}
        />
      </Section>

      <Section title="Punt d'equilibri">
        <p className="lead fade-up">
          El break-even operatiu s'estima entre finals de l'any 2 i inici de l'any 3, un cop
          consolidats canals B2B i cohorts recurrents del model premium.
        </p>
      </Section>
    </>
  )
}
