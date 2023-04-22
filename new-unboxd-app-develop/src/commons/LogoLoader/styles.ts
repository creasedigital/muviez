import Styled, { css } from 'styled-components';
import { Colors } from '../../constants';
import { LogoSizes, Size } from './types';

export const HeartWrapper = Styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const Heart = Styled.div<{ white?: boolean; size: Size }>`
  position: relative;
  left: -10px;
  z-index: 1;
  animation: morph 2s ease infinite;

  ${({ white }) =>
    white &&
    css`
      z-index: 2;
      left: 10px;
      animation: remorph 2s ease infinite;
    `}

  ${({ size }) =>
    size &&
    css`
      left: calc(${LogoSizes[size]}px - ${LogoSizes[size] / 2}px);
    `}

  .heart {
    fill: ${Colors.green};
    width: ${({ size }) => LogoSizes[size]}px;

    ${({ white }) =>
      white &&
      css`
        fill: ${(props) => props.theme.contentColor};
      `}
  }

  @keyframes morph {
    0% {
      left: -10px; 
      z-index: 1;
      ${({ size }) =>
        size &&
        css`
          left: calc(((0.2 * ${LogoSizes[size]}px) - ${LogoSizes[size]}px) / 2);
        `}
    }
    25% {left: 0px; z-index: 2}
    50% {
      left: -10px; 
      z-index: 3;
      ${({ size }) =>
        size &&
        css`
          left: calc(((0.2 * ${LogoSizes[size]}px) - ${LogoSizes[size]}px) / 2);
        `}
    }
    75% {left: 0px; z-index: 2}
    100% {
      left: -10px; 
      z-index: 1;
      ${({ size }) =>
        size &&
        css`
          left: calc(((0.2 * ${LogoSizes[size]}px) - ${LogoSizes[size]}px) / 2);
        `}
    }
  }

  @keyframes remorph {
    0% {
      left: 10px; 
      z-index: 2;
      ${({ size }) =>
        size &&
        css`
          left: calc((${LogoSizes[size]}px - (0.2 * ${LogoSizes[size]}px)) / 2);
        `}
    }
    25% {left: 0px; z-index: 1}
    50% {
      left: 10px; 
      z-index: 1;
      ${({ size }) =>
        size &&
        css`
          left: calc((${LogoSizes[size]}px - (0.2 * ${LogoSizes[size]}px)) / 2);
        `}
    }
    75% {left: 0px; z-index: 1}
    100% {
      left: 10px; 
      z-index: 2;
      ${({ size }) =>
        size &&
        css`
          left: calc((${LogoSizes[size]}px - (0.2 * ${LogoSizes[size]}px)) / 2);
        `}
    }
  }
`;
