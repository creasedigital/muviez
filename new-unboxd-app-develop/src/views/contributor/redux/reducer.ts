import { SET_LOADING } from '../../beneficiary/pages/Wallet/redux/types';
import {
  WishlistActionTypes,
  WishlistState,
  SET_GIFT,
  SET_WISHLIST,
  SET_ERROR,
} from './types';

const initialState: WishlistState = {
  data: { wishlist: null, gift: null },
  error: null,
  isLoading: false,
};

function reducer(state = initialState, action: WishlistActionTypes) {
  switch (action.type) {
    case SET_WISHLIST:
      return {
        ...state,
        data: { ...state.data, wishlist: action.payload },
        isLoading: false,
      };
    case SET_GIFT:
      return {
        ...state,
        data: { ...state.data, gift: action.payload },
        isLoading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}

export default reducer;
