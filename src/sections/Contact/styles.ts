import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.section`
  padding: ${({ theme }) => theme.spacing(4)} 0;
  background: ${({ theme }) => theme.colors.background};
  scroll-snap-align: start;
`

export const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 0 ${({ theme }) => theme.spacing(2)};
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`

export const Input = styled.input`
  padding: ${({ theme }) => theme.spacing(1)};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
`

export const TextArea = styled.textarea`
  padding: ${({ theme }) => theme.spacing(1)};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  resize: vertical;
  min-height: 120px;
`

export const SubmitBtn = styled(motion.button).attrs(() => ({
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.95 },
}))`
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  color: #000;
  font-weight: bold;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  box-shadow: 0 0 12px ${({ theme }) => theme.colors.primary};
`

export const SocialLinks = styled.div`
  margin-top: ${({ theme }) => theme.spacing(3)};
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
`

export const SocialIcon = styled(motion.svg)`
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }
`
