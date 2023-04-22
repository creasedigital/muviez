import { Link } from 'react-router-dom';
import { FindOnline, NavItem, NavLinks, SideBarWrapper } from './styles';
import { ReactComponent as CloseIcon } from '../../assets/img/icons/close.svg';
import { ReactComponent as WalletIcon } from '../../assets/img/icons/wallet.svg';
// import { ReactComponent as HeartIcon } from '../../assets/img/icons/heart.svg';
import { ReactComponent as UserIcon } from '../../assets/img/icons/user.svg';
import { ReactComponent as HomeIcon } from '../../assets/img/icons/home.svg';
import { ReactComponent as SettingsIcon } from '../../assets/img/icons/settings.svg';
import { ReactComponent as LogoutIcon } from '../../assets/img/icons/logout.svg';
import { ReactComponent as InstagramIcon } from '../../assets/img/icons/instagram.svg';
import { ReactComponent as FacebookIcon } from '../../assets/img/icons/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../assets/img/icons/twitter.svg';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../views/auth/pages/Login/redux/actions';

type ComponentProps = {
  show: boolean;
  onClose: () => void;
};

const Sidebar = ({ show, onClose }: ComponentProps) => {
  const dispatch = useDispatch();

  const logout = () => dispatch(logoutUser());
  return (
    <SideBarWrapper show={show}>
      <CloseIcon onClick={onClose} />
      <NavLinks>
        <NavItem>
          <HomeIcon />
          <Link to="/dashboard">Dashboard</Link>
        </NavItem>
        {/* <NavItem>
          <HeartIcon />
          <Link to="/wishlist">Wishlist</Link>
        </NavItem> */}
        <NavItem>
          <WalletIcon />
          <Link to="/wallet">Wallet</Link>
        </NavItem>
        <NavItem>
          <UserIcon />
          <Link to="/profile">Edit Profile</Link>
        </NavItem>
        <NavItem>
          <SettingsIcon />
          <Link to="/settings">Settings</Link>
        </NavItem>
        <NavItem className="logout" onClick={logout}>
          <LogoutIcon />
          <p>Logout</p>
        </NavItem>
      </NavLinks>
      <FindOnline>
        <p>Find unboxd online</p>
        <div className="media-links">
          <a
            href="https://instagram.com/unboxdgifts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.facebook.com/unboxdgifts/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://twitter.com/unboxdgifts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </a>
        </div>
      </FindOnline>
    </SideBarWrapper>
  );
};

export default Sidebar;
