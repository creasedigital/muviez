import { Dispatch } from 'redux';
import { LOADING_UI } from '../../../../auth/pages/Login/redux/types';
import { deleteGift, getGift } from '../../../services';
import { ADD_GIFT, DeleteParams, DELETE_GIFT } from './types';


export const getGiftItem = (id: string) => async (dispatch: Dispatch) => {
  dispatch({ type: LOADING_UI });

  const [err, gift] = await getGift(id);
  if (err) {
    return err;
  }

  dispatch({
    type: ADD_GIFT,
    payload: gift,
  });
};

export const deleteGiftItem = ({id, wishlistId}: DeleteParams) => async (dispatch: Dispatch) => {
  dispatch({ type: LOADING_UI });

  try {
    const response = await deleteGift({id, wishlistId});
    dispatch({ type: DELETE_GIFT })
    return response;
  } catch(err: any) {
    return err
  }

};
