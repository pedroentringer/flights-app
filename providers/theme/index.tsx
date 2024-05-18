import React from 'react'
import { ThemeName, ThemeProviderContext } from './models'
import themes from './themes'
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native'

const ThemeContext = React.createContext({} as ThemeProviderContext)

export const useTheme = () => React.useContext(ThemeContext)

const DEFAULT_THEME_NAME:ThemeName = 'light'

const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [themeName, setThemeName] = React.useState<ThemeName>(DEFAULT_THEME_NAME)

  const theme = React.useMemo(() => themes[themeName], [themeName])

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName, theme }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider