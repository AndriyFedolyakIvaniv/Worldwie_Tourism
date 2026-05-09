import { Card } from '../components/Card'
import { FlowMap } from '../components/FlowMap'
import { Section } from '../components/Section'
import { brand, founders, missionValues, odsLinks } from '../data/content'
import { useViewMode } from '../context/ViewModeContext'

export default function About() {
  const { isPresentation } = useViewMode()

  return (
    <>
      {isPresentation ? (
        <>
          <Section
            title="Introducció"
            subtitle={`${brand.legalName} neix per digitalitzar el viatge compartit amb una visió europea clara.`}
          >
            <p className="lead">
              L’equip fundador combina desenvolupament tecnològic, disseny de producte digital i
              experiència d’usuari per portar al mercat una plataforma sòlida, útil i escalable.
            </p>
          </Section>

          <Section title="Equip fundador" subtitle="Perfil de startup tecnològica orientat a execució (4 membres fundadors).">
            <div className="grid cols-3">
              {founders.map((founder) => (
                <Card key={founder.name} title={`${founder.name} · ${founder.role}`}>
                  <p>{founder.description}</p>
                </Card>
              ))}
            </div>
          </Section>

          <Section title="Missió, visió i valors">
            <div className="grid cols-3">
              {missionValues.map((item) => (
                <Card key={item.title} title={item.title}>
                  <p>{item.text}</p>
                </Card>
              ))}
            </div>
          </Section>

          <Section title="ODS i sostenibilitat" subtitle="Impacte social i ambiental integrat al model de negoci.">
            <div className="grid cols-3">
              {odsLinks.map((item) => (
                <Card key={item.title} title={item.title}>
                  <p>{item.text}</p>
                </Card>
              ))}
            </div>
          </Section>
        </>
      ) : (
        <>
          <Section
            title="Sobre l’empresa"
            subtitle={`${brand.legalName} presenta una solució clara per al mercat de viatges compartits.`}
          >
            <p className="lead">
              WTO centralitza planificació, comunitat i monetització en una proposta comercial
              moderna, fàcil d’explicar i pensada per a clients potencials i aliats.
            </p>
          </Section>

          <Section title="Equip i proposta" subtitle="Una empresa petita, enfocada i preparada per créixer.">
            <div className="grid cols-2">
              <Card title="Equip fundador">
                <p>
                  Equip format per 4 cofundadors amb perfil tecnològic i orientació a producte,
                  negoci i experiència d’usuari.
                </p>
              </Card>
              <Card title="Proposta de valor">
                <p>
                  Facilitar viatges en grup amb una experiència clara, social i professional, sense
                  mostrar material intern o massa dens.
                </p>
              </Card>
            </div>
          </Section>

          <Section title="Equip fundador (4 membres)" subtitle="Les quatre persones impulsores del projecte WTO.">
            <div className="grid cols-2">
              {founders.map((founder) => (
                <Card key={founder.name} title={`${founder.name} · ${founder.role}`}>
                  <p>{founder.description}</p>
                </Card>
              ))}
            </div>
          </Section>

          <Section title="Mapa de l’empresa" subtitle="De la idea inicial al posicionament comercial de WTO.">
            <FlowMap
              title="Com es tradueix el projecte en valor"
              subtitle="Una seqüència breu per entendre què fa l’empresa i com es diferencia."
              nodes={[
                {
                  kicker: '01',
                  title: 'Detectem la necessitat',
                  text: 'La fragmentació en els viatges de grup genera fricció i desconnexió.',
                },
                {
                  kicker: '02',
                  title: 'Dissenyem la solució',
                  text: 'Una app social que centralitza la logística i la part humana del viatge.',
                },
                {
                  kicker: '03',
                  title: 'Construïm comunitat',
                  text: 'La xarxa d’usuaris millora la qualitat de les recomanacions i dels grups.',
                },
                {
                  kicker: '04',
                  title: 'Monetitzem amb sentit',
                  text: 'Model freemium i espais B2B per créixer sense perdre coherència.',
                },
              ]}
            />
          </Section>

          <Section title="Missió i valors">
            <div className="grid cols-3">
              {missionValues.map((item) => (
                <Card key={item.title} title={item.title}>
                  <p>{item.text}</p>
                </Card>
              ))}
            </div>
          </Section>
        </>
      )}
    </>
  )
}
