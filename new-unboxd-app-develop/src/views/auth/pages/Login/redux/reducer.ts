import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  SET_ERRORS,
  LOADING_UI,
  CLEAR_ERRORS,
  SET_VERIFIED,
  SET_VERIFY_EMAIL,
} from './types';

const initialState = {
  authenticated: false,
  credentials: null,
  loading: false,
  errors: null,
  isVerified: false,
  verifyEmail: '',
};

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
        loading: false,
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_VERIFY_EMAIL:
      return {
        ...state,
        verifyEmail: action.payload
      }
    case SET_VERIFIED:
      return {
        ...state,
        isVerified: true,
        loading: false,
      }
    case SET_USER:
      return {
        ...state,
        authenticated: true,
        loading: false,
        credentials: action.payload,
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true,
      };
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: null,
      };
    case LOADING_UI:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
