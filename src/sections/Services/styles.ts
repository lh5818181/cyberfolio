import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.section`
  padding: ${({ theme }) => theme.spacing(4)} 0;
  background: ${({ theme }) => theme.colors.background};
  scroll-snap-align: start;
`

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  padding: 0 ${({ theme }) => theme.spacing(2)};
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: ${({ theme }) => theme.spacing(4)};
`

export const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing(3)};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`

export const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`

export const ServiceTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.colors.text};
`

export const ServiceDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.4;
`
