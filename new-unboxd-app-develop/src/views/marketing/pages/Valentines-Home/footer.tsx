import React from 'react';
import { Link } from 'react-router-dom';
import { BTNLink } from '../../../../components/Button/styles';
import { XHomeFooter, FooterLink, XfooterWrapper } from './style';

// import Xfooter from '../../../../assets/img/illustrations/xfooterImage.svg';
import { ReactComponent as InstagramIcon } from '../../../../assets/img/icons/whiteIgLogo.svg';
import { ReactComponent as Facebook } from '../../../../assets/img/icons/whiteFbLogo.svg';
import { ReactComponent as TwitterIcon } from '../../../../assets/img/icons/whiteSvgTwitter.svg';
import { XContainerFooter } from './style';

const Footer: React.FC = () => {
  return (
    <XfooterWrapper>
      <XHomeFooter>
        <div className="footerOverlay">
          <div className="footer-overlay-text">
            <h2>what do you want?</h2>
            <BTNLink roundRadius to="/register">
              Create your wishlist
            </BTNLink>
          </div>
        </div>
      </XHomeFooter>
      <XContainerFooter>
        <div className="container">
        {/*
        <FooterCaveat >
            <div className="content">
              <h3>😏 not here for valentines bs?</h3>
              <p>
                No worries. You can also use unboxd to create wishlist for
                birthdays, weddings, graduation, new born and just about any
                other occassion
              </p>
            </div>
            <div className="button-link">
              <BTNLink valentine roundRadius outline to="/register">
                Create a wishlist
              </BTNLink>
            </div>
          </FooterCaveat>
  */}
          <FooterLink>
            <div className="links">
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
              <Link to="/faq">Help Centre</Link>
            </div>
            <div className="links">
              <div className="copyright">
                © Unboxd {new Date().getFullYear()}
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
        </div>
      </XContainerFooter>
    </XfooterWrapper>
  );
};

export default Footer;
