import React from 'react';
import { Link } from 'react-router-dom';
import { BTNLink } from '../../../../components/Button/styles';

import {
  Container,
  HomeFooter,
  NavSide,
  GetStarted,
  UserHolder,
  UserSvg,
} from './style';

const Footer: React.FC = () => {
  return (
    <HomeFooter>
      <Container className="container">
        <h3>show your loved ones what you need</h3>
        <GetStarted className="btn-holder">
          <BTNLink to="/register">Try Unboxd</BTNLink>
        </GetStarted>
        <UserHolder>
          {[1,2,3,4].map(num => <UserSvg num={num} key={num} />)}
        </UserHolder>
        <NavSide>
          <div className="nav">
            <Link to="/faq">FAQs</Link>
            <Link to="/terms">Terms of use</Link>
            <Link to="/privacy" className="hide-mobile">
              Privacy Policy
            </Link>
          </div>
        </NavSide>
      </Container>
    </HomeFooter>
  );
};

export default Footer;
