import { Container, Content, Title, Subtitle, CTABtns } from './styles'
import { Button } from '../../components/Button'

export const Hero = () => {
  return (
    <Container id="hero">
      <Content
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title>Olá, eu sou o Henrique</Title>
        <Subtitle>Full‑Stack Developer & entusiasta de neon futurista</Subtitle>
        <CTABtns>
          <Button as="a" href="#projects">Ver Projetos</Button>
          <Button as="a" href="#contact">Contato</Button>
        </CTABtns>
      </Content>
    </Container>
  )
}
