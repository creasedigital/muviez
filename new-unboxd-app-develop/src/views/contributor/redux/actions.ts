import { Dispatch } from 'redux';
import * as services from '../services';
import { SET_GIFT, SET_WISHLIST, SET_LOADING, SET_ERROR } from './types';

export const getWishlistBySlug = (username: string, slug: string) => async (
  dispatch: Dispatch
) => {
  dispatch({ type: SET_LOADING });

  const [err, response] = await services.getWishlistBySlug(username, slug);
  if (err) {
    dispatch({ type: SET_ERROR, error: err })
    return err;
  }
  
  dispatch({
    type: SET_WISHLIST,
    payload: response,
  });
};

export const getWishlistById = (id: string) => async (dispatch: Dispatch) => {
  dispatch({ type: SET_LOADING });
  
  const [err, response] = await services.getWishlistById(id);
  if (err) {
    dispatch({ type: SET_ERROR, error: err })
    return err;
  }
  
  dispatch({
    type: SET_WISHLIST,
    payload: response,
  });
};

export const getGift = (id: string) => async (dispatch: Dispatch) => {
  dispatch({ type: SET_LOADING });
  
  const [err, response] = await services.getGift(id);
  if (err) {
    dispatch({ type: SET_ERROR, error: err })
    return err;
  }

  dispatch({
    type: SET_GIFT,
    payload: response,
  });
};
