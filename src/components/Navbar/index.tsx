import { useEffect, useState } from 'react'
import { Container, IconList, IconItem, Label } from './styles'
import { Home, User, Folder, Briefcase, Mail } from 'lucide-react'
import { ThemeToggle } from '../ThemeToggle'

const navItems = [
  { id: 'hero', icon: <Home size={24} />, label: 'Início' },
  { id: 'about', icon: <User size={24} />, label: 'Sobre' },
  { id: 'projects', icon: <Folder size={24} />, label: 'Projetos' },
  { id: 'services', icon: <Briefcase size={24} />, label: 'Serviços' },
  { id: 'contact', icon: <Mail size={24} />, label: 'Contato' },
]

export const Navbar = () => {
  const [active, setActive] = useState<string>('hero')
  const [hovered, setHovered] = useState<boolean>(false)

  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + window.innerHeight / 2
      navItems.forEach(({ id }) => {
        const sec = document.getElementById(id)
        if (sec && pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
          setActive(id)
        }
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Container
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      $expanded={hovered}
    >
      <IconList>
        {navItems.map(({ id, icon, label }) => (
          <IconItem key={id} className={active === id ? 'active' : ''}>
            <a href={`#${id}`}>
              {icon}
              {hovered && <Label>{label}</Label>}
            </a>
          </IconItem>
        ))}
      </IconList>
      <ThemeToggle />
    </Container>
  )
}
