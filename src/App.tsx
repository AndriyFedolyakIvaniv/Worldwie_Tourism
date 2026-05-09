import { Outlet } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ViewModeProvider } from './context/ViewModeContext'

export default function App() {
  return (
    <ViewModeProvider>
      <Layout>
        <Outlet />
      </Layout>
    </ViewModeProvider>
  )
}
