import {
  OfferingActionTypes,
  OfferingState,
  SET_CLONE_OFFER,
  SET_OFFER_ERROR,
  SET_OFFER_LOADING,
  SET_OFFERING,
} from './types';

const initialState: OfferingState = {
  data: { offering: null, offer: null },
  error: null,
  isLoading: false,
};

function reducer(state = initialState, action: OfferingActionTypes) {
  switch (action.type) {
    case SET_OFFERING:
      return {
        ...state,
        data: { ...state.data, offering: action.payload },
        isLoading: false,
      };
    case SET_CLONE_OFFER:
      return {
        ...state,
        data: { ...state.data, offer: action.payload },
        isLoading: false,
      };
    case SET_OFFER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SET_OFFER_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}

export default reducer;
