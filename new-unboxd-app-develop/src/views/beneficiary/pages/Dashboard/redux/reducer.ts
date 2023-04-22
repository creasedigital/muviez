import { SET_WISH_LIST, GET_WISH_LIST, IAction } from './types';

const initialState = {
  data: [],
  isLoading: false,
};

function reducer(state = initialState, { type, payload }: IAction) {
  switch (type) {
    case GET_WISH_LIST:
      return { ...state, isLoading: true };
    case SET_WISH_LIST:
      return {
        ...state,
        isLoading: false,
        data: payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default reducer;
