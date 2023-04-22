import React from 'react';
import { LinkProps } from 'react-router-dom';
import { BTNLink } from './styles';

const ButtonLink: React.FC<LinkProps> = ({ children, to }) => {
  return <BTNLink to={to}>{children}</BTNLink>;
};

export default ButtonLink;
