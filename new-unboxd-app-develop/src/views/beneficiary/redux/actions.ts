export const setGlobalButtonLink = (link: string, id: string) => (dispatch: any) => {
  dispatch({ type: 'SET_GLOBAL_APP_BUTTON_LINK', link, id });
};

export const unSetGlobalButtonLink = () => (dispatch: any) => {
  dispatch({ type: 'UNSET_GLOBAL_APP_BUTTON_LINK' });
};

