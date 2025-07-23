import { useEffect, useState } from 'react'
import { ToggleButton } from './styles'
import { Sun, Moon } from 'lucide-react'

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored) setTheme(stored as 'dark' | 'light')
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ToggleButton onClick={toggle}>
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </ToggleButton>
  )
}
