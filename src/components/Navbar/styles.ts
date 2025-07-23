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
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
`

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    font-weight: 500;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`
