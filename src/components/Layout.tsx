import type { ReactNode } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="app-shell">
      <div className="bg-shape bg-shape-a" aria-hidden="true" />
      <div className="bg-shape bg-shape-b" aria-hidden="true" />
      <Navbar />
      <main className="container main-content">{children}</main>
      <Footer />
    </div>
  )
}
