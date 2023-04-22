export interface ModalComponentProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface ModalHeaderComponentProps {
  goBack: () => void;
}
