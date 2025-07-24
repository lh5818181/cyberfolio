import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  padding: 1.5rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: rgba(10, 10, 10, 0.65);
  backdrop-filter: blur(12px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

export const Logo = styled.strong`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const HamburgerButton = styled.button`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: none;
  background: transparent;
  cursor: pointer;
  z-index: 200;

  span {
    width: 28px;
    height: 3px;
    background: ${({ theme }) => theme.colors.text};
    border-radius: 2px;
    transition: all 0.4s ease;
  }

  span.open:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  span.open:nth-child(2) {
    opacity: 0;
  }
  span.open:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  padding: 2rem;
  background: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(14px);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: 600;
    letter-spacing: 1px;
    position: relative;
    transition: all 0.3s ease;

    &::after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 0;
      width: 0%;
      height: 2px;
      background: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary};
      transition: width 0.4s ease;
    }

    &:hover,
    &.active {
      color: ${({ theme }) => theme.colors.primary};
      text-shadow: 0 0 8px ${({ theme }) => theme.colors.primary};
    }

    &:hover::after,
    &.active::after {
      width: 100%;
    }
  }
`;
