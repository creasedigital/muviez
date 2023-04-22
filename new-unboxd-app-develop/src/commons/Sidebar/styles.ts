import styled from 'styled-components';
import { Colors } from '../../constants';
import { Cross } from '@styled-icons/icomoon';

export const SideBarWrapper = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 11;
  backdrop-filter: blur(10px);
  transform: translateX(${({ show }) => (show ? '0' : '-110vw')});
  transition: 0.4s transform ease;
  color: ${Colors.white};
  padding: 3rem 2rem 2rem;
`;

export const CloseButton = styled(Cross)`
  position: absolute;
  top: 40px;
  right: 20px;
  width: 20px;
`;

export const NavLinks = styled.ul`
  margin: 4rem 0;
`;

export const NavItem = styled.li`
  margin-bottom: 2rem;
  font-size: 17px;
  display: flex;
  align-items: center;
  font-weight: 300;
  svg {
    width: 20px;
    height: 20px;
    margin-right: 13px;
  }

  &.logout {
    margin-top: 3.25rem;
  }
`;

export const FindOnline = styled.div`
  position: absolute;
  bottom: 5rem;
  left: 2rem;
  display: none;

  p {
    font-size: 20px;
    margin-bottom: 2rem;
  }

  .media-links {
    display: flex;
    justify-content: space-around;

    a {
      background: #fff;
      width: 46px;
      height: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 16px;
      svg {
        margin-right: 0;
      }
    }
  }

  @media (min-height: 569px) {
    display: unset;
  }
`;

export const SocialIcon = styled.a.attrs(() => ({
  target: '_blank',
  rel: 'noopener noreferrer',
}))`
  background: ${Colors.white};
  border-radius: 17px;
  color: ${Colors.black};
  font-size: 1rem;
  display: inline-block;
  width: 50px;
  height: 50px;
  padding: 0.8rem;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;
