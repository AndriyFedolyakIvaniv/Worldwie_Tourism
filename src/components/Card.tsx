import type { ReactNode } from 'react'

type CardProps = {
  title: string
  children: ReactNode
}

export function Card({ title, children }: CardProps) {
  return (
    <article className="card fade-up">
      <h3>{title}</h3>
      <div className="card-body">{children}</div>
    </article>
  )
}
