import { Container, Content, Title, Cards, Card, IconWrapper, ServiceTitle, ServiceDesc } from './styles'
import { Code, Smartphone, Database } from 'lucide-react'

const servicesData = [
  {
    icon: <Code size={32} />,
    title: 'Desenvolvimento Web',
    desc: 'Construção de SPAs e PWAs com React, TypeScript e arquitetura moderna.'
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Mobile Friendly',
    desc: 'Layouts totalmente responsivos e performance otimizada para dispositivos.'
  },
  {
    icon: <Database size={32} />,
    title: 'APIs & Back‑end',
    desc: 'Criação de APIs RESTful com Node.js, Express e banco de dados.'
  }
]

export const Services = () => (
  <Container id="services">
    <Content>
      <Title>Serviços</Title>
      <Cards>
        {servicesData.map((s, i) => (
          <Card key={i} whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 200 }}>
            <IconWrapper>{s.icon}</IconWrapper>
            <ServiceTitle>{s.title}</ServiceTitle>
            <ServiceDesc>{s.desc}</ServiceDesc>
          </Card>
        ))}
      </Cards>
    </Content>
  </Container>
)
