import { NavLink } from 'react-router-dom'

const links = [
  { to: '/branding', label: 'Identitat' },
  { to: '/', label: 'Inici' },
  { to: '/about', label: 'Sobre nosaltres' },
  { to: '/idea', label: 'Idea' },
  { to: '/market', label: 'Mercat' },
  { to: '/marketing', label: 'Màrqueting' },
  { to: '/finance', label: 'Finances' },
  { to: '/contact', label: 'Contacte' },
]

export function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="brand">
          WTO
        </NavLink>
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
      </div>
    </header>
  )
}
