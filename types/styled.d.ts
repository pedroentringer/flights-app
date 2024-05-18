import 'styled-components/native'

import { Theme } from '@/providers/theme/models'

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}