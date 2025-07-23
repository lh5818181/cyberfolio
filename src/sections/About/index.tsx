import {
  Container,
  Content,
  Title,
  Bio,
  TechList,
  TechItem
} from './styles'

export const About = () => {
  return (
    <Container id="about">
      <Content>
        <Title>Sobre Mim</Title>
        <Bio>
          Sou Full‑Stack Developer com foco em React, TypeScript e Node.js, apaixonado por interfaces futuristas em neon.
        </Bio>
        <TechList>
          {['React', 'TypeScript', 'Node.js', 'Styled‑Components', 'Framer Motion'].map((tech) => (
            <TechItem key={tech}>{tech}</TechItem>
          ))}
        </TechList>
      </Content>
    </Container>
  )
}
