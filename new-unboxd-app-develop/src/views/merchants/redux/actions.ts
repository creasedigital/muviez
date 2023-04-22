import { Dispatch } from 'redux';
import { CloneOffer } from '../../../typings/appState';
import * as services from '../services';
import {
  SET_OFFER_LOADING,
  SET_OFFER_ERROR,
  SET_OFFERING,
  SET_CLONE_OFFER,
} from './types';

export const getOffering =
  (merchant: string, slug: string) => async (dispatch: Dispatch) => {
    dispatch({ type: SET_OFFER_LOADING });

    const [err, response] = await services.getMerchantOffering(merchant, slug);
    if (err) {
      dispatch({ type: SET_OFFER_ERROR, error: err });
      return err;
    }

    dispatch({
      type: SET_OFFERING,
      payload: response,
    });
  };

export const setCloneOfferId =
  (payload: string) => async (dispatch: Dispatch) => {

    dispatch({
      type: SET_CLONE_OFFER,
      payload: payload,
    });
  };

export const cloneAnOffer =
  (payload: CloneOffer) => async (dispatch: Dispatch) => {
    dispatch({ type: SET_OFFER_LOADING });

    const [err, response] = await services.cloneMerchantOffer(payload);
    if (err) {
      dispatch({ type: SET_OFFER_ERROR, error: err });
      return err;
    }

    dispatch({
      type: SET_CLONE_OFFER,
      payload: response,
    });
  };
