import Styled, { css } from 'styled-components';
import { HeadWrapper } from '../../../../components/Header/styles';
import { FooterWrapper } from '../../../../components/Footer/styles';
import Colors from '../../../../constants/Colors';
import Image from '../../../../assets/img/unboxd-banner-lg.png';
import SmImage from '../../../../assets/img/unboxd-banner-sm.png';
import AppImage from '../../../../assets/img/unboxd-app.png';
import WavyRibbon from '../../../../assets/img/illustrations/ribbon-wavy.svg';
import User1 from '../../../../assets/img/illustrations/User1.svg';
import User2 from '../../../../assets/img/illustrations/User2.svg';
import User3 from '../../../../assets/img/illustrations/User3.svg';
import User4 from '../../../../assets/img/illustrations/User4.svg';
import styled from 'styled-components';
import Effects from '../../../../constants/Effects';
import { Link } from 'react-router-dom';
import { Sizes } from '../../../../constants';

export const Container = Styled.div<{ column?: boolean; align?: string }>`
    display: flex;
    width: 100%;
    max-width: 1024px;
    padding: 10px 0;
    margin: 0 auto;

    .christmasThemeBanner {
      max-width: 1024px;
      margin: 0 auto;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  
    ${({ align }) =>
      align &&
      css`
        justify-content: ${align};
      `}

    ${({ column }) =>
      column &&
      css`
        flex-direction: column;
      `}
`;

export const Banner = Styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 5rem;
    padding: 0 20px;
   
    .content {
        display: flex;
        flex-direction: column;
    }

    .banner-img {
      display: flex;
      margin-left: -20px;
      margin-right: -20px;
      margin-top: 2rem;
      margin-bottom: 2rem;

      img {
        width: 100%;
        object-fit: contain;
      }
    }


    @media (min-width: 980px) {
      flex-direction: row;
      justify-content: space-between;
      
      .content {
        flex: 0 0 45%;
        * {
          text-align: left;
        }
      }
      
      .banner-img {
        flex: 0 0 50%;
        margin: 0;
      }
    }
`;

export const GetStarted = Styled.div`
  display: flex;
  width: 100%;
  padding: 0 2rem;
  z-index: 3;

  a {
    max-width: 350px;
    margin: 0 auto;
  }

  @media (min-width: 980px) {
      padding: 0;
      a {
          margin-left: 0;
      }
  }
`;

export const StepWrapper = Styled.div`
    display: grid;
    grid-template-columns: 1fr;
    margin: 1rem 0;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      padding: 0 20px;
    }

    @media (min-width: 1024px) {
      gap: 4rem;
    }
`;

export const Step = Styled.div<{ bg?: number }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow: hidden;
    color: ${Colors.realDark};
    padding: 40px 30px;

    h4 {
      font-size: 14px;
      font-weight: 500;
      text-transform: uppercase; 
      margin-bottom: 1rem;
    }

    p {
      max-width: 300px;
      width: 85%;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
    }

    img {
    }

    ${({ bg }) =>
      bg &&
      css`
        background-color: ${bg === 1
          ? '#FAF1CB'
          : bg === 2
          ? '#DBE7E9'
          : bg === 3
          ? '#F1F4F8'
          : '#E9F0E5'};

        img {
          order: ${bg === 2 || bg === 3 ? -1 : 1};
          margin-top: ${bg === 2 || bg === 3 ? -40 : 40}px;
          margin-bottom: ${bg === 2 || bg === 3 ? 40 : -40}px;
        }
      `}

`;

export const PillsSection = Styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    overflow: hidden;

    h2 {
      font-family: Helvetica;
      font-style: normal;
      font-weight: bold;
      font-size: 45px;
      line-height: 59px;
      text-align: center;
      margin: 10px 30px;
      max-width: 600px;
    }
    
    .wrapper {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: 10px -50%;
      max-width: 750px;
    }
    
    @media (min-width: 768px) {

      h2 {
        font-size: 70px;
        line-height: 83px;
        margin: 10px auto;
      }

      .wrapper {
        justify-content: flex-start;
        margin: 10px auto;
      }
    }
