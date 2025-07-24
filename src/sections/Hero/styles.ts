import styled from 'styled-components'
import { motion } from 'framer-motion'
import { theme } from '../../styles/theme'

export const Container = styled.section`
    text-transform: uppercase;
    cursor: default;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    display: flex
;
`

export const StatusBadge = styled.div`
  position: absolute;
  top: 6rem;
  right: 1.5rem;
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  border-radius: 20px;
  text-transform: uppercase;
  font-weight: bold;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% { box-shadow: 0 0 5px ${({ theme }) => theme.colors.primary}; }
    50% { box-shadow: 0 0 15px ${({ theme }) => theme.colors.primary}; }
    100% { box-shadow: 0 0 5px ${({ theme }) => theme.colors.primary}; }
  }
`

export const Content = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const Words = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
`

export const Word = styled.h1`
    letter-spacing: -.075em;
    font-family: PP-Bold;
    font-size: 12vw;
    line-height: .75em;
    margin: 0;
    text-shadow: 0 0 10px ${({ theme }) => theme.colors.neon || '#00ffff'};
    color: ${({ theme }) => theme.colors.neon || '#00ffff'};
`

//  font-size: ${theme.fontSizes.display};
//   font-weight: 900;
//   text-transform: uppercase;
//   
//   
//   
//   line-height: 0.5;
//     
//   @media (max-width: 768px) {
//     font-size: 3rem;
//   }

export const Subtext = styled.p`
  max-width: 600px;
  text-align: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary || '#ccc'};

  em {
    font-style: italic;
    color: ${({ theme }) => theme.colors.primary};
  }

  strong {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const StartProject = styled.a`
  position: absolute;
  bottom: 1.5rem;
  right: 2rem;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  border-radius: 30px;
  transition: 0.3s;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #000;
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    right: 50%;
    transform: translateX(50%);
  }
`
