import styled from 'styled-components/native'


//cenario 1
//<Container> ...  </Container>

//cenario 2
//<Container padding> ...  </Container>

//cenario 3
//<Container full padding> ...  </Container>

interface ContainerProps {
  full?: boolean
  padding?: boolean
}

export const Container = styled.View<ContainerProps>`
  background-color: ${({ theme }) => theme.backgrounds.primary};
  flex: ${({ full }) => full ? 1 : 'none'};
  padding: ${({ padding }) => padding ? '32px' : '0px'};
`