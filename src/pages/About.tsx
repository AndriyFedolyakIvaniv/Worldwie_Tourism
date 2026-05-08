import { Card } from '../components/Card'
import { Section } from '../components/Section'
import { brand, founders } from '../data/content'

export default function About() {
  return (
    <>
      <Section
        title="Presentacio de l'empresa"
        subtitle={`${brand.legalName} neix per digitalitzar el viatge compartit amb visio europea.`}
      >
        <p className="lead">
          WTO combina producte digital, creixement de comunitat i aliances comercials per
          convertir-se en la referencia del social travel col.laboratiu.
        </p>
      </Section>

      <Section title="Equip fundador" subtitle="Perfil startup tech orientat a execucio.">
        <div className="grid cols-3">
          {founders.map((founder) => (
            <Card key={founder.name} title={`${founder.name} - ${founder.role}`}>
              <p>{founder.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Missio, visio i valors">
        <div className="grid cols-3">
          <Card title="Missio">
            <p>Connectar viatgers per crear experiències compartides, segures i memorables.</p>
          </Card>
          <Card title="Visio">
            <p>Ser la xarxa social lider de viatges a Europa per a la nova generacio de travelers.</p>
          </Card>
          <Card title="Valors">
            <p>Innovacio, sostenibilitat, inclusio i transparencia en cada decisio de producte.</p>
          </Card>
        </div>
      </Section>

      <Section title="Compromis ODS" subtitle="Alineacio amb impacte social i ambiental.">
        <div className="grid cols-3">
          <Card title="Turisme sostenible">
            <p>Promocionem rutes responsables i economia local.</p>
          </Card>
          <Card title="Reduccio de desigualtats">
            <p>Facilitem accés a comunitats de viatge diverses i inclusives.</p>
          </Card>
          <Card title="Consum responsable">
            <p>Transparencia en despeses i promocio de proveidors compromesos.</p>
          </Card>
        </div>
      </Section>
    </>
  )
}
