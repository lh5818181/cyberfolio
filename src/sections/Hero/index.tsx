import { Container, Content, Words, Word, Subtext, StatusBadge, StartProject } from './styles'

export const Hero = () => {
  return (
    <Container id="hero">
      <StatusBadge>
        🚀 DISPONÍVEL PARA PROJETOS EM AGOSTO
      </StatusBadge>

      <Content
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Words>
          <Word>INOVADOR</Word>
          <Word>ESTRATÉGICO</Word>
          <Word>FULL STACK</Word>
        </Words>

        <Subtext>
          CONSTRUO EXPERIÊNCIAS DIGITAIS PARA NEGÓCIOS QUE PENSAM À FRENTE.<br />
          <em>FOCADO EM DESIGN.</em> OBCECADO POR <strong>CÓDIGO</strong>. BASEADO NO BR, CONECTADO COM O MUNDO.
        </Subtext>
      </Content>

      <StartProject href="#contact">
        FALE COMIGO AGORA
      </StartProject>
    </Container>
  )
}
