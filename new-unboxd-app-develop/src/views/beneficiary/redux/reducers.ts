import { SET_GLOBAL_APP_BUTTON_LINK, UNSET_GLOBAL_APP_BUTTON_LINK } from "./types";

const initialState = {
  link: '/wishlist/create',
  id: '',
};

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_GLOBAL_APP_BUTTON_LINK:
      return {
        ...state,
        link: action.link,
        id: action.id,
      };
    case UNSET_GLOBAL_APP_BUTTON_LINK:
      return initialState;
    default:
      return state;
  }
}

export default reducer;
