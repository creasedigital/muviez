import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px);
  width: 100%;
  margin: 0 auto;
  max-width: 500px;
  padding: 1rem;
`;

export const Header = styled.h1`
  font-size: 2rem;
  text-align: center;
  max-width: 500px;
  margin: 1rem auto;

  @media (min-width: 425px) {
    font-size: 2.5rem;
  }

  @media (min-width: 520px) {
    font-size: 3rem;
  }
`;