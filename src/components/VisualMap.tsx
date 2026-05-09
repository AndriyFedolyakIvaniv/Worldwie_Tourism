export function VisualMap() {
  return (
    <div className="visual-map fade-up" aria-label="Mapa visual de l'ecosistema WTO">
      <div className="visual-map-row visual-map-row-wide">
        <article className="visual-map-node visual-map-node-strong">
          <span className="visual-map-kicker">Problema</span>
          <h3>Planificació fragmentada</h3>
          <p>El viatge en grup es reparteix entre moltes eines i això fa baixar la confiança i l’eficiència.</p>
        </article>
      </div>

      <div className="visual-map-arrow" aria-hidden="true">
        <span />
      </div>

      <div className="visual-map-row visual-map-row-three">
        <article className="visual-map-node">
          <span className="visual-map-kicker">B2C</span>
          <h3>Usuaris</h3>
          <p>Troben companys afins, creen viatges i comparteixen despeses.</p>
        </article>
        <article className="visual-map-node visual-map-node-center">
          <span className="visual-map-kicker">Nucli</span>
          <h3>WTO</h3>
          <p>Centralitza producte, comunitat, confiança i personalització.</p>
        </article>
        <article className="visual-map-node">
          <span className="visual-map-kicker">B2B</span>
          <h3>Aliats</h3>
          <p>Hotels, activitats i operadors arriben a una audiència segmentada.</p>
        </article>
      </div>

      <div className="visual-map-arrow" aria-hidden="true">
        <span />
      </div>

      <div className="visual-map-row visual-map-row-three">
        <article className="visual-map-node visual-map-node-soft">
          <span className="visual-map-kicker">Funcions</span>
          <h3>Matching i checklist</h3>
          <p>La part operativa del viatge queda resolta de manera clara i ordenada.</p>
        </article>
        <article className="visual-map-node visual-map-node-soft">
          <span className="visual-map-kicker">Dades</span>
          <h3>Personalització</h3>
          <p>Les preferències i els interessos milloren les recomanacions a mesura que creix la base d’usuaris.</p>
        </article>
        <article className="visual-map-node visual-map-node-soft">
          <span className="visual-map-kicker">Resultat</span>
          <h3>Creixement</h3>
          <p>Més activitat, més aliats i més valor per a tot l’ecosistema del projecte.</p>
        </article>
      </div>
    </div>
  )
}