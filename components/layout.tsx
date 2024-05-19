import styled from 'styled-components/native'

interface ContainerProps {
  full?: boolean
  padding?: boolean
}

export const Container = styled.View<ContainerProps>`
  background-color: ${({ theme }) => theme.backgrounds.primary};
  flex: ${({ full }) => full ? 1 : 'none'};
  padding: ${({ padding }) => padding ? '32px' : '0px'};
`

type AlignOptions = 'start' | 'end' | 'center' | 'between'
type AlignDirectionOptions = 'row' | 'column'
type AlignProps = {
  direction: AlignDirectionOptions
  horizontal?: AlignOptions
  vertical?: AlignOptions
  full?: boolean
}

type AlignOptionsConst = Record<AlignOptions, string>
type AlignDefaultConst = Required<Pick<AlignProps, 'direction' | 'horizontal' | 'vertical'>>

const alignOptions:AlignOptionsConst = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between'
}

const alignDefaults:AlignDefaultConst = {
  direction: 'column',
  horizontal: 'start',
  vertical: 'start'
}

export const Align = styled.View<AlignProps>`
  flex: ${({ full }) => full ? 1 : 'none'};
  flex-direction: ${({ direction = alignDefaults.direction }) => direction};
  justify-content: ${(
    { 
      direction = alignDefaults.direction, 
      horizontal = alignDefaults.horizontal, 
      vertical = alignDefaults.vertical
    }
    ) => direction === 'row' ? alignOptions[horizontal] : alignOptions[vertical]};
  align-items: ${(
    { 
      direction = alignDefaults.direction, 
      horizontal = alignDefaults.horizontal, 
      vertical = alignDefaults.vertical
    }
    ) => direction === 'row' ? alignOptions[vertical] : alignOptions[horizontal]};
`