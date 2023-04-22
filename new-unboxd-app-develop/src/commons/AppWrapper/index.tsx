import React from 'react';
import { MainWrapper } from './styles';

const AppWrapper: React.FC = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default AppWrapper;
