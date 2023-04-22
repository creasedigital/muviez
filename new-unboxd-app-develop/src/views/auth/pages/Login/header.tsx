import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../../components/Logo';

import { HomeHeader } from './styles';

const Header: React.FC = () => {
  return (
    <HomeHeader>
      <div className="container">
        <Link to="/">
          <Logo />
        </Link>
      </div>
    </HomeHeader>
  );
};

export default Header;
