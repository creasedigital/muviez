import { GiftType } from '../../../../../typings/appState';

export const ADD_GIFT = 'ADD_GIFT';
export const DELETE_GIFT = 'DELETE_GIFT';

export type GiftDataType = {
  [key: string]: GiftType;
};

export type DeleteParams = {
  id: string;
  wishlistId: string;
}

export interface GiftState {
  data: GiftDataType;
  error: null;
}

interface AddGift {
  type: typeof ADD_GIFT;
  payload: GiftType;
}

interface DeleteGift {
  type: typeof DELETE_GIFT;
}

export type GiftActionTypes = AddGift | DeleteGift;
