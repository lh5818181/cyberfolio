import { Container, NavLinks } from './styles'
import { ThemeToggle } from '../ThemeToggle'

export const Navbar = () => {
  return (
    <Container>
      <strong>devrique</strong>
      <NavLinks>
        <a href="#about">Sobre</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
        <ThemeToggle />
      </NavLinks>
    </Container>
  )
}
