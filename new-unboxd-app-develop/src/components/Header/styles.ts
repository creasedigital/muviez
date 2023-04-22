import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';
import Sizes from '../../constants/Sizes';

export const HeadWrapper = styled.header`
  display: flex;
  height: 70px;
  .container {
    justify-content: space-between;
    align-items: center;
  }
`;

export const Auth = styled.p<{centered?: boolean}>`
  font-size: calc(${Sizes.fourteen}px + 1px);
  color: ${Colors.semiDarkGrey};
  font-weight: ${Sizes.lightWeight};
  a {
    font-weight: ${Sizes.normalWeight};
    opacity: 1;
    text-decoration: underline;
  }

  ${({centered}) => centered && css`
    text-align: center;
  `}
`;
