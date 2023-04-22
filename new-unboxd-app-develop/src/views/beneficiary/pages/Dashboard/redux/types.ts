import { WishList } from '../../../../../typings/appState';

export const SET_WISH_LIST = 'SET_WISH_LIST';
export const GET_WISH_LIST = 'GET_WISH_LIST';

export interface IAction {
  payload: WishList[] | any;
  type: string;
  isLoading: boolean;
}