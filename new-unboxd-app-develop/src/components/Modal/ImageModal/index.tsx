import { useRef } from 'react';
import { useOnClickOutside } from '../../../hooks';
import { ModalWrapper, ModalContent } from './styles';
import { ModalComponentProps } from './types';

const ImageModal = ({
  show,
  children,
  onClose,
  unsplash,
}: ModalComponentProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, onClose);
  return show ? (
    <ModalWrapper>
      <ModalContent ref={ref} unsplash={unsplash}>
        {children}
      </ModalContent>
    </ModalWrapper>
  ) : null;
};

export default ImageModal;
