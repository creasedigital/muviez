import styled, { css } from 'styled-components';
import { Colors } from '../../../constants';
import Effects from '../../../constants/Effects';

export const ModalWrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(${Effects.blur}px);
  z-index: 15;
`;

export const ModalContent = styled.div<{unsplash?: boolean}>`
  width: 100%;
  min-height: 60vh;
  max-height: 90vh;
  background: ${Colors.darkNavy};
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
  position: absolute;
  left: 0;
  bottom: 0;
  transform: none;
  display: flex;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.5);
  overflow: hidden;

  @media (min-width: 768px) {
    width: 50%;
    max-height: 30rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0.8rem;
  }

  ${({ unsplash }) => unsplash && css`
    overflow-y: auto;
    min-height: 90vh;
    
    .container {
      display: flex;
      overflow-y: auto;
      height: 100%;
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 5rem;
      background: linear-gradient(to top, rgba(22, 24, 29, 1), rgba(34, 36, 44, 0));
      z-index: 3;
    }
    
    @media (min-width: 768px) {
      width: 80%;
      min-height: 75vh;
      align-items: flex-start;
      padding: 1.5rem;
    }
  `}
`;
