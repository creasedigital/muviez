import React from 'react';
import { ButtonStyle } from './style';

type ComponentProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  active: boolean;
};

export const MenuButton = ({ onClick, active }: ComponentProps) => {
  return (
    <ButtonStyle onClick={onClick} active={active}>
      <span />
      <span />
      <span />
    </ButtonStyle>
  );
};
