import { createHashRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import Idea from './pages/Idea'
import Market from './pages/Market'
import Marketing from './pages/Marketing'
import Finance from './pages/Finance'
import Contact from './pages/Contact'
import Branding from './pages/Branding'

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'idea', element: <Idea /> },
      { path: 'market', element: <Market /> },
      { path: 'marketing', element: <Marketing /> },
      { path: 'finance', element: <Finance /> },
      { path: 'branding', element: <Branding /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])
