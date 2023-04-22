export interface ModalComponentProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
  unsplash?: boolean;
}

export interface ModalHeaderComponentProps {
  goBack: () => void;
}
