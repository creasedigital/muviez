import toast from 'react-hot-toast';
import { CloneOffer } from '../../../typings/appState';
import { API } from '../../../utils/api';
import { handleRequestError } from '../../../utils/api/service';

export const getMerchantOffering = async (username: string, slug: string) => {
  try {
    const response = await API.get(`/offering/${username}/${slug}`);
    return [null, response.data.payload];
  } catch (err: any) {
    const message = err.response.data.message;
    toast.error(message ? message : 'Something happened. Kindly try again');
    return [err.response.data];
  }
};

export const cloneMerchantOffer = async (payload: CloneOffer) => {
    const url = '/packages/clone/giftFromMerchant';
    try {
        const response = await API.post(url, payload);
        toast.success('Item successfully added to wishlist');
        return [null, response.data.payload];
    } catch (error: any) {
        return handleRequestError(error);
    }
}
