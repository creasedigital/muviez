import React, { useRef } from 'react';
import { useOnClickOutside } from '../../hooks';
import {
  Head,
  HeaderTitle,
  ModalBottom,
  ModalCenter,
  ModalMain,
  ModalWrapper,
  ModalContent,
} from './styles';
import { ModalComponentProps, ModalHeaderComponentProps } from './types';

const Modal = ({ show, children, onClose }: ModalComponentProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, onClose, show);
  return show ? (
    <ModalWrapper>
      <ModalContent ref={ref}>{children}</ModalContent>
    </ModalWrapper>
  ) : null;
};

const Header: React.FC<ModalHeaderComponentProps> = ({ goBack, children }) => {
  return (
    <Head>
      <a href="#0" onClick={goBack}>
        ←
      </a>
      <HeaderTitle>{children}</HeaderTitle>
      <div></div>
    </Head>
  );
};

const Main: React.FC = ({ children }) => {
  return <ModalMain>{children}</ModalMain>;
};

const Bottom: React.FC = ({ children }) => {
  return <ModalBottom>{children}</ModalBottom>;
};

const Centered: React.FC = ({ children }) => {
  return <ModalCenter>{children}</ModalCenter>;
};

const Full: React.FC = ({ children }) => {
  return <ModalMain full>{children}</ModalMain>;
};

Modal.Header = Header;
Modal.Main = Main;
Modal.Centered = Centered;
Modal.Full = Full;
Modal.Bottom = Bottom;
export default Modal;
