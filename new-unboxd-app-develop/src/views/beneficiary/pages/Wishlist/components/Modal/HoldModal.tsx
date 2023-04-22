import React from 'react';
import { LogoLoader } from '../../../../../../commons';
import { Container } from '../../styles';
import Modal from '../../../../../../components/Modal/ImageModal';

interface ComponentProps {
  show: boolean;
  onClose: () => void;
}

const HoldModal: React.FC<ComponentProps> = ({ show, onClose, children }) => {
  return (
    <Modal show={show} onClose={onClose}>
      <Container>
        {children}
        <LogoLoader />
      </Container>
    </Modal>
  );
};

export default HoldModal;
