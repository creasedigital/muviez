import React from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarWrapper, NavLookLink } from './styles';
import { ReactComponent as WalletIcon } from '../../../assets/img/icons/wallet.svg';
// import { ReactComponent as HeartIcon } from '../../../assets/img/icons/heart.svg';
import { ReactComponent as UserIcon } from '../../../assets/img/icons/user.svg';
import { ReactComponent as SettingsIcon } from '../../../assets/img/icons/settings.svg';
import { ReactComponent as InstagramIcon } from '../../../assets/img/icons/instagram.svg';
import { ReactComponent as FacebookIcon } from '../../../assets/img/icons/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../../assets/img/icons/twitter.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/img/icons/logout.svg';
import { ReactComponent as HomeIcon } from '../../../assets/img/icons/home.svg';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../views/auth/pages/Login/redux/actions';

const DashboardSidebar: React.FC = () => {
  const dispatch = useDispatch();

  const logout = () => dispatch(logoutUser());

  return (
    <SidebarWrapper>
      <nav className="main-nav">
        <NavLink to="/dashboard" activeClassName="activeLink">
          <HomeIcon />
          <span>Dashboard</span>
        </NavLink>
        {/* <NavLink to="/wishlist" activeClassName="activeLink">
          <HeartIcon />
          <span>Wishlist</span>
        </NavLink> */}
        <NavLink to="/wallet" activeClassName="activeLink">
          <WalletIcon />
          <span>Wallet</span>
        </NavLink>
        <NavLink to="/profile" activeClassName="activeLink">
          <UserIcon />
          <span>Edit Profile</span>
        </NavLink>
        <NavLink to="/settings" activeClassName="activeLink">
          <SettingsIcon />
          <span>Settings</span>
        </NavLink>
        <NavLookLink className="logout" onClick={logout}>
          <LogoutIcon />
          <span>Logout</span>
        </NavLookLink>
        <div className="nav-footer">
          <h3>Find unboxd online</h3>
          <div className="media-links">
            <a href="https://instagram.com/unboxdgifts" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/unboxdgifts/" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
            <a href="https://twitter.com/unboxdgifts" target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </a>
          </div>
        </div>
      </nav>
    </SidebarWrapper>
  );
};

export default DashboardSidebar;
