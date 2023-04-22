import styled from 'styled-components';
import { Colors } from '../../../constants';

export const GiftList = styled.div`
  padding: 1.5rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  margin: 0 auto;
`;

export const WelcomeWrapper = styled.div`
  background: ${Colors.navy};
  font-size: 1.2rem;
  border-radius: 18px;
  cursor: default;

  @media (min-width: 768px) {
    width: 50%;
    max-width: 700px;
    margin: 0 auto;
  }
`;

export const WelcomeHead = styled.div`
  /* background: ${Colors.navy}; */
  padding: 2rem;
  display: flex;
  align-items: center;
  .name {
    margin-left: 1rem;
  }
`;

export const WelcomeBody = styled.div`
  padding: 2rem 2rem 1rem;

  .hello {
    margin-bottom: 1.5rem;
  }

  .note {
    font-size: 18px;
    line-height: 1.35;
  }

  .create {
    display: flex;
    margin: 0.25rem auto;
  }
`;