`;

export const Pill = Styled.div`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 25px;
  padding: 20px;
  margin: 10px;
`;

export const StorySection = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 2rem;
  position: relative;
  bottom: -2rem;
  z-index: 2;

  p {
    max-width: 520px;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    position: relative;
    z-index: 3;

    a {
      display: block;
      margin-top: 20px;
      text-transform: uppercase;
      text-transform: center;
      font-size: 18px;
      line-height: 26px;
    }
  }

  @media (min-width: 768px) {
    margin-top: 3rem;

    p {
      font-size: 25px;
      line-height: 31px;

      a {
        font-size: 20px;
        line-height: 29px;
      }
    }
  }

`;

export const HomeHeader = Styled(HeadWrapper)`
  padding: 3rem 20px;
  .container {
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
  }
`;

export const HomeFooter = Styled(FooterWrapper)`
  padding: 3rem 0;
  opacity: 1;
  position: relative;
  background: linear-gradient(0.17deg, #45AA61 0.16%, rgba(69, 170, 97, 0) 99.87%);

  &::before {
    content: '';
    position: absolute;
    top: -300px;
    left: 0;
    width: 100%;
    height: 480px;
    background-image: url(${WavyRibbon});
    background-position: 35%;
    background-repeat: no-repeat;
    z-index: 1;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-top: 5rem;

    h3 {
      font-size: 45px;
      line-height: 59px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 30px;
      max-width: 680px;
      position: relative;
      z-index: 3;
    }

    .nav {
      display: flex;
      align-items: center;
      margin-top: 2rem;

      a {
        margin: 0 0.5rem;
      }
    }
  }

  @media (min-width: 768px) {

    &::before {
      top: -150px;
      left: 0;
      background-position: top center;
    }

    .container {
      padding-top: 5rem;

      h3 {
        font-size: 70px;
        line-height: 83px;
        padding-top: 3rem;
        text-transform: capitalize;
      }

      .btn-holder {
        a {
          margin: 0 auto;
        }
      }

      .nav {
        display: flex;
        align-items: center;
        margin-top: 0;
        margin-right: 2rem;
  
        a {
          margin: 0 0.5rem;
        }
      }
    }
  }
`;

export const UserHolder = Styled.div`
  display: none;
  position: absolute;
  top: 10%;
  left: 15%;
  width: 70%;
  height: 70%;
  z-index: 1;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const UserSvg = Styled.div<{ num?: number }>`
  position: absolute;
  width: 208px;
  height: 208px;

  ${({ num }) =>
    num &&
    css`
      top: ${num === 1 ? -30 : num === 2 ? 120 : 'unset'}px;
      left: ${num === 2 ? -100 : num === 3 ? -10 : 'unset'}px;
      right: ${num === 1 ? 20 : num === 4 ? -100 : 'unset'}px;
      bottom: ${num === 3 ? -80 : num === 4 ? -20 : 'unset'}px;
      background: url(${num === 1
        ? User1
        : num === 2
        ? User2
        : num === 3
        ? User3
        : User4});
      background-repeat: no-repeat;

      @media (min-width: 1024px) {
        top: ${num === 1 ? -50 : num === 2 ? 170 : 'unset'}px;
        left: ${num === 2 ? -100 : num === 3 ? 40 : 'unset'}px;
        right: ${num === 1 ? 20 : num === 4 ? -100 : 'unset'}px;
        bottom: ${num === 3 ? -100 : num === 4 ? 10 : 'unset'}px;
      }
    `}

`;

export const ProductHunt = Styled.a`
  position: fixed;
  bottom: 40px;
  z-index: 4;
  left: 20px;

  @media (min-width: 1024px) {
    left: unset;
  }
