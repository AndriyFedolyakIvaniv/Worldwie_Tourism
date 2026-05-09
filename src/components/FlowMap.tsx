import { Fragment } from 'react'

type FlowNode = {
  kicker: string
  title: string
  text: string
}

type FlowMapProps = {
  title: string
  subtitle: string
  nodes: FlowNode[]
}

export function FlowMap({ title, subtitle, nodes }: FlowMapProps) {
  return (
    <div className="flow-map fade-up">
      <header className="flow-map-header">
        <p className="flow-map-kicker">Mapa visual</p>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </header>

      <div className="flow-map-track">
        {nodes.map((node, index) => (
          <Fragment key={`${node.title}-${index}`}>
            <article className="flow-map-node">
              <span className="flow-map-node-kicker">{node.kicker}</span>
              <strong>{node.title}</strong>
              <p>{node.text}</p>
            </article>
            {index < nodes.length - 1 ? (
              <span key={`arrow-${node.title}-${index}`} className="flow-map-arrow" aria-hidden="true">
                →
              </span>
            ) : null}
          </Fragment>
        ))}
      </div>
    </div>
  )
}