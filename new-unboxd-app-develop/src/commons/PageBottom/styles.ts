import styled, { css } from 'styled-components';

export const Bottom = styled.div<{ float?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 5px 0;

  ${(props) =>
    props.float &&
    css`
      position: absolute;
      bottom: 2rem;
    `}
`;
