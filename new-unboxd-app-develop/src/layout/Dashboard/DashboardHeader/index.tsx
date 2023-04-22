import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../components/Logo';
import { AppWrapper } from '../../../commons';
import { DashboardHeaderWrapper } from './styles';

const DashboardHeader: React.FC = () => {
  return (
    <DashboardHeaderWrapper>
      <AppWrapper>
        <div className="header-content">
          <Link to="/" className="ub-logo">
            <Logo />
          </Link>
          <Link to="/faq">FAQs</Link>
        </div>
      </AppWrapper>
    </DashboardHeaderWrapper>
  );
};

export default DashboardHeader;
