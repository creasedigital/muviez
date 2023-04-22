import styled, { css } from 'styled-components';
import { Colors, Fonts } from '../../../../constants';

const styles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
    ${styles}
  margin: 1rem auto 0;
  max-width: 768px;
  height: 100vh;

  @media (min-width: 480px) {
    max-width: 480px;
  }

  @media (min-width: 769px) {
    max-width: 768px;
  }
`;

export const Row = styled.div`
  ${styles}
  padding: 0.25rem 0;
  margin: 1rem;

  img {
    width: 100%;
    margin: 0 auto;
    max-width: 350px;
  }

  h1 {
    margin-bottom: 1.05rem;
    font-size: 2.2rem;
  }

  p {
    line-height: 1.35;
    text-align: center;
    font-size: 1.25rem;
    font-family: ${Fonts.secondary};
    font-weight: 200;

    span {
      font-weight: 600;
    }
  }

  a {
      max-width: 300px;
      padding: 1rem 2rem;
  }

  @media (min-width: 768px) {
      h1 {
          font-size: 2.5rem;
      }

      p {
          font-size: 1.45rem;
          max-width: 600px;
      }
  }
`;

export const Link = styled.small`
  color: ${Colors.green};
  cursor: pointer;
`;
