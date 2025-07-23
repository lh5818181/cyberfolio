import { useEffect, useState } from 'react'
import { Container, NavLinks } from './styles'
import { ThemeToggle } from '../ThemeToggle'

const sections = ['hero', 'about', 'projects', 'services', 'contact']

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>('hero')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i])
        if (section) {
          const offsetTop = section.offsetTop
          const offsetHeight = section.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Container>
      <strong>devrique</strong>
      <NavLinks>
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={activeSection === section ? 'active' : ''}
          >
            {section === 'hero'
              ? 'Início'
              : section === 'about'
              ? 'Sobre'
              : section === 'projects'
              ? 'Projetos'
              : section === 'services'
              ? 'Serviços'
              : 'Contato'}
          </a>
        ))}
        <ThemeToggle />
      </NavLinks>
    </Container>
  )
}
