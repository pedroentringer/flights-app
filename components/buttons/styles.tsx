import styled from 'styled-components/native'

export const RoundedButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.backgrounds.tertiary};
`