import styled from 'styled-components';
import Colors from '../../constants/Colors';
import Effects from '../../constants/Effects';
import Sizes from '../../constants/Sizes';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(${Effects.blur}px);
`;

export const ModalContent = styled.div<{unsplash?: boolean}>`
  width: 100%;
  height: 50vh;
  max-height: 90vh;
  background: #2d3039;
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
  position: absolute;
  left: 0;
  bottom: 0;
  transform: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.5);

  @media (min-width: 768px) {
    width: 65%;
    min-height: 75vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1rem;
    border-radius: 0.8rem;
  }
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  padding: 0 20px;
  background: #2d3039;
`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: ${Colors.white};
    font-size: ${Sizes.small};
    margin-top: 0.35rem;
  }
`;

export const ModalMain = styled.div<{ full?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #2d3039;
  width: 100%;
  min-height: ${(props) => (props.full ? '100vh' : '50vh')};
`;

export const ModalBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
`;

export const ModalCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  padding: 20px;
`;
