import { ThemeVariants } from '@/providers/theme/models'
import styled from 'styled-components/native'

export type Size = 'xxSmall' | 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge' | 'xxLarge'
export type TextSize = Record<Size, number>

export const textSizesConstants: TextSize = {
  xxSmall: 12,
  xSmall: 14,
  small: 16,
  medium: 20,
  large: 24,
  xLarge: 36,
  xxLarge: 40
}

export type Weight = 'regular' | 'medium' | 'bold'
export type TextWeight = Record<Weight, string>

export const textWeightConstants:TextWeight = {
  regular: '300',
  medium: '500',
  bold: 'bold'
}

export type TextProps = {
  size?: Size,
  weight?: Weight,
  variant?: ThemeVariants
}

export const Text = styled.Text<TextProps>`
  color: ${({ theme, variant = 'primary' }) => theme.texts[variant]};
  font-size: ${({ size = 'medium' }) => textSizesConstants[size]}px;
  font-weight: ${({ weight = 'regular' }) => textWeightConstants[weight]};
`