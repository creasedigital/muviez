import styled from 'styled-components';
import { Sizes } from '../../constants';

export const Paragraph = styled.p<{ align?: string }>`
  text-align: ${({ align }) => align || 'left'};
`;

export const Bold = styled.span`
  font-weight: ${Sizes.BoldWeight};
`;
