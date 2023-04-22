import { GiftDataType } from './redux/types';

export type ComponentProps = {
  gifts: GiftDataType;
  getGift: (id: string) => void;
};

export type ImageState = {
  modal: boolean;
  file?: File | string;
  url?: string;
};
