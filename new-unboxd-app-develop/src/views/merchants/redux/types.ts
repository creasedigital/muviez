import {
  Offering,
} from '../../../typings/appState';

export const SET_OFFERING = 'SET_OFFERING';
export const SET_CLONE_OFFER = 'SET_CLONE_OFFER';
export const SET_OFFER_LOADING = 'SET_OFFER_LOADING';
export const SET_OFFER_ERROR = 'SET_OFFER_ERROR';

export interface OfferingState {
  data: { offering: Offering | null; offer: string | null };
  error: null;
  isLoading: false;
}

type SetOffering = {
  type: typeof SET_OFFERING;
  payload: Offering;
};

type SetCloneOffer = {
  type: typeof SET_CLONE_OFFER;
  payload: string;
};

type SetOfferLoading = {
  type: typeof SET_OFFER_LOADING;
};

type SetOfferError = {
  type: typeof SET_OFFER_ERROR;
  error: any;
};

export type OfferingActionTypes = SetOffering | SetCloneOffer | SetOfferLoading | SetOfferError;
