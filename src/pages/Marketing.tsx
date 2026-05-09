import { Card } from '../components/Card'
import { FlowMap } from '../components/FlowMap'
import { Section } from '../components/Section'
import { marketing4P } from '../data/content'
import { useViewMode } from '../context/ViewModeContext'

export default function Marketing() {
  const { isPresentation } = useViewMode()

  return (
    <>
      {isPresentation ? (
        <>
          <Section title="Pla de màrqueting" subtitle="Combinem estratègia digital, marca i tracció comercial.">
            <div className="grid cols-2">
              {marketing4P.map((item) => (
                <Card key={item.title} title={item.title}>
                  <p>{item.text}</p>
                </Card>
              ))}
            </div>
          </Section>

          <Section title="Estratègia digital">
            <div className="grid cols-3">
              <Card title="Short-form video">
                <p>TikTok, Instagram i YouTube Shorts amb narratives de viatge real.</p>
              </Card>
              <Card title="Influencers">
                <p>Col·laboracions amb creadors nínxol travel per credibilitat i abast orgànic.</p>
              </Card>
              <Card title="Referral system">
                <p>Programa member-get-member amb incentius en avantatges i descomptes.</p>
              </Card>
            </div>
          </Section>

          <Section title="Identitat i adquisició">
            <div className="grid cols-2">
              <Card title="Identitat visual">
                <p>Logo conceptual WTO, to proper i posicionament premium accessible.</p>
              </Card>
              <Card title="Canals d’adquisició">
                <p>ASO, SEO de contingut, paid social, afiliació i aliances B2B turístiques.</p>
              </Card>
            </div>
          </Section>

          <Section title="Mapa de captació" subtitle="Com convertim l’atenció en usuaris i, després, en recurrència.">
            <FlowMap
              title="Del primer impacte a la conversió"
              subtitle="La comunicació comença amb contingut útil i acaba amb una comunitat activa i fidelitzada."
              nodes={[
                {
                  kicker: '01',
                  title: 'Visibilitat',
                  text: 'Contingut social, col·laboracions i cerca orgànica per arribar a nous públics.',
                },
                {
                  kicker: '02',
                  title: 'Interès',
                  text: 'La proposta de valor i la marca expliquen ràpidament per què WTO és diferent.',
                },
                {
                  kicker: '03',
                  title: 'Conversió',
                  text: 'Els usuaris entren, proven l’experiència i s’uneixen a grups o viatges.',
                },
                {
                  kicker: '04',
                  title: 'Fidelització',
                  text: 'El producte i la comunitat fan créixer la recurrència i les recomanacions.',
                },
              ]}
            />
          </Section>
        </>
      ) : (
        <>
          <Section title="Màrqueting resumit" subtitle="Una versió curta i comercial per a la web corporativa.">
            <div className="grid cols-2">
              <Card title="Producte i preu">
                <p>App freemium amb opcions premium i plans per a aliats turístics.</p>
              </Card>
              <Card title="Promoció i canals">
                <p>Instagram, TikTok, SEO i col·laboracions digitals per captar trànsit qualificat.</p>
              </Card>
            </div>
          </Section>

          <Section title="Mapa de marca" subtitle="Com es construeix la percepció de WTO davant del públic general.">
            <FlowMap
              title="Marca, contingut, confiança i conversió"
              subtitle="Un esquema simple per explicar la part de màrqueting sense entrar en massa detall tècnic."
              nodes={[
                { kicker: '01', title: 'Marca', text: 'Identitat sòlida, moderna i fàcil de recordar.' },
                { kicker: '02', title: 'Contingut', text: 'Missatges clars orientats al viatger i als aliats.' },
                { kicker: '03', title: 'Confiança', text: 'Disseny net i relat coherent a totes les pantalles.' },
                { kicker: '04', title: 'Conversió', text: 'Formularis, crides a l’acció i contacte directe.' },
              ]}
            />
          </Section>

          <Section title="Les 4P">
            <div className="grid cols-2">
              {marketing4P.map((item) => (
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
