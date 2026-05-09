import type { ReactNode } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { useViewMode } from '../context/ViewModeContext'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const { isPresentation } = useViewMode()

  return (
    <div className={`app-shell ${isPresentation ? 'mode-presentation' : 'mode-corporate'}`} data-mode={isPresentation ? 'presentation' : 'corporate'}>
      <div className="bg-shape bg-shape-a" aria-hidden="true" />
      <div className="bg-shape bg-shape-b" aria-hidden="true" />
      <Navbar />
      <main className="container main-content">{children}</main>
      <Footer />
    </div>
  )
}
