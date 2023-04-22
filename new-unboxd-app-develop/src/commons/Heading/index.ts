import styled, { css } from 'styled-components';
import { Colors, Sizes } from '../../constants';

export const PageHeading = styled.h1<{ large?: boolean; centered?: boolean }>`
  /* color: ${Colors.black}; */
  ${(props) =>
    props.large &&
    css`
      font-weight: 900;
      font-size: 53px;
      margin-top: 2rem;

      span {
        color: ${Colors.green};
        min-width: 160px;
      }

      @media (min-width: 780px) {
        font-size: 72px;
        letter-spacing: 0.5px;
        margin-top: 0.5rem;
      }
    `}

  ${(props) =>
    props.centered &&
    css`
      text-align: center;
    `}
`;

export const PageHeadingSmall = styled.h3<{
  centered?: boolean;
  color?: string;
}>`
  font-size: ${Sizes.twenty}px;
  color: ${Colors.black};
  padding: 10px 0;

  ${({ centered }) =>
    centered &&
    css`
      text-align: center;
    `}

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

export const PageHeadingNormal = styled.h3`
  font-size: ${Sizes.twenty}px;
  font-weight: 300;
  color: ${Colors.white};
  padding: 10px 0;
`;
