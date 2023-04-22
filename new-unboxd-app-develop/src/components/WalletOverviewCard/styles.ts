import styled from 'styled-components';
import { Colors, Fonts } from '../../constants';

export const WalletBalanceBig = styled.div`
  background: ${(props) => props.theme.appSecondaryColor};
  border-radius: 18px;
  padding: 2em;
  display: flex;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  height: 10rem;
  margin-bottom: 2rem;

  @media (max-width: 767px) {
    flex-direction: column;
    text-align: center;
  }

  .circle-1 {
    position: absolute;
    top: -70px;
    left: -70px;
    height: 200px;
    width: 200px;
    background: rgba(30, 32, 40, 0.8);
    z-index: 1;
    border-radius: 50%;
  }

  .circle-2 {
    position: absolute;
    height: 200px;
    width: 200px;
    z-index: 1;
    border-radius: 50%;
    background: rgba(30, 32, 40, 0.7);
    top: -140px;
    right: -60px;
  }
  .circle-3 {
    position: absolute;
    height: 120px;
    width: 120px;
    z-index: 1;
    border-radius: 50%;
    background: rgba(30, 32, 40, 0.4);
    top: -80px;
    right: 90px;
  }

  .left {
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2;
    @media (max-width: 767px) {
      align-self: center;
    }
    span {
      color: ${Colors.yellow};
      font-size: 1.3rem;
      margin-bottom: 5px;

      @media (max-width: 767px) {
        font-size: 1rem;
        align-self: center;
      }
    }

    p {
      font-family: ${Fonts.secondary};
      font-weight: 500;
      font-size: 2rem;
      color: ${(props) => props.theme.contentColor};
      @media (max-width: 767px) {
        font-size: 1.6rem;
      }
    }
  }

  .right {
    a {
      display: flex;
      align-items: center;
    }
    align-self: flex-end;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;
    @media (max-width: 767px) {
      align-self: center;
    }
    svg {
      transition: all 0.2s ease;
    }
    span {
      font-size: 14px;
      border-bottom: 1px solid ${Colors.white};
      cursor: pointer;
      transition: all 0.2s ease;
      margin-right: 5px;
      font-weight: lighter;
      :hover {
        border-bottom: 1px solid ${Colors.yellow};
        & + svg {
          transform: scale(1.1);
        }
      }
    }
  }
`;
