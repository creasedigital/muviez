import { GiftDataType } from '../redux/types';

export type ComponentProps = {
  gifts: GiftDataType;
  getGift: (id: string) => void;
};

export interface ParamTypes {
  id: string;
  wishlistId: string;
}

export interface ImageType {
  file?: File | string;
  url?: string;
}