`;

export const NavSide = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Nav = Styled.nav`
  display: flex;
  align-items: center;

  a {
    margin: 0 1rem;

    &:not(:last-child) {
      display: none;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  @media (min-width: 768px) {
    a {
      &:first-child {
        display: flex;
      }
    }
  }
`;

export const Paragraph = Styled.p`
  font-size: 18px;
  letter-spacing: 0.5px;
  margin: 1.5rem 0;
  opacity: 0.75;
   

  @media (min-width: 780px) {
    font-size: 20px;
    letter-spacing: 0.75px;
    max-width: 414px;
    margin: 2rem auto;
    
  }
`;

export const UnorderedList = Styled.ul`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  li {
    margin: 0.5rem 0.5rem 2rem;
    display: flex;
    align-items: flex-start;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      min-width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 1rem;
      background: ${Colors.tintOrange};
      color: ${Colors.burntOrange};
    }
  }
  @media (min-width: 768px) {
    margin: 2rem -2rem 1rem;
    flex-direction: row;
    justify-content: space-between;

    li {
      flex: 0 0 30%;
    }
  }
  @media (min-width: 890px) {
    margin-left: -4rem;
    margin-right: -4rem;
  }
`;

export const UnboxdCarousel = Styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-left: -20px;
  margin-right: -20px;
  margin-bottom: -10px;
  max-height: 45vh;
  position: relative;
  overflow: hidden;
  &::before, &::after {
    content: '';
    position: absolute;
    width: 25%;
    height: 100%;
    top: 0;
    z-index: 1;
  }
  &::before {
    left: -1px;
    background: linear-gradient(to right, rgba(22, 24, 29, 1), rgba(34, 36, 44, 0));
  }
  &::after {
    right: -1px;
    background: linear-gradient(to left, rgba(22, 24, 29, 1), rgba(34, 36, 44, 0));
  }
  .carousel-tab {
    margin: 1.5rem 0;
    ul {
      display: flex;
      width: 100%;
      overflow: hidden;
      justify-content: center;
      position: relative;
      &::before, &::after {
        content: '';
        position: absolute;
        width: 15%;
        height: 100%;
        top: 0;
      }
      &::before {
        left: 0;
        background: linear-gradient(to right, rgba(22, 24, 29, 0.8), rgba(34, 36, 44, 0.1));
      }
      &::after {
        right: 0;
        background: linear-gradient(to left, rgba(22, 24, 29, 0.8), rgba(34, 36, 44, 0.1));
      }
      .list-item {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0.5rem;
        white-space: nowrap;
        color: ${Colors.tintOrange};
        &.active {
          background: ${Colors.tintOrange};
          color: ${Colors.burntOrange};
          padding: 5px 10px;
          border-radius: 7.5px;
        }
      }
    }
  }
  .carousel {
    display: flex;
    height: 330px;
    background-size: 650px;
    background-repeat: repeat-x;
    background-position: top center;
    background-image: url(${SmImage});
    width: 4800px;
    -webkit-animation: scroll-grid 180s linear infinite;
    animation: scroll-grid 180s linear infinite;
  }
  .bottom-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 90%;
    background: linear-gradient(to top, rgba(22, 24, 29, 1), rgba(34, 36, 44, 0));
    z-index: 2;
  }
  @media (min-width: 780px) {
    max-height: 45vh;
    margin-top: 1rem;
    .carousel-tab {
      margin: 4rem 0;
      ul {
        &::before, &::after {
          content: '';
          position: absolute;
          width: 31%;
          height: 100%;
          top: 0;
        }
        .list-item {
          font-size: 18px;
          margin: 0 0.95rem;
        }
      }
    }
    .carousel {
      height: 500px;
      background-size: 1420px;
      width: 5260px;
      margin-top: 2rem;
      background-image: url(${Image});
    }
  }
  @-webkit-keyframes scroll-grid {
    0% {
        -webkit-transform: translate3d(0, 0, 0);
        transform:translate3d(0, 0, 0)
    }
    100% {
        -webkit-transform: translate3d(-2420px, 0, 0);
        transform:translate3d(-2420px, 0, 0)
    }
  }
  @keyframes scroll-grid {
    0% {
        -webkit-transform: translate3d(0, 0, 0);
        transform:translate3d(0, 0, 0)
    }
    100% {
        -webkit-transform: translate3d(-2420px, 0, 0);
        transform:translate3d(-2420px, 0, 0)
    }
  }
`;

export const HowItWorks = Styled.div`
  display: flex;
  margin: 5rem auto;
  .contentContainer {
    display: flex;
    flex-direction: column;
    min-height: 0;
  }
`;

export const StatsArea = Styled.div`
  display: flex;
  padding: 1rem;
  background-color: ${Colors.green};
  margin-top: 1rem;
  margin-left: -20px;
  margin-right: -20px;
  
  .contentContainer {
    display: flex;
    flex-direction: column;
    width: 100%;

    .content-stat {
      ul {
        li {
          display: flex;
          flex-direction: column;
          margin: 1rem;
          h1 {
            font-size: 35px;
            margin-bottom: 0.45rem;
          }
        }
      }
    }

    .image-stat {
      display: none;
    }
  }

  @media (min-width: 425px) {
    .contentContainer {
      flex-direction: column;
      .content-stat {
        ul {
          display: flex;
          margin: 0 auto;
          flex-wrap: wrap;
          li {
            flex: 0 0 40%;
          }
        }
      }
    }
  }
  
  @media (min-width: 768px) {
    border-radius: 20px;
    padding: 3rem 2rem;
    margin-top: 2rem;

    .contentContainer {
      flex-direction: row;

      h1 { 
        text-align: left;
      }

      .content-stat {
        flex: 0 0 50%;
        ul {
          flex-direction: column;

          li {
            flex: 1;
          }
        }
      }

      .image-stat {
        display: flex;
        background-image: url(${AppImage});
        width: 100%;
        background-position: top center;
        background-size: cover;
        background-repeat: no-repeat;
        margin-bottom: -3.1rem;
        margin-top: -7rem;
        margin-right: -1.5rem;
        margin-left: 1.5rem;
      }
    }
  }

  @media (min-width: 890px) {
    margin-left: -4rem;
    margin-right: -4rem;
    margin-top: 4rem;
  }
`;

export const FindOnline = Styled.div`
  margin: 1rem auto;
`;

export const SocialIcon = Styled.a.attrs(() => ({
  target: '_blank',
  rel: 'noopener noreferrer',
}))`
  background: ${Colors.white};
  border-radius: 17px;
  color: ${Colors.black};
  font-size: 0.5rem;
  display: inline-block;
  width: 25px;
  height: 25px;
  padding: 0.4rem;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const StepTitle = Styled.h3`
  font-size: 24px;
  margin-bottom: 1rem;
`;

export const StepContent = Styled.p`
  font-size: 16px;
`;

export const ChristmasUIWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 2rem;
  position: relative;
  }
  h2 {
    font-family: Helvetica;
    font-style: Bold;
    font-size: 50px;
  }
  p {
    margin-top: 1.6rem;
    max-width: 520px;
    font-style: Regular;
    font-size: 18px;
     line-height: 32px;
      color :rgba(255, 255, 255, 0.5);
      text-align: center;
  }
  .profileWrapper{
  margin-top: 1.6rem;
  display:flex;
  align-items: center;
  gap: 1rem;
  .handle{
  color :rgba(255, 255, 255, 0.5);
  }
  
  }
  
`;

export const XHomeFooter = Styled.div`
  position: relative;
  width: calc(100% - 30px);
  min-height: 300px;
  max-height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 15px;
  border-radius: 15px;

  img {
    width: 100%;
    min-height: 300px;
    object-fit: cover;
  }

.footerOverlay{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  color: white;
  text-align: center;
  display: flex;
  align-items:centre;
  flex-direction: column;
  justify-content: center;
   max-width: 520px;
   margin: auto;
}

.footer-overlay-text {
  margin: 0 5%;
}

.footer-overlay-text h2 {
  font-family: Helvetica;
  font-style: Bold;
  font-size: 50px;
  margin: 2rem 0;
}
`;

export const ReasonsHeader = Styled.h2`
 font-family: Helvetica;
    font-style: Bold;
    font-size: 50px;
    text-align: center;
    margin-bottom: 1.6rem;
    margin-top: 3rem;

`;

export const ReasonsWrapper = Styled.div`
   display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px; 
    @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    .reasons  {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align:center;
      p {

      }
    }
  }
    
    div {
        .icon-wrapper {
        width:50px;
        height:50px;
        background:${Colors.darkerGrey};
        border-radius: 17px;
        display:flex;
        align-items: center;
        justify-items:center;
        text-align:center;
        margin-bottom: 1rem;
        span {
          text-align: center;
          margin:auto;
        }
        }
        h3 {
          font-family: Helvetica;
          font-size: 35px;
        }
         p {
           margin-top: 1.6rem;
           max-width: 520px;
           font-style: Regular;
           font-size: 18px;
           line-height: 32px;
           color :rgba(255, 255, 255, 0.5);
      
         }
        }

`;

export const FooterLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  width: 100%;

  .links {
    display: flex;
    margin-bottom: 1rem;

    a {
      margin: 0 1rem;
    }

    &:last-child {
      display: flex;
      flex-direction: column;

      a {
        order: 0;
      }

      .copyright {
        margin: 1rem 0;
        order: 1;
        text-align: center;
      }
    }
  }
  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;

    .links {
      &:last-child {
        flex-direction: row;
        align-items: center;

        .copyright {
          order: 0;
          margin: 0 2rem 0 0;
        }
      }
    }
  }
