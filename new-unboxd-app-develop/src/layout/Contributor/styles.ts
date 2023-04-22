import styled from 'styled-components';

export const ContributorContainer = styled.div`
  display: flex;
  
  .container {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 80px);
    max-width: 780px;
    margin: auto;
  }

  @media (min-width: 768px) {
    .container {
      margin: 2rem auto 0;
    }
  }
`;