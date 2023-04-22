import { WishList } from './appState';

export type WishlistData = {
  title: string;
  categoryID: string;
  date: string;
  coverImage: string | File;
};

export interface WishlistFormProps {
  getCategories: () => void;
  getWishlist?: (id: string) => void;
  list?: WishList | null;
  type: 'create' | 'edit';
}

export interface WishlistParamsType {
  slug: string;
}

export interface SlugParams {
  slug: string;
}

export type DeleteParams = {
  id: string;
  wishlistId: string;
};

export type verifyTransferParams = {
  transferId: string;
  payoutId: string;
};

export type GiftParams = {
  data: any;
  id: string;
};

export type OtpParams = {
  email: string;
};

export type verifyPasswordParams = {
  email: string;
  oldPassword: string;
};
export type changePasswordParams = {
  email: string;
  oldPassword: string;
  newPassword: string;
  otp: string;
};

export type globalButtonParams = {
  link: string;
  id?: string;
};
