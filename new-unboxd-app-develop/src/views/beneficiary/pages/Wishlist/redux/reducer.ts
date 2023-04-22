import { EventActionTypes, SET_CATEGORIES, SET_WISHLIST, SET_WISHLIST_LOADING, UNSET_WISHLIST, WishlistState } from './types';

const inititalState: WishlistState = {
  data: null,
  categories: null,
  error: null,
  isLoading: false,
};

const reducer = (state = inititalState, action: EventActionTypes) => {
  switch (action.type) {
    case SET_WISHLIST:
      return { 
        ...state, 
        data: action.payload,
        isLoading: false
      };
    case UNSET_WISHLIST:
      return inititalState;
    case SET_WISHLIST_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        isLoading: false,
      }
    default:
      return state;
  }
};

export default reducer;
