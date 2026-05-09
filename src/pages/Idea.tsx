import { Card } from '../components/Card'
import { FlowMap } from '../components/FlowMap'
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
            <div className="grid cols-3">
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
              <Card title="Xat i decisions en grup">
                <p>Canal únic per votar activitats, validar pressupost i prendre decisions ràpides.</p>
              </Card>
              <Card title="Verificació i confiança">
                <p>Perfils, historial i senyals de confiança per reduir risc en viatges amb desconeguts.</p>
              </Card>
            </div>
          </Section>

          <Section title="Com funciona el producte" subtitle="Del registre inicial fins al tancament del viatge en un flux únic.">
            <FlowMap
              title="Experiència completa de l’usuari"
              subtitle="La plataforma acompanya el viatger abans, durant i després del viatge compartit."
              nodes={[
                {
                  kicker: '01',
                  title: 'Perfil i preferències',
                  text: 'L’usuari defineix estil de viatge, pressupost, interessos i disponibilitat.',
                },
                {
                  kicker: '02',
                  title: 'Creació o cerca de viatge',
                  text: 'Pot crear un grup nou o unir-se a un viatge existent amb filtres avançats.',
                },
                {
                  kicker: '03',
                  title: 'Planificació col·laborativa',
                  text: 'Checklist, votacions, rutes i repartiment de tasques en temps real.',
                },
                {
                  kicker: '04',
                  title: 'Execució i seguiment',
                  text: 'Comunicació integrada, control de despeses i recomanacions contextuals.',
                },
                {
                  kicker: '05',
                  title: 'Valoració i millora',
                  text: 'Feedback, valoracions i dades per millorar el matching i la personalització.',
                },
              ]}
            />
          </Section>

          <Section title="Funcionalitats premium" subtitle="Capes addicionals de valor per incrementar retenció i monetització.">
            <div className="grid cols-3">
              <Card title="Recomanacions prioritàries">
                <p>Ofertes destacades de partners verificats segons destí, perfil i dates del grup.</p>
              </Card>
              <Card title="Filtres avançats">
                <p>Segmentació més precisa per compatibilitat social, ritme de viatge i nivell de despesa.</p>
              </Card>
              <Card title="Analítica personalitzada">
                <p>Informe de despeses, hàbits i patrons de viatge per millorar futures experiències.</p>
              </Card>
            </div>
          </Section>
        </>
      ) : (
        <>
          <Section title="Producte" subtitle="Presentem la solució de manera resumida i comercial.">
            <div className="grid cols-3">
              <Card title="Una sola app">
                <p>
                  WTO reuneix viatges, comunitat i despeses en una experiència simple i fàcil de
                  presentar a qualsevol públic.
                </p>
              </Card>
              <Card title="Planificació clara">
                <p>
                  L’usuari organitza ruta, pressupost i tasques de grup sense saltar entre eines
                  diferents.
                </p>
              </Card>
              <Card title="Component social real">
                <p>
                  No és només logística: també permet trobar persones compatibles i crear comunitat.
                </p>
              </Card>
              <Card title="Per què funciona">
                <p>
                  Com més usuaris hi ha, millor és la xarxa: més perfils, més opcions i més valor
                  per al viatger final.
                </p>
              </Card>
              <Card title="Fàcil d’explicar i vendre">
                <p>
                  La proposta de valor és directa per a públic general: estalvi, confiança i comoditat.
                </p>
              </Card>
              <Card title="Escalable des del primer dia">
                <p>
                  El model freemium i la capa B2B permeten créixer en usuaris i ingressos alhora.
                </p>
              </Card>
            </div>
          </Section>

          <Section title="Què inclou la solució" subtitle="Mòduls clau del producte en versió corporativa.">
            <div className="grid cols-3">
              <Card title="Creació de viatges">
                <p>Configuració ràpida de destí, calendari, participants i objectius del viatge.</p>
              </Card>
              <Card title="Gestió econòmica">
                <p>Divisió de despeses, seguiment de pagaments i resum financer per membre.</p>
              </Card>
              <Card title="Comunicació integrada">
                <p>Xat de grup amb context de decisions, reserves i propostes d’activitats.</p>
              </Card>
              <Card title="Checklist intel·ligent">
                <p>Llista dinàmica de pendents amb responsables i estat en temps real.</p>
              </Card>
              <Card title="Descoberta de companys">
                <p>Matching per interessos i perfil per facilitar connexions de qualitat.</p>
              </Card>
              <Card title="Canal d’aliats turístics">
                <p>Integració d’ofertes i experiències rellevants sense trencar el flux d’ús.</p>
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

          <Section title="Impacte esperat" subtitle="Resultats que expliquen per què el producte aporta valor de negoci.">
            <div className="grid cols-3">
              <Card title="Més conversió">
                <p>Una experiència simple i social incrementa registres i ús recurrent.</p>
              </Card>
              <Card title="Més retenció">
                <p>La col·laboració de grup i el valor de comunitat fan que l’usuari torni.</p>
              </Card>
              <Card title="Més ingressos">
                <p>Combinació de premium i aliats B2B per diversificar i estabilitzar facturació.</p>
              </Card>
            </div>
          </Section>
        </>
      )}
    </>
  )
}
