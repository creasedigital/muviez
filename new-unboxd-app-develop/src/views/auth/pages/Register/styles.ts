import styled from 'styled-components';
import { Bottom } from '../../../../commons/PageBottom/styles';
import { Sizes } from '../../../../constants';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const Auth = styled.p`
  font-size: calc(${Sizes.small}px + 1px);

  a {
    font-weight: ${Sizes.mediumWeight};
  }
`;

export const FooterText = styled(Bottom)`
  padding: 0rem 5rem;
  .info {
    font-size: ${Sizes.fourteen}px;
    line-height: ${Sizes.fourteen}px;
    font-weight: ${Sizes.normalWeight};
    text-align: center;
  }
`;
