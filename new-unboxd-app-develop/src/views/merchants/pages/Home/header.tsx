import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BTNLink } from '../../../../components/Button/styles';
import { GlobalStoreState } from '../../../../store/types';
import Logo from '../../../../components/Logo';

import { Container, HomeHeader, Nav } from '../../../marketing/pages/Home-OLD/style';

const Header: React.FC = () => {
  const { authenticated } = useSelector((state: GlobalStoreState) => state.user);
  return (
    <HomeHeader>
      <Container align="space-between">
        <Link to="/">
          <Logo />
        </Link>

        <Nav>
          <Link to="/faq">FAQs</Link>
          <BTNLink small={true ?? false} to={authenticated ? "/dashboard" : "/login"}>{authenticated ? 'Dashboard' : 'Login'}</BTNLink>
        </Nav>
      </Container>
    </HomeHeader>
  );
};

export default Header;
