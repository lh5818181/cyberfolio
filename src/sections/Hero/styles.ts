// import styled from 'styled-components'
// import { motion } from 'framer-motion'
// import { theme } from '../../styles/theme'

// export const Container = styled.section`
//     text-transform: uppercase;
//     cursor: default;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     height: 100vh;
//     display: flex
// ;
// `

// export const StatusBadge = styled.div`
//   position: absolute;
//   top: 3rem;
//   right: 1.5rem;
//   background: rgba(0, 255, 255, 0.1);
//   border: 1px solid ${theme.colors.primary};
//   color: ${theme.colors.primary};
//   padding: 0.5rem 1rem;
//   font-size: 0.8rem;
//   border-radius: 20px;
//   text-transform: uppercase;
//   font-weight: bold;
//   animation: pulse 2s infinite;

//   @keyframes pulse {
//     0% { box-shadow: 0 0 5px ${theme.colors.primary}; }
//     50% { box-shadow: 0 0 15px ${theme.colors.primary}; }
//     100% { box-shadow: 0 0 5px ${theme.colors.primary}; }
//   }
// `

// export const Content = styled(motion.div)`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 90%;
// `

// export const Words = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 1rem;
//   margin-bottom: 2rem;

//   .textCenter {
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     gap: 1rem;}
// `

// export const Word = styled.h1`
//     letter-spacing: -.075em;
//     font-family: PP-Bold;
//     font-size: ${theme.fontSizes.display || '3rem'};
//     line-height: .75em;
//     margin: 0;
//     text-shadow: 0 0 10px ${theme.colors.neon || '#00ffff'};
//     color: ${theme.colors.neon || '#00ffff'};
// `

// export const Subtext = styled.p`
//   max-width: 338px;
//   text-align: end;
//   font-size: 'PP-Med'};
//   color: ${theme.colors.textSecondary || '#ccc'};

//   em {
//     font-style: italic;
//     color: ${theme.colors.primary};
//   }

//   strong {
//     font-weight: bold;
//     color: ${theme.colors.primary};
//   }
// `

// export const StartProject = styled.a`
//   position: absolute;
//   bottom: 1.5rem;
//   right: 2rem;
//   background: transparent;
//   border: 2px solid ${theme.colors.primary};
//   color: ${theme.colors.primary};
//   padding: 0.75rem 1.5rem;
//   font-size: 0.9rem;
//   border-radius: 30px;
//   transition: 0.3s;
//   text-transform: uppercase;
//   font-weight: bold;

//   &:hover {
//     background: ${theme.colors.primary};
//     color: #000;
//     box-shadow: 0 0 15px ${theme.colors.primary};
//   }

//   @media (max-width: 768px) {
//     right: 50%;
//     transform: translateX(50%);
//   }
// `


import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  text-transform: uppercase;
  cursor: default;
  background: ${theme.colors.background};
  overflow: hidden;
  position: relative;
  padding: ${({ theme }) => theme.spacing(2)};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing(1)};
    height: auto;
    min-height: 100vh;
  }
`;

export const StatusBadge = styled.div`
  position: absolute;
  top: 3rem;
  right: 1.5rem;
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  border-radius: 20px;
  text-transform: uppercase;
  font-weight: bold;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      box-shadow: 0 0 5px ${theme.colors.primary};
    }
    50% {
      box-shadow: 0 0 15px ${theme.colors.primary};
    }
    100% {
      box-shadow: 0 0 5px ${theme.colors.primary};
    }
  }

  @media (max-width: 768px) {
    top: 8rem;
    right: 5rem;
    font-size: 1rem;
  }
`;

export const Content = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Words = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .textCenter {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    @media (max-width: 480px) {
        flex-direction: row;
        gap: 0.5rem;
        display: flex
;
    }
  }
`;

export const Word = styled.h1`
  letter-spacing: -0.075em;
  font-family: PP-Bold, sans-serif;
  font-size: ${theme.fontSizes.display};
  line-height: 0.75em;
  margin: 0;
  text-shadow: 0 0 10px ${theme.colors.neon || '#00ffff'};
  color: ${theme.colors.neon || '#00ffff'};

  @media (max-width: 768px) {
    font-size: 3rem;
  }
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const Subtext = styled.p`
  max-width: 338px;
  text-align: end;
  font-family: PP-Med, sans-serif;
  font-size: 1rem;
  color: ${theme.colors.textSecondary || '#ccc'};

  em {
    font-style: italic;
    color: ${theme.colors.primary};
  }

  strong {
    font-weight: bold;
    color: ${theme.colors.primary};
  }

  @media (max-width: 768px) {
    max-width: 240px;
    font-size: 0.9rem;
  }
  @media (max-width: 480px) {
    max-width: 200px;
    font-size: 0.8rem;
  }
`;

export const StartProject = styled.a`
  position: absolute;
  bottom: 1.5rem;
  right: 2rem;
  background: transparent;
  border: 2px solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  border-radius: 30px;
  transition: 0.3s;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    background: ${theme.colors.primary};
    color: #000;
    box-shadow: 0 0 15px ${theme.colors.primary};
  }

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 50%;
    transform: translateX(50%);
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
  }
`;
