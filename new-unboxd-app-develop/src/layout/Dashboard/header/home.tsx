import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../components/Logo';
import { Bell, Wallet } from '../../../commons/icons';
import { Sidebar } from '../../../commons';
import { SpaceBetweenHeader } from '../../../commons/UtilityStyles/Flex';
import { Hamburger, HeaderLeft, HeaderRight } from './styles';

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar((prevState) => !prevState);

  return (
    <>
      <HeaderLeft>
        <SpaceBetweenHeader align="center">
          <Hamburger onClick={toggleSidebar} className="marg-r">
            <span className="ham-line"></span>
            <span className="ham-line"></span>
            <span className="ham-line"></span>
          </Hamburger>
          <Logo size="sm" />
        </SpaceBetweenHeader>
      </HeaderLeft>

      <HeaderRight>
        <SpaceBetweenHeader align="center">
          <Link to="/wallet" className="marg-r">
            <Wallet />
          </Link>
          <Link to="/notifications" className="marg-r">
            <Bell />
          </Link>
        </SpaceBetweenHeader>
      </HeaderRight>
      <Sidebar show={showSidebar} onClose={toggleSidebar} />
    </>
  );
};

export default Home;
