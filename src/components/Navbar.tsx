import { NavLink } from 'react-router-dom'
import { useViewMode } from '../context/ViewModeContext'

const corporateLinks = [
  { to: '/', label: 'Inici' },
  { to: '/about', label: 'Empresa' },
  { to: '/idea', label: 'Solució' },
  { to: '/market', label: 'Beneficis' },
  { to: '/contact', label: 'Contacte' },
]

const presentationLinks = [
  { to: '/', label: 'Inici' },
  { to: '/about', label: 'Empresa' },
  { to: '/idea', label: 'Producte' },
  { to: '/market', label: 'Mercat' },
  { to: '/marketing', label: 'Màrqueting' },
  { to: '/finance', label: 'Finances' },
  { to: '/branding', label: 'Identitat' },
]

export function Navbar() {
  const { isPresentation, toggleMode } = useViewMode()
  const links = isPresentation ? presentationLinks : corporateLinks

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <div className="brand-lockup">
          <NavLink to="/" className="brand">
            WTO
          </NavLink>
          <span className="brand-meta">Worldwide Tourism Outreach</span>
        </div>
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => (isActive ? 'active' : undefined)}
                  end={link.to === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <button className="mode-toggle" type="button" onClick={toggleMode} aria-pressed={isPresentation}>
          <span className="mode-toggle-labels">
            <span className={`mode-label ${!isPresentation ? 'active' : ''}`}>Corporativa</span>
            <span className={`mode-label ${isPresentation ? 'active' : ''}`}>Presentació</span>
          </span>
          <span className={`mode-toggle-track ${isPresentation ? 'is-active' : ''}`} aria-hidden="true">
            <span className="mode-toggle-thumb" />
          </span>
        </button>
      </div>
    </header>
  )
}
