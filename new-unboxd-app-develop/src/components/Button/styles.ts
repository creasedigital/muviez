import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';
import Sizes from '../../constants/Sizes';

export const button = css<{
  small?: boolean;
  disabled?: boolean;
  roundRadius?: boolean;
  valentine?: boolean;
  outline?: boolean;
  alt?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.green};
  color: ${Colors.white};
  padding: 1.2rem 1rem;
  margin: 1.5rem 0;
  width: 100%;
  border-radius: 20px;
  font-weight: ${Sizes.lightWeight};
  font-size: calc(${Sizes.fourteen}px + 1px);
  height: 64px;
  cursor: pointer;

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ small }) =>
    small &&
    css`
      padding: 0.5rem 1.5rem;
      margin: 0.75rem 0;
      height: 50px;
      border-radius: 15px;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}

  ${({ roundRadius }) =>
    roundRadius &&
    css`
      border-radius: 60px;
    `}

  ${({ valentine }) =>
    valentine &&
    css`
      background-color: ${Colors.valentine};
    `}

  ${({ outline }) =>
    outline &&
    css`
      background: rgba(0, 0, 0, 0.3);
      border: 1px solid ${Colors.white};
    `}
        
  ${({ alt }) =>
    alt &&
    css`
      background-color: ${Colors.white};
      color: ${Colors.black};
      font-weight: 500;
    `}
`;

export const BTN = styled.button`
  ${button}
  transition: all .2s ease;
  :hover {
    transform: translateY(-4px);
    background-color: ${Colors.darkGreen};
  }
  :active {
    transform: translateY(0);
  }
`;

export const BTNLink = styled(Link)`
  ${button}
`;

export const Spinner = styled.span`
  max-width: 20px;
`;

export const PlainButton = styled.button<{ underlined?: boolean }>`
  background: transparent;
  border: none;
  padding: 1rem 0;
  white-space: nowrap;
  color: ${Colors.white};

  ${({ underlined }) =>
    underlined &&
    css`
      text-decoration: underline;
    `}
`;
