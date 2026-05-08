import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  to?: string
  href?: string
  variant?: 'primary' | 'secondary'
}

export function Button({ children, to, href, variant = 'primary' }: ButtonProps) {
  const className = `btn btn-${variant}`

  if (to) {
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    )
  }

  return (
    <a className={className} href={href}>
      {children}
    </a>
  )
}
