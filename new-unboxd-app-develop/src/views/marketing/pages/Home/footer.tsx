import React from 'react';
import { Link } from 'react-router-dom';
import { BTNLink } from '../../../../components/Button/styles';
import { XHomeFooter, FooterLink, XfooterWrapper } from './style';

import Xfooter from '../../../../assets/img/illustrations/xfooterImage.svg';
import { ReactComponent as InstagramIcon } from '../../../../assets/img/icons/whiteIgLogo.svg';
import { ReactComponent as Facebook } from '../../../../assets/img/icons/whiteFbLogo.svg';
import { ReactComponent as TwitterIcon } from '../../../../assets/img/icons/whiteSvgTwitter.svg';

const Footer: React.FC = () => {
  return (
    <XfooterWrapper>
      <XHomeFooter>
        <img src={Xfooter} alt="xmas" />
        <div className="footerOverlay">
          <div className="footer-overlay-text">
            <h2>what do you want for christmas?</h2>
            <BTNLink to="/register">CREATE A WISHLIST - it's free</BTNLink>
          </div>
        </div>
      </XHomeFooter>
      <FooterLink>
        <div className="links">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/faq">Help Centre</Link>
        </div>
        <div className="links">
          <div className="copyright">
            © © Unboxd Gifts {new Date().getFullYear()}
          </div>
          <div>
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
              <Facebook />
            </a>
            <a
              href="https://twitter.com/unboxdgifts"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </a>
          </div>
        </div>
      </FooterLink>
    </XfooterWrapper>
  );
};

export default Footer;
