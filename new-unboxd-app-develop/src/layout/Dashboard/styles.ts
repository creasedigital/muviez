import styled, { css } from 'styled-components';
import { Colors, Fonts, Sizes } from '../../constants';

export const DashboardContainer = styled.div<{ noMinHeight?: boolean }>`
  min-height: 75vh;
  .tiny-section-header {
    margin: 15px 0;
    font-size: 12px;
  }

  ${({ noMinHeight }) =>
    noMinHeight &&
    css`
      min-height: 0;
    `}
`;

export const NavItem = styled.li`
  padding: 0 10px;
  &:last-child {
    padding-right: 0;
  }
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  padding: 20px;
  @media (min-width: 769px) {
    display: none;
  }
`;

export const HeaderTitle = styled.h2`
  font-size: ${Sizes.twenty}px;
`;

export const Nav = styled.nav`
  a {
    font-weight: 400;
    font-size: 13px;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
`;

export const DashboardContent = styled.main`
  display: flex;
  flex-direction: column;
  width: 77%;
  margin-top: 1%;
  padding: 40px 0 20px 40px;
  @media (max-width: 768px) {
    padding-left: 0;
    padding-top: 0;
    width: 100%;
  }
`;

export const MerchantDashboardContent = styled.main`
  display: flex;
  flex-direction: column;
  width: 77%;
  margin: 1% auto;
  padding: 40px 0 20px 40px;
  @media (max-width: 768px) {
    padding-left: 0;
    padding-top: 0;
    width: 100%;
  }
`;

export const DashboardWalletSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: end;
  }
`;

export const WalletBalance = styled.div`
  height: 80px;
  width: 291px;
  background: ${(props) => props.theme.appPrimaryColor};
  border-radius: 18px;
  padding: 10px 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    color: ${Colors.yellow};
    font-size: 14px;
    margin-bottom: 5px;
  }
  p {
    font-family: ${Fonts.secondary};
    font-weight: 500;
    font-size: 25px;
    color: ${(props) => props.theme.contentColor};
  }
  @media (max-width: 767px) {
    width: 100%;
    text-align: center;
  }
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  
  .profile-img {
    width: 56px;
    height: 56px;
    margin-right: 14px;
    border-radius: 22px;
    filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.25));
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  p {
    font-family: ${Fonts.secondary};
    font-weight: 300;
    font-size: 20px;
    color: ${(props) => props.theme.contentColor};
    text-transform: capitalize;
  }
  @media (max-width: 767px) {
    margin-bottom: 20px;
    .profile-img {
      display: none;
    }
  }
`;

export const UnboxdAddButton = styled.div`
  width: 69px;
  min-width: 69px;
  height: 69px;
  position: fixed;
  bottom: 60px;
  right: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;

  .under-layer {
    min-width: 100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0 5px 14px rgba(0, 0, 0, 0.05);
  }
  a {
    border: none;
    width: 47px;
    height: 47px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    z-index: 999;
    box-shadow: 0 0 14px rgba(0, 0, 0, 0.1);
    svg {
      transition: transform 0.7s ease-in-out;
    }
    &:hover {
      svg {
        transform: rotate(180deg);
      }
    }
  }
  @media (max-width: 768px) {
    right: 20px;
  }
`;
