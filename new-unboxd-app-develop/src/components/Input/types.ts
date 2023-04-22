import { InputHTMLAttributes } from 'react';

export interface InputComponentProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  checkLabel?: string;
  error?: any;
  value?: string | number;
  type?: string;
  name?: string;
  register?: any;
  placeholder?: string;
  onChange?: (arg: any) => void;
  onFocus?: (arg: any) => void;
  showCallToAction?: boolean;
  isPassword?: boolean;
  isEdit?: boolean;
  isPhone?: boolean;
  ctaClick?: () => void;
}
