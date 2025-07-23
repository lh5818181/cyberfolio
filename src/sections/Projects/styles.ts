import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.section`
  padding: ${({ theme }) => theme.spacing(4)} 0;
  background: ${({ theme }) => theme.colors.background};
  scroll-snap-align: start;
`

export const Title = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`

export const Filters = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`

export const FilterButton = styled.button<{ active: boolean }>`
  background: ${({ active, theme }) =>
    active ? theme.colors.primary : 'transparent'};
  color: ${({ active, theme }) =>
    active ? '#000' : theme.colors.text};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #000;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: ${({ theme }) => theme.spacing(3)};
  width: 90%;
  margin: 0 auto;
`

export const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing(3)};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  a {
    display: inline-block;
    margin-top: ${({ theme }) => theme.spacing(2)};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
`

export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.colors.text};
`

export const CardDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.4;
`
