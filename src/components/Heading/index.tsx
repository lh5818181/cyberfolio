
import React, { type JSX } from 'react';
import { StyledHeading } from './styles';

type Props = {
  level?: 1 | 2 | 3;
  children: React.ReactNode;
};

export const Heading = ({ level = 1, children }: Props) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <StyledHeading as={Tag}>{children}</StyledHeading>;
};


