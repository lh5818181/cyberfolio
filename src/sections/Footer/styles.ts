import styled from 'styled-components'

export const Container = styled.footer`
  padding: ${({ theme }) => theme.spacing(2)} 0;
  background: ${({ theme }) => theme.colors.background};
`

export const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.small};
`

export const Copy = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`
