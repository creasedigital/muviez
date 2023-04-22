import styled, { css } from 'styled-components';
import { Colors } from '../../constants';

export const ButtonStyle = styled.button<{ active: boolean }>`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0.5rem 0.75rem;
  border-radius: 30px;
  display: flex;
  z-index: 10;
  background-color: transparent;

  span {
    padding: 2.5px;
    background-color: ${Colors.white};
    border-radius: 50%;
    margin: 0 2px;
  }

  ${({ active }) =>
    active &&
    css`
      z-index: 5;
    `}
`;

export const MenuOverlay = styled.div`
  &::before {
    content: ' ';
    background: rgba(34, 36, 44, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    height: 100%;
    width: 100%;
  }
`;

export const MenuItems = styled.div`
  position: absolute;
  top: 40px;
  right: 10px;
  background: ${Colors.white};
  z-index: 11;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  color: ${Colors.black};
  overflow: hidden;

  a,
  button {
    padding: 0.7rem 1rem;
    transition: 0.5s ease all;

    &:not(:last-child) {
      border-bottom: 1px solid ${Colors.grey};
    }
    &:hover {
      background: ${Colors.lightGrey};
    }
  }
`;
