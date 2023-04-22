import { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Logo from '../../../components/Logo';
import { Sidebar } from '../../../commons';
import { Hamburger, Page } from './styles';
import { Wallet } from '../../../commons/icons/';
import { SpaceBetweenHeader } from '../../../commons/UtilityStyles/Flex';

interface IPage {
  page: string;
}
const PageHeader = ({ page }: IPage) => {
  return <Page>{page}</Page>;
};

const Main = () => {
  const { path, params } = useRouteMatch();
  const page = path.slice(1).split('/')[0];
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar((prevState) => !prevState);

  return (
    <>
      <Hamburger onClick={toggleSidebar}>
        <span className="ham-line"></span>
        <span className="ham-line"></span>
        <span className="ham-line"></span>
      </Hamburger>
      {page === 'dashboard' || Object.entries(params).length > 0 ? <Logo size="sm" /> : <PageHeader page={page} />}
      <SpaceBetweenHeader>
        {/* <Link to="/wallet" className="marg-r"> */}
        <Link to="/wallet">
          <Wallet />
        </Link>
        {/* <Link to="/notiications">
          <Bell />
        </Link> */}
      </SpaceBetweenHeader>

      <Sidebar show={showSidebar} onClose={toggleSidebar} />
    </>
  );
};

export default Main;
