// src/components/Chip/styles.ts
import styled from 'styled-components';

export const ChipContainer = styled.button<{ active: boolean }>`
  padding: ${({ theme }) => theme.chips.padding};
  font-size: ${({ theme }) => theme.chips.fontSize};
  font-weight: ${({ theme }) => theme.chips.fontWeight};
  text-transform: ${({ theme }) => theme.chips.textTransform};
  border-radius: ${({ theme }) => theme.chips.borderRadius};
  background: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.chipBg};
  color: ${({ active, theme }) =>
    active ? theme.chips.color : theme.colors.text};
  border: 2px solid ${({ theme }) => theme.colors.chipBorder};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${({ active, theme }) => (active ? theme.shadows.chip : 'none')};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    border-color: ${({ theme }) => theme.colors.primaryHover};
    color: #000;
  }
`;
