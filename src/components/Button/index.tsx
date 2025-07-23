import React, { type ElementType } from 'react';
import { ButtonContainer } from './styles';

type ButtonProps<T extends ElementType> = {
  as?: T;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, 'children'>;

export const Button = <T extends ElementType = 'button'>({
  as,
  children,
  ...props
}: ButtonProps<T>) => {
  return (
    <ButtonContainer as={as} {...(props as any)}>
      {children}
    </ButtonContainer>
  );
};
