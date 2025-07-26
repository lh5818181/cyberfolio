// import styled from 'styled-components'

// export const Container = styled.nav<{ $expanded: boolean }>`
//   position: fixed;
//   top: 50%;
//   left: 1rem;
//   transform: translateY(-50%);
//   background: transparent;
//   padding: ${({ $expanded, theme }) =>
//     $expanded ? theme.spacing(2) : theme.spacing(1)};
//   border-radius: ${({ theme }) => theme.borderRadius};
//   transition: width 0.3s ease, padding 0.3s ease;
//   width: ${({ $expanded }) => ($expanded ? '12rem' : '3rem')};
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   z-index: 1000;
// `

// export const IconList = styled.ul`
//   list-style: none;
//   margin: 0;
//   padding: 0;
//   display: flex;
//   flex-direction: column;
//   gap: ${({ theme }) => theme.spacing(2)};
// `

// export const IconItem = styled.li`
//   a {
//     display: flex;
//     align-items: center;
//     color: ${({ theme }) => theme.colors.text};
//     text-decoration: none;
//     padding: ${({ theme }) => theme.spacing(1)};
//     border-radius: ${({ theme }) => theme.borderRadius};
//     transition: all 0.3s ease;

//     svg {
//       flex-shrink: 0;
//     }

//     &:hover,
//     &.active {
//       background: ${({ theme }) => theme.colors.primaryHover + '20'};
//       color: ${({ theme }) => theme.colors.primary};
//       box-shadow: 0 0 8px ${({ theme }) => theme.colors.primary};
//     }
//   }
// `

// export const Label = styled.span`
//   margin-left: ${({ theme }) => theme.spacing(1)};
//   font-size: ${({ theme }) => theme.fontSizes.small};
//   white-space: nowrap;
//   opacity: 0;
//   animation: fadeIn 0.2s forwards;

//   @keyframes fadeIn {
//     to { opacity: 1; }
//   }
// `


import styled from 'styled-components';

export const Container = styled.nav<{ $expanded: boolean }>`
  position: fixed;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  background: transparent;
  padding: ${({ $expanded, theme }) =>
    $expanded ? theme.spacing(2) : theme.spacing(1)};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: width 0.3s ease, padding 0.3s ease;
  width: ${({ $expanded }) => ($expanded ? '12rem' : '3rem')};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1000;

  @media (max-width: 768px) {
    top: 3rem;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: row;
    width: 90%;
    justify-content: space-around;
    padding: ${({ theme }) => theme.spacing(1)};
    background: rgba(10, 10, 10, 0.8);
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`;

export const IconList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};

  @media (max-width: 768px) {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing(1)};
  }
`;

export const IconItem = styled.li`
  a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    padding: ${({ theme }) => theme.spacing(1)};
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: all 0.3s ease;

    &:hover,
    &.active {
      background: ${({ theme }) => theme.colors.primaryHover + '20'};
      color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 8px ${({ theme }) => theme.colors.primary};
    }

    @media (max-width: 768px) {
      padding: ${({ theme }) => theme.spacing(0.5)};
    }
  }
`;

export const Label = styled.span`
  margin-left: ${({ theme }) => theme.spacing(1)};
  font-size: ${({ theme }) => theme.fontSizes.small};
  white-space: nowrap;
  opacity: 0;
  animation: fadeIn 0.2s forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
