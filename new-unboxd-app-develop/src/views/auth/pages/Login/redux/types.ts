//user reducer types
export const SET_AUTHENTICATED = 'SET_AUTHENTICATED';
export const SET_UNAUTHENTICATED = 'SET_UNAUTHENTICATED';
export const SET_USER = 'SET_USER';
export const LOADING_USER = 'LOADING_USER';
export const SET_VERIFIED = 'SET_VERIFIED';
export const SET_UNVERIFIED = 'SET_UNVERIFIED';
export const SET_VERIFY_EMAIL = "SET_VERIFY_EMAIL";
//UI reducer types
export const SET_ERRORS = 'SET_ERRORS';
export const LOADING_UI = 'LOADING_UI';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export interface User {
  email: string;
  password: string;
}

export interface LoginState {
  isLoading: boolean;
  error: string;
  isValid: boolean;
  user: User;
}