`;
export const XfooterWrapper = Styled.div`
    width: 100%;
    max-width: 1024px;
    padding: 10px 0;
    margin: 0 auto;
`;

export const DemoModal = Styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(${Effects.blur}px);
  z-index: 15;
`;

export const DemoContent = Styled.div`
 width: 80%;
  min-height: 60vh;
  max-height: 90vh;
  background: ${Colors.darkNavy};
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
  position: absolute;
  left: 0;
  bottom: 0;
  transform: none;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.5);
  padding: 2rem;

  @media (min-width: 768px) {
    width: 30%;
    max-height: 30rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0.8rem;
  }

`;
export const XbuttonLink = styled(Link)`
  background: ${Colors.green};
  border-radius: 20px;
  font-weight: ${Sizes.lightWeight};
  font-size: calc(${Sizes.fourteen}px + 1px);
  height: 61px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 1rem;
  margin: 1.5rem 0;
  width: 45%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const DemoButton = styled.a`
  border-radius: 20px;
  font-weight: ${Sizes.lightWeight};
  font-size: calc(${Sizes.fourteen}px + 1px);
  height: 61px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 1rem;
  margin: 1.5rem 0;
  width: 45%;
  border: 1px solid ${Colors.white};
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const ChristmasBanner = Styled.div`
position: relative;
width: 100%;
@media(max-width: 767px){
    height: 1400px;
  }
  @media(min-width : 577px) and (max-width: 780px){
   height: 1700px;
  }
   @media(min-width : 781px) and (max-width: 980px){
   height: 2000px;
  }
  
  
 
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0% 0% 100% 100%/0% 0% 10% 10%;
  @media(min-width: 769px ){
  min-height: 800px;
  
  }
}

`;
export const DemoGiftWrapper = styled.div`
  height: 65vh;
  overflow: hidden;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background: linear-gradient(transparent -100px, #16181d);
  }

  .btnWrapper {
    position: absolute;
    top: 60%;
    width: 70%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    right: 0;
    z-index: 7;
    @media (min-width: 768px) {
      top: 40%;
    }
  }
`;
