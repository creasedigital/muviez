export const LOADING_USER = 'LOADING_USER';
export const SET_ERRORS = 'SET_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const SEND_EMAIL = 'SEND_EMAIL';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const SET_STEP = 'SET_STEP';
export const UNSET_STEP = 'UNSET_STEP';

export interface User {
  email: string;
  password: string;
  otp: string;
}

export interface AuthResetState {
  isLoading: boolean;
  error: string;
  isValid: boolean;
  user: User;
}

