import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type ViewMode = 'corporate' | 'presentation'

type ViewModeContextValue = {
  mode: ViewMode
  isPresentation: boolean
  setMode: (mode: ViewMode) => void
  toggleMode: () => void
}

const STORAGE_KEY = 'wto-view-mode'

const ViewModeContext = createContext<ViewModeContextValue | undefined>(undefined)

function getInitialMode(): ViewMode {
  if (typeof window === 'undefined') {
    return 'corporate'
  }

  const storedMode = window.localStorage.getItem(STORAGE_KEY)

  return storedMode === 'presentation' ? 'presentation' : 'corporate'
}

export function ViewModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ViewMode>(getInitialMode)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, mode)
  }, [mode])

  return (
    <ViewModeContext.Provider
      value={{
        mode,
        isPresentation: mode === 'presentation',
        setMode,
        toggleMode: () => setMode((currentMode) => (currentMode === 'corporate' ? 'presentation' : 'corporate')),
      }}
    >
      {children}
    </ViewModeContext.Provider>
  )
}

export function useViewMode() {
  const context = useContext(ViewModeContext)

  if (!context) {
    throw new Error('useViewMode must be used within a ViewModeProvider')
  }

  return context
}