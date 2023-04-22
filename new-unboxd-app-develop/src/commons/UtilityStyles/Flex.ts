import styled from 'styled-components';

export const SpaceBetween = styled.div<{ align?: string }>`
  display: flex;
  justify-content: space-between;
  align-items: ${({ align }) => align || 'flex-start'};
  h2 {
    color: #ffffff;
    opacity: 0.8;
    font-size: 25px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    * {
      width: 100%;
    }
  }
`;

export const SpaceBetweenHeader = styled.div<{ align?: string }>`
  display: flex;
  justify-content: space-between;
  align-items: ${({ align }) => align || 'flex-start'};
  h2 {
    color: #ffffff;
    opacity: 0.8;
    font-size: 25px;
  }
`;

export const Flex = styled.div`
  display: flex;
`;

export const FlexTextCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export const SpaceBetweenForm = styled.div`
  display: flex;
  flex-direction: column;
  
  div {
    width: 100%;
  }
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;

    div {
      width: 47.5%;
    }
  }
`;
