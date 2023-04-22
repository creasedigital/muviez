import { GiftState, GiftActionTypes, ADD_GIFT, DELETE_GIFT } from './types';

const initialState: GiftState = {
  data: {},
  error: null,
};

function reducer(state = initialState, action: GiftActionTypes) {
  switch (action.type) {
    case ADD_GIFT:
      return {
        ...state,
        data: { ...state.data, [action.payload._id]: action.payload },
      };
    case DELETE_GIFT:
      return {
        ...state,
      }
    default:
      return state;
  }
}

export default reducer;
