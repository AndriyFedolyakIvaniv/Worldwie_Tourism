import { Card } from '../components/Card'
import { Section } from '../components/Section'
import { marketing4P } from '../data/content'

export default function Marketing() {
  return (
    <>
      <Section title="Pla de marketing" subtitle="Combinem estratègia digital, marca i traccio comercial.">
        <div className="grid cols-2">
          {marketing4P.map((item) => (
            <Card key={item.title} title={item.title}>
              <p>{item.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Estrategia digital">
        <div className="grid cols-3">
          <Card title="Short-form video">
            <p>TikTok, Instagram i YouTube Shorts amb narratives de viatge real.</p>
          </Card>
          <Card title="Influencers">
            <p>Col.laboracions amb creadors nicho travel per credibilitat i abast organico.</p>
          </Card>
          <Card title="Referral system">
            <p>Programa member-get-member amb incentius en avantatges i descomptes.</p>
          </Card>
        </div>
      </Section>

      <Section title="Branding i adquisicio">
        <div className="grid cols-2">
          <Card title="Identitat visual">
            <p>Logo conceptual WTO, to proper i posicionament premium accessible.</p>
          </Card>
          <Card title="Canals d'adquisicio">
            <p>ASO, SEO de contingut, paid social, afiliacio i aliances B2B turistiques.</p>
          </Card>
        </div>
      </Section>
    </>
  )
}
