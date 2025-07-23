import styled from 'styled-components'

export const Container = styled.nav`
  width: 100%;
  padding: 1.2rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    font-weight: 500;
    position: relative;
    transition: color 0.3s ease;

    &::after {
      content: '';
      display: block;
      height: 2px;
      width: 0%;
      background-color: ${({ theme }) => theme.colors.primary};
      position: absolute;
      bottom: -4px;
      left: 0;
      transition: width 0.3s ease;
    }

    &:hover::after,
    &.active::after {
      width: 100%;
    }

    &.active {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`
