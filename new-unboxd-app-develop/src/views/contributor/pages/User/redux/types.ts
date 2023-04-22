export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const SET_LOADING = 'SET_LOADING';

interface SetUserProfile {
  type: typeof SET_USER_PROFILE;
  payload: {};
}

interface SetLoading {
  type: typeof SET_LOADING;
}

export interface InitialState {
  data: {};
  error: null;
  isLoading: boolean;
}

export type ProfileActionTypes = SetUserProfile | SetLoading;
