import { GiftType, WishList } from '../../../typings/appState';

export const SET_WISHLIST = 'SET_WISHLIST';
export const SET_GIFT = 'SET_GIFT';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

export interface WishlistState {
  data: { wishlist: WishList | null; gift: GiftType | null };
  error: null;
  isLoading: false;
}

type SetWishlist = {
  type: typeof SET_WISHLIST;
  payload: WishList;
};

type SetGift = {
  type: typeof SET_GIFT;
  payload: GiftType;
};

type SetLoading = {
  type: typeof SET_LOADING;
};

type SetError = {
  type: typeof SET_ERROR;
  error: any;
}

export type WishlistActionTypes = SetWishlist | SetGift | SetLoading | SetError;
