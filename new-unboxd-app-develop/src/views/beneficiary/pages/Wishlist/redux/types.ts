import { Category, WishList } from '../../../../../typings/appState';

//event reducer types
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_WISHLIST = 'SET_WISHLIST';
export const SET_WALLET = 'SET_WALLET';
export const SET_WISHLIST_LOADING = "SET_WISHLIST_LOADING";
export const UNSET_WISHLIST = "UNSET_WISHLIST";

interface SetWishlist {
  type: typeof SET_WISHLIST;
  payload: any;
}

interface UnSetWishlist {
  type: typeof UNSET_WISHLIST;
}

interface SetWishlistLoading {
  type: typeof SET_WISHLIST_LOADING;
}

interface SetCategories {
  type: typeof SET_CATEGORIES;
  payload: Category[];
}

export interface WishlistState {
  data: WishList | null;
  categories: any;
  error: null;
  isLoading: boolean;
}

export type EventActionTypes = SetWishlist | UnSetWishlist | SetWishlistLoading | SetCategories;
