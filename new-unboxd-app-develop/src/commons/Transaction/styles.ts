import styled, { css } from 'styled-components';
import { Colors } from '../../constants';
import { SpaceBetween } from '../UtilityStyles/Flex';

export const TransWrapper = styled(SpaceBetween)`
  margin-bottom: 1rem;
`;

export const TransIcon = styled.span`
  padding: 0.4rem 0.65rem;
  border-radius: 50%;
  background-color: ${Colors.grey};
  transform: rotate(270deg);
`;

export const TransLeft = styled.div`
  display: flex;
  align-items: flex-start;
`;

const transGroup = css`
  display: flex;
  flex-direction: column;
  font-size: 1.09rem;
  margin-top: 0.2rem;
`;

const transFont = css`
  p {
    margin-bottom: 0.2rem;
  }

  span {
    opacity: 0.5;
  }
`;

export const TransDetails = styled.div`
  ${transGroup}
  margin-left: 0.5rem;

  ${transFont}
`;

export const TransPrice = styled.div`
  ${transGroup};
  text-align: right;

  ${transFont}
  span {
    font-size: 0.95rem;
  }
`;
