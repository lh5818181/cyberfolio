import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  scroll-snap-align: start;
`

export const Content = styled(motion.div)`
  text-align: center;
  max-width: 600px;
  padding: ${({ theme }) => theme.spacing(2)};
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.colors.primary};
`

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.colors.text};
`

export const CTABtns = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  justify-content: center;
`
