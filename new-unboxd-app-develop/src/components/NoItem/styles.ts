import styled, { css } from 'styled-components';

interface ICard {
  right?: boolean;
  big?: boolean;
}

export const NoItemWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const NoItemCard = styled.div<ICard>`
  width: calc(50% - 8px);
  min-height: 220px;
  margin-right: 8px;
  margin-bottom: 16px;
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
  border-radius: 10px;
  opacity: 0.1;

  ${(props) =>
    props.right &&
    css`
      margin-left: 8px;
      margin-right: 0;
    `}

  ${(props) =>
    props.big &&
    css`
      height: calc(80vh - 158px);
    `}
`;
