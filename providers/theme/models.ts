export type ThemeName = 'light' | 'dark'

export type ThemeProviderContext = {
  themeName: ThemeName,
  setThemeName: React.Dispatch<React.SetStateAction<ThemeName>>
  theme: Theme
}

export type ThemeVariants = 'primary' | 'secondary' | 'tertiary' | 'focused'
export type ThemeColorByVariants = Partial<Record<ThemeVariants, string>>

export type Theme = {
  texts: ThemeColorByVariants,
  backgrounds: ThemeColorByVariants,
  borders: ThemeColorByVariants
}