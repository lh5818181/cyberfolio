import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ButtonContainer = styled(motion.button).attrs(() => ({
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
}))`
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  color: #000;
  font-weight: bold;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  box-shadow: 0 0 12px ${({ theme }) => theme.colors.primary};
  transition: background 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;
