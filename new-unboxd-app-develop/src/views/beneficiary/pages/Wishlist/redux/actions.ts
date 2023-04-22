import { Dispatch } from 'redux';
import * as services from '../../../services';
import { SET_CATEGORIES, SET_WISHLIST, SET_WISHLIST_LOADING } from './types';

export const getWishlist = (id: string) => async (dispatch: Dispatch) => {
  dispatch({ type: SET_WISHLIST_LOADING });

  const [err, response] = await services.getWishlist(id);

  if (err) {
    return;
  }

  response.gifts = await response.gifts.filter(
    (res: any) => res.isDeleted !== true
  );

  dispatch({
    type: SET_WISHLIST,
    payload: response,
  });
};

export const getWishlistBySlug =
  (slug: string) => async (dispatch: Dispatch) => {
    dispatch({ type: SET_WISHLIST_LOADING });

    const username = localStorage.getItem('username') as string;
    const [err, response] = await services.getWishlistBySlug(slug, username);

    if (err) {
      return;
    }

    response.gifts = await response.gifts.filter(
      (res: any) => res.isDeleted === false
    );

    if (response.gifts) {
      dispatch({
        type: SET_WISHLIST,
        payload: response,
      });
    }
  };

export const getCategories = () => async (dispatch: Dispatch) => {
  dispatch({ type: SET_WISHLIST_LOADING });
  const [err, response] = await services.getCategories();

  if (err) {
    return err;
  }

  dispatch({ type: SET_CATEGORIES, payload: response });
};

export const updateWishlist = (data: any, type: "create" | "edit", id: string) => async (dispatch: Dispatch) => {
  dispatch({ type: SET_WISHLIST_LOADING });
  const [err, response] = await services.createOrEditWishlist(data, type, id);

  if (err) return err;

  dispatch({
    type: SET_WISHLIST,
    payload: response
  })
}
