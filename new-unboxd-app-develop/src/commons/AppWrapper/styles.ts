import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 80%;
  margin: auto;
  max-width: 1200px;
  display: flex;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
