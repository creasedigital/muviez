import { ButtonHTMLAttributes } from 'react';

export interface ButtonComponentProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  gradient?: boolean;
  big?: boolean;
  round?: boolean;
  outline?: boolean;
  loading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
}
