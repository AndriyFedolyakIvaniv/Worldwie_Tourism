import { Card } from '../components/Card'
import { Section } from '../components/Section'
import { competitors, pestel, swot } from '../data/content'

export default function Market() {
  return (
    <>
      <Section title="Analisi PESTEL" subtitle="Context estratègic del mercat travel-tech.">
        <div className="grid cols-3">
          {pestel.map((item) => (
            <Card key={item.title} title={item.title}>
              <p>{item.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Competencia" subtitle="Referents indirectes en descoberta, booking i gestio de despeses.">
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

      <Section title="Client objectiu">
        <div className="grid cols-3">
          <Card title="Joves 18-40">
            <p>Digital natives que busquen comunitat i flexibilitat.</p>
          </Card>
          <Card title="Viatgers freqüents">
            <p>Usuaris amb recurrencia que valoren eficiència en planificacio.</p>
          </Card>
          <Card title="Empreses B2B turisme">
            <p>Partners interessats en canals nous de captacio i fidelitzacio.</p>
          </Card>
        </div>
      </Section>
    </>
  )
}
