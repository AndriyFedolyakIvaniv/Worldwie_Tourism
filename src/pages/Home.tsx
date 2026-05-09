import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Hero } from '../components/Hero'
import { VisualMap } from '../components/VisualMap'
import { FlowMap } from '../components/FlowMap'
import { Section } from '../components/Section'
import { corporateBenefits, corporateUseCases, coreFeatures, homeStats, roadmap } from '../data/content'
import { useViewMode } from '../context/ViewModeContext'

export default function Home() {
  const { isPresentation } = useViewMode()

  return (
    <>
      <Hero />

      {isPresentation ? (
        <>
          <Section title="Introducció" subtitle="Resum executiu del projecte i del mercat que cobreix WTO.">
            <div className="grid cols-2">
              <Card title="El repte">
                <p>
                  Organitzar un viatge en grup obliga a saltar entre diverses eines i dificulta la
                  coordinació, la confiança i la presa de decisions compartides.
                </p>
              </Card>
              <Card title="La resposta">
                <p>
                  WTO integra planificació, comunitat, despeses i recomanacions en una sola
                  experiència digital pensada per al viatger jove europeu.
                </p>
              </Card>
            </div>
          </Section>

          <Section title="Solució i proposta de valor" subtitle="De la fricció de cinc apps a un sol entorn de viatge col·laboratiu.">
            <div className="grid cols-2">
              {coreFeatures.map((feature) => (
                <Card key={feature} title={feature}>
                  <p>Una funcionalitat clau del prototip mínim viable amb enfoc mobile-first i orientació a comunitat.</p>
                </Card>
              ))}
            </div>
          </Section>

          <Section title="Mapa visual de l’ecosistema" subtitle="Una lectura ràpida de com el producte connecta usuari, tecnologia i negoci.">
            <VisualMap />
          </Section>

          <Section title="Model de negoci" subtitle="Freemium B2C combinat amb monetització per a aliats turístics.">
            <div className="grid cols-2">
              <Card title="Freemium B2C">
                <p>Accés gratuït a les funcions bàsiques i subscripció premium per a usuaris recurrents.</p>
              </Card>
              <Card title="Aliats turístics B2B">
                <p>Visibilitat, recomanacions i espais promocionals per a hotels, activitats i operadors.</p>
              </Card>
            </div>
          </Section>

          <Section title="Full de ruta" subtitle="Des del prototip mínim viable fins a l’expansió europea.">
            <div className="grid cols-3">
              {roadmap.map((step) => (
                <Card key={step.title} title={step.title}>
                  <p>{step.text}</p>
                </Card>
              ))}
            </div>
          </Section>
        </>
      ) : (
        <>
          <Section title="Sobre l’empresa" subtitle="WTO presenta una proposta clara i professional per al mercat de viatges compartits.">
            <div className="grid cols-2">
              <Card title="Qui som">
                <p>
                  Worldwide Tourism Outreach, S.L. és una empresa de tecnologia turística centrada en
                  simplificar la planificació de viatges col·lectius amb una experiència digital neta,
                  moderna i fàcil d’entendre.
                </p>
              </Card>
              <Card title="Què oferim">
                <p>
                  Una plataforma social perquè els usuaris puguin organitzar viatges, dividir
                  despeses i connectar amb altres persones amb interessos similars.
                </p>
              </Card>
            </div>
          </Section>

          <Section title="Solució" subtitle="La mateixa web també pot actuar com a aparador comercial per a nous clients.">
            <div className="grid cols-2">
              {corporateBenefits.map((item) => (
                <Card key={item.title} title={item.title}>
                  <p>{item.text}</p>
                </Card>
              ))}
            </div>
          </Section>

          <Section title="Casos d’ús" subtitle="Escenaris reals on la plataforma aporta valor immediat.">
            <div className="grid cols-3">
              {corporateUseCases.map((item) => (
                <Card key={item.title} title={item.title}>
                  <p>{item.text}</p>
                </Card>
              ))}
            </div>
          </Section>

          <Section title="Beneficis clau">
            <div className="stat-grid">
              {homeStats.map((stat) => (
                <article key={stat.label} className="stat-card fade-up">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </Section>

          <Section title="Mapa resumit de la web" subtitle="Una lectura ràpida del recorregut corporatiu del projecte.">
            <FlowMap
              title="De la presentació al contacte"
              subtitle="Una ruta simple per explicar què és WTO i què pot aportar a un client o partner."
              nodes={[
                {
                  kicker: '01',
                  title: 'Empresa',
                  text: 'Qui som, quin problema detectem i per què existim com a projecte.',
                },
                {
                  kicker: '02',
                  title: 'Producte',
                  text: 'La solució social de viatges compartits i els beneficis principals.',
                },
                {
                  kicker: '03',
                  title: 'Mercat',
                  text: 'El públic objectiu, la competència i la oportunitat real de negoci.',
                },
                {
                  kicker: '04',
                  title: 'Contacte',
                  text: 'Un punt d’entrada clar per a possibles clients, aliats o inversors.',
                },
              ]}
            />
          </Section>

          <Section title="Contacte ràpid" subtitle="Si vols presentar el projecte o demanar més informació, escriu-nos.">
            <Button to="/contact">Anar al formulari de contacte</Button>
          </Section>
        </>
      )}
    </>
  )
}
