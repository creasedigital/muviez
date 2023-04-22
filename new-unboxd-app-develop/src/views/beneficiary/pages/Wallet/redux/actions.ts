import toast from 'react-hot-toast';
import { Dispatch } from 'redux';
import * as services from '../../../services';
import { SET_BANKS, SET_LOADING, SET_USER_BANKS, SET_WALLET } from './types';

export const getUserWallet = () => async (dispatch: Dispatch) => {
  dispatch({ type: SET_LOADING });

  const [err, result] = await services.getWallet();

  if (err) {
    return err;
  }

  dispatch({ type: SET_WALLET, payload: result });
};

export const getBanks = () => async (dispatch: Dispatch) => {
  dispatch({ type: SET_LOADING });

  const [err, result] = await services.getBanks();

  if (err) {
    return err;
  }

  dispatch({ type: SET_BANKS, payload: result });
};

export const getUserBanks = () => async (dispatch: Dispatch) => {
  dispatch({ type: SET_LOADING });

  const [err, result] = await services.getUserBanks();

  if (err) {
    toast.error(err);
  }

  dispatch({ type: SET_USER_BANKS, payload: result });
};
