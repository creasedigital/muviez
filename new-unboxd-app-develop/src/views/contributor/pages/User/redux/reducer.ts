import {
  InitialState,
  SET_LOADING,
  ProfileActionTypes,
  SET_USER_PROFILE,
} from './types';

const initialState: InitialState = {
  data: {},
  error: null,
  isLoading: true,
};

const reducer = (state = initialState, action: ProfileActionTypes) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_USER_PROFILE:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;