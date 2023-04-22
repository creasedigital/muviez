import { Dispatch } from 'redux';
import * as services from '../../../services';
import { SET_LOADING, SET_USER_PROFILE } from './types';

export const getUserProfile =
  (username: string) => async (dispatch: Dispatch) => {
    dispatch({ type: SET_LOADING });

    const result = await services.getUser(username);

    dispatch({ type: SET_USER_PROFILE, payload: result });
  };
