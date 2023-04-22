import {
  LOADING_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  SEND_EMAIL,
  CHANGE_PASSWORD,
  SET_STEP,
  UNSET_STEP,
} from './types';

const initialState = {
  loading: false,
  errors: null,
  email: {},
  step: 1,
};

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case SEND_EMAIL:
      return {
        ...state,
        email: action.payload,
        loading: false,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        loading: false,
      };
    case SET_STEP:
      return {
        ...state,
        step: 2,
      };
    case UNSET_STEP:
      return {
        ...state,
        step: 1,
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
    default:
      return state;
  }
}

export default reducer;
