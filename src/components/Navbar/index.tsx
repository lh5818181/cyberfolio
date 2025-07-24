import { useEffect, useState } from 'react';
import { Container, HamburgerButton, MobileMenu, Logo } from './styles';
import { ThemeToggle } from '../ThemeToggle';
import { AnimatePresence, motion } from 'framer-motion';

const sections = ['hero', 'about', 'projects', 'services', 'contact'];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  return (
    <Container>
      <Logo>devrique</Logo>
      <HamburgerButton onClick={handleToggle}>
        <span className={isOpen ? 'open' : ''} />
        <span className={isOpen ? 'open' : ''} />
        <span className={isOpen ? 'open' : ''} />
      </HamburgerButton>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            as={motion.div}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={activeSection === section ? 'active' : ''}
                onClick={handleClose}
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
          </MobileMenu>
        )}
      </AnimatePresence>
    </Container>
  );
};
