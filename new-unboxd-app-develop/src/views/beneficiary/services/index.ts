import toast from 'react-hot-toast';
import {
  changePasswordParams,
  DeleteParams,
  GiftParams,
  OtpParams,
  verifyPasswordParams,
} from '../../../typings/params';
import { API } from '../../../utils/api';
import { handleRequestError } from '../../../utils/api/service';

export const sendOtp = async (data: OtpParams) => {
  try {
    const response = await API.post('/auth/sendOtp', data);
    return response.data;
  } catch (err: any) {
    return handleRequestError(err);
  }
};

export const getWallet = async () => {
  try {
    const response = await API.get('/wallet/user');
    return [null, response.data.payload];
  } catch (err: any) {
    return handleRequestError(err);
  }
};

export const getBanks = async () => {
  try {
    const response = await API.get('/bank/name');
    return [null, response.data.payload.banks];
  } catch (err: any) {
    return handleRequestError(err);
  }
};

export const getUserBanks = async () => {
  try {
    const response = await API.get('/bank/account?limit=10');
    return [null, response.data.payload];
  } catch (err: any) {
    return handleRequestError(err);
  }
};

export const getAccountName = async (payload: any) => {
  try {
    const response = await API.post('/bank/account/verify', payload);
    return response.data.payload;
  } catch (err: any) {
    return handleRequestError(err);
  }
}

export const createBankAccount = async (payload: any) => {
  try {
    const response = await API.post('/bank/account', payload);
    return response.data.message;
  } catch (err: any) {
    return handleRequestError(err);
  }
}

export const createOrEditWishlist = async (
  data: any,
  type: 'create' | 'edit',
  id?: string
) => {
  const method = type === 'create' ? 'post' : 'put';
  const url = type === 'edit' && id ? `/list/${id}` : '/list';

  try {
    const response = await API[method](url, data);
    toast.success(response.data.message);
    return [null, response.data.payload];
  } catch (err: any) {
    const message = err.response.data.message;
    toast.error(message ? message : 'Something happened. Kindly try again');
    return [err.response.data];
  }
};

export const deleteWishlist = async (id: string) => {
  try {
    const response = await API.delete(`/list/${id}`);
    toast.success('Wishlist successfully deleted');
    return [null, response.data.message];
  } catch (err: any) {
    const message = err.response.data.message;
    toast.error(message ? message : 'Something happened. Kindly try again');
    return [err.response.data];
  }
};

export const getWishlist = async (id: string) => {
  try {
    const response = await API.get(`/list/${id}`);
    return [null, response.data.payload];
  } catch (err: any) {
    const message = err.response.data.message;
    toast.error(message ? message : 'Something happened. Kindly try again');
    return [err.response.data];
  }
};

export const getWishlistBySlug = async (slug: string, username: string) => {
  try {
    const response = await API.get(`/list/${username}/${slug}`);
    return [null, response.data.payload];
  } catch (err: any) {
    const message = err.response.data.message;
    toast.error(message ? message : 'Something happened. Kindly try again');
    return [err.response.data];
  }
};

export const addGift = async ({ data, id }: GiftParams) => {
  try {
    const response = await API.post(`/gift/${id}`, data);
    toast.success(response.data.message);
    return [null, response.data.payload];
  } catch (err: any) {
    const message = err.response.data.message;
    toast.error(message ? message : 'Something happened. Kindly try again');
    return [err.response.data];
  }
};

export const getGift = async (id: string) => {
  try {
    const response = await API.get(`/gift/${id}`);
    return [null, response.data.payload];
  } catch (err: any) {
    const message = err.response.data.message;
    toast.error(message ? message : 'Something happened. Kindly try again');
    return [err.response.data];
  }
};

export const updateGift = async ({ id, data }: GiftParams) => {
  try {
    const response = await API.put(`/gift/${id}`, data);
    toast.success(response.data.message);
    return [null, response.data.payload];
  } catch (err: any) {
    const message = err.response.data.message;
    toast.error(message ? message : 'Something happened. Kindly try again');
    return [err.response.data];
  }
};

export const deleteGift = async ({ id, wishlistId }: DeleteParams) => {
  try {
    const response = await API.delete(`/gift/${wishlistId}/${id}`);
    toast.success('Gift successfully deleted');
    return response.data.message;
  } catch (err: any) {
    const message = err.response.data.message;
    toast.error(message ? message : 'Something happened. Kindly try again');
    return [err.response.data];
  }
};

export const payout = async (payload: any) => {
  try {
    const response = await API.post('/payout', payload);
    return response.data.payload;
  } catch (err: any) {
    return handleRequestError(err);
  }
};

export const verifyPassword = async (payload: verifyPasswordParams) => {
  try {
    const response = await API.post('/auth/verifyPassword', payload);
    toast.success('OTP sent to your email address');
    return response;
  } catch (err: any) {
    return handleRequestError(err);
  }
};

export const changePassword = async (payload: changePasswordParams) => {
  try {
    const response = await API.put('/auth/changePassword', payload);
    toast.success(
      response.data.payload.message || 'Password Change successful'
    );
    return response;
  } catch (err: any) {
    return handleRequestError(err);
  }
};

export const getCategories = async () => {
  try {
    const result = await API.get('/category');
    return [null, result.data.payload];
  } catch (err: any) {
    const message = err.response.data.message;
    toast.error(message ? message : 'Something happened. Kindly try again');
    return [err.response.data];
  }
};
