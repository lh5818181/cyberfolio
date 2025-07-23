import { Container, Content, Copy } from './styles'

export const Footer = () => (
  <Container id='footer'>
    <Content>
      <Copy>© {new Date().getFullYear()} Henrique Vieira. Todos os direitos reservados.</Copy>
      <nav>
        <a href="#hero">Topo</a> | <a href="#contact">Contato</a>
      </nav>
    </Content>
  </Container>
)
