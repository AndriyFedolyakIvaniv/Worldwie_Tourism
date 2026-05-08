import { Card } from '../components/Card'
import { Hero } from '../components/Hero'
import { Section } from '../components/Section'
import { coreFeatures, homeStats } from '../data/content'

export default function Home() {
  return (
    <>
      <Hero />

      <Section title="Problema principal" subtitle="Organitzar viatges en grup continua sent fragmentat i caotic.">
        <div className="grid cols-2">
          <Card title="Fragmentacio de eines">
            <p>
              Els grups salten entre WhatsApp, Airbnb i Splitwise, generant errors, duplicats i
              poca visibilitat de decisions.
            </p>
          </Card>
          <Card title="Coordinacio lenta">
            <p>
              Sense una vista unica, els acords de dates, pressupost i activitats s'endarrereixen
              i es perd engagement del grup.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="Solucio WTO" subtitle="Una app social per crear viatges compartits de forma intuitiva.">
        <div className="grid cols-2">
          {coreFeatures.map((feature) => (
            <Card key={feature} title={feature}>
              <p>Experiencia mobile-first orientada a col.laboracio i conversio.</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Model de negoci" subtitle="Freemium per usuaris i monetitzacio B2B per ecosistema turistic.">
        <div className="grid cols-2">
          <Card title="Freemium B2C">
            <p>Funcions essencials gratuites i serveis premium per grups amb major activitat.</p>
          </Card>
          <Card title="B2B Travel Partners">
            <p>Plans per agències, allotjaments i operadors per captar demanda qualificada.</p>
          </Card>
        </div>
      </Section>

      <Section title="Estadistiques clau">
        <div className="stat-grid">
          {homeStats.map((stat) => (
            <article key={stat.label} className="stat-card fade-up">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}
