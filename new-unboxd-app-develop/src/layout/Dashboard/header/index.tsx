import React from 'react';
import { Head } from '../styles';
import Main from './main';
import Home from './home';

type ComponentProps = {
  children: React.ReactNode;
};

const Header = ({ children }: ComponentProps) => {
  return <Head>{children}</Head>;
};

Header.Main = Main;
Header.Home = Home;

export default Header;
