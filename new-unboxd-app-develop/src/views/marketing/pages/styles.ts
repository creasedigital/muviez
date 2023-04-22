import { Colors } from '../../../constants';
import styled from 'styled-components';

export const Paragraph = styled.p`
  font-size: 18px;
  letter-spacing: 0.5px;
  margin: 1.5rem 0;
  color: ${Colors.darkWhite};

  span {
    color: ${Colors.white};
  }

  @media (min-width: 780px) {
    font-size: 20px;
    letter-spacing: 0.75px;
    max-width: 414px;
    margin: 1.5rem auto;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 1.2;
  letter-spacing: 1px;
  opacity: 0.7;
  margin: 1rem 0;

  a {
    color: ${Colors.green};
  }
`;

export const Clear = styled.span`
  margin: 1rem 0;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 1rem;

  li {
    list-style: disc;
    margin: 0.35rem;
    opacity: 0.7;
  }
`;

export const Tabsheader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.274);
  margin-top: 3rem;

  .tabs {
    color: #ffffff7f;
    padding: 15px;
    text-align: center;
    background: transparent;
    cursor: pointer;
    box-sizing: content-box;
    position: relative;
    outline: none;
  }

  .active-tabs {
    color: #fff;
    border-radius: 2px;
    border-bottom: 3px solid #4e9060;
  }

  .active-tabs::before {
    content: '';
    display: block;
    position: absolute;
    top: -5px;
    left: 50%;
    height: 5px;
  }
`;

export const ContentWrapper = styled.div`
  .content {
    padding: 20px;
    width: 100%;
    height: 100%;
    display: none;
  }

  .active-content {
    padding: 20px;
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export const BottomWrapper = styled.div`
  margin-top: 10px;
  .maillink {
    text-decoration: underline;
    color: #4e9060;
  }
`;

export const Header = styled.h3`
  font-size: 15px;
  font-family: inherit;
`;

export const Link = styled.a`
  color: #31acd2;
  text-decoration: underline;
`;

export const SubHeading = styled.span`
  font-size: 15px;
  margin-right: 7px;
  font-weight: bold;
`;
