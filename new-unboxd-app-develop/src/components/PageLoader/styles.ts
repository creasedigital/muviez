import Styled from 'styled-components';

export const LoaderWrapper = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.appSecondaryColor};
  overflow: hidden;
`;