import styled from 'styled-components'

export const Container = styled.section`
  padding: ${({ theme }) => theme.spacing(4)} 0;
  background: ${({ theme }) => theme.colors.background};
  scroll-snap-align: start;
`

export const Content = styled.div`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  padding: 0 ${({ theme }) => theme.spacing(2)};
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`

export const Bio = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`

export const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
`

export const TechItem = styled.li`
  background: ${({ theme }) => theme.colors.primary};
  color: #000;
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: 600;
`
