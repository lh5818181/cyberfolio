import {
  Container,
  Content,
  Title,
  Form,
  Input,
  TextArea,
  SubmitBtn,
  SocialLinks,
  SocialIcon
} from './styles'
import { Mail, Linkedin, Github } from 'lucide-react'

export const Contact = () => (
  <Container id="contact">
    <Content>
      <Title>Contato</Title>
      <Form
        action="https://formspree.io/f/{YOUR_FORM_ID}"
        method="POST"
      >
        <Input type="text" name="name" placeholder="Seu nome" required />
        <Input type="email" name="email" placeholder="Seu email" required />
        <TextArea name="message" placeholder="Sua mensagem" required />
        <SubmitBtn type="submit">Enviar Mensagem</SubmitBtn>
      </Form>
      <SocialLinks>
        <a href="mailto:seu@email" aria-label="Email">
          <SocialIcon as={Mail} size={24} />
        </a>
        <a href="https://linkedin.com/in/seuuser" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <SocialIcon as={Linkedin} size={24} />
        </a>
        <a href="https://github.com/seuuser" target="_blank" rel="noreferrer" aria-label="GitHub">
          <SocialIcon as={Github} size={24} />
        </a>
      </SocialLinks>
    </Content>
  </Container>
)
