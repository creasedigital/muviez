import styled, { css } from 'styled-components';
import { Colors } from '../../constants';

export const ShareWrapper = styled.div`
  padding: 20px 20px 10px;
  
  @media (min-width: 580px) {
    padding: 20px 40px;
  }
`;

export const Container = styled.div`
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
`;

export const ShareText = styled.p`
  width: 70%;
  margin: 1rem 0 1.5rem;
  color: ${Colors.white};
`;

export const ShareUrl = styled.p`
  position: relative;
  white-space: nowrap;
  overflow-x: hidden;
  padding: 1rem 0.75rem;
  background: ${Colors.navy};
  border-radius: 10px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      270deg,
      ${Colors.navy} 0%,
      rgba(247, 247, 247, 0) 100%
    );
    width: 100%;
    height: 100%;
  }
`;

export const Paragraph = styled.p<{ small?: boolean }>`
  font-size: 18px;
  letter-spacing: 0.5px;
  margin: 1.5rem 0;
  color: ${Colors.darkWhite};

  ${({ small }) => small && css`
    font-size: 14px;
    line-height: 1;
    margin: 0.5rem 0;
  `}

  span {
    color: ${Colors.white};
  }

  @media (min-width: 780px) {
    font-size: 20px;
    letter-spacing: 0.75px;
    max-width: 414px;
    margin: 1.5rem auto;

    ${({ small }) => small && css`
    font-size: 14px;
    line-height: 1;
    margin: 0.5rem 0;
  `}
  }
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 1.2;
  letter-spacing: 1px;
  opacity: 0.7;
  margin: 1rem 0;

  a {
    color: ${Colors.green};
  }
`;

export const TextHeading = styled.h3`
  font-size: 22px;
  line-height: 1.5;
  letter-spacing: 1px;
  opacity: 0.7;
  margin: 1rem 0;
`;

export const Clear = styled.span`
  margin: 1rem 0;
`;

export const ColText = styled.div`
  display: flex;
  flex-direction: column;
`;