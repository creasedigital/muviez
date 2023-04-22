import styled from 'styled-components';
import { PlainButton } from '../../../components/Button/styles';
import Colors from '../../../constants/Colors';
import { SpaceBetween } from '../../../commons/UtilityStyles/Flex';

export const Hamburger = styled(PlainButton)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
  width: 25px;
  padding: 0;
  span {
    width: 100%;
    height: 2px;
    background-color: ${Colors.white};
  }
`;

export const HeaderLeft = styled(SpaceBetween)`
  height: 100%;
`;

export const HeaderRight = styled(SpaceBetween)`
  height: 100%;
`;

export const Page = styled.h3`
  font-size: 24px;
`;