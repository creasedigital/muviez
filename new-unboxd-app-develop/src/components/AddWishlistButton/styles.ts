import styled, { css } from 'styled-components';
import { Colors } from '../../constants';

export const UnboxdAddButton = styled.div<{ round?: boolean }>`
  width: 144px;
  min-width: 144px;
  height: 45px;
  position: fixed;
  bottom: 60px;
  left: calc(50% - 72px);
  right: calc(50% - 72px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;

  a {
    border: 1px solid ${Colors.strokegreen};
    width: 100%;
    height: 100%;
    background: ${Colors.lightgreen};
    border-radius: 2.5rem;
    position: absolute;
    z-index: 10;

    span {
      color: ${Colors.darkNavy};
      font-size: 0.85rem;
      font-family: 'Lato';
      font-weight: 600;
    }

    svg {
      width: 0.8rem;
      height: 0.8rem;
      margin-left: 0.45rem;
    }
  }

  @media (min-width: 769px) {
    left: unset;
    right: 10%;
    bottom: 90px;
  }

  ${({ round }) =>
    round &&
    css`
      width: 69px;
      min-width: 69px;
      height: 69px;
      left: unset;
      right: 10%;

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
        border-radius: 50%;
        background: '#fff';
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
    `}
`;
