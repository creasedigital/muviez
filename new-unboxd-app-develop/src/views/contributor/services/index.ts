import { API } from '../../../utils/api';
import { handleRequestError } from '../../../utils/api/service';

interface RequestData {
  listId: string;
  giftId: string;
  givingType: string;
  givingTo: string;
  amount: number;
  email: string;
  giver: {
    email: string;
    name: string;
    phoneNumber: string;
  };
}

interface VerifyTypes {
  initialRef: string;
  trxId: string;
}

export const getWishlistBySlug = async (username: string, slug: string) => {
  const url = `/list/${username}/${slug}`;
  try {
    const response = await API.get(`${url}`);

    return [null, response.data.payload];
  } catch (err: any) {
    return handleRequestError(err);
  }
};

export const getWishlistById = async (id: string) => {
  const url = '/list';

  try {
    const response = await API.get(`${url}/${id}`);

    return [null, response.data.payload];
  } catch (err: any) {
    return handleRequestError(err);
  }
};

export const getGift = async (id: string) => {
  const url = '/gift';

  try {
    const response = await API.get(`${url}/${id}`);

    return [null, response.data.payload];
  } catch (err: any) {
    return handleRequestError(err);
  }
};

export const getPaymentReference = async (payload: RequestData) => {
  const url = '/giving';

  try {
    const response = await API.post(url, payload);

    return [null, response.data.payload];
  } catch (err: any) {
    return handleRequestError(err);
  }
};

export const verifyPayment = async (payload: VerifyTypes) => {
  const url = '/giving';

  try {
    const response = await API.put(url, payload);

    return [null, response.data.payload];
  } catch (err: any) {
    return handleRequestError(err);
  }
};

export const getUser = async (username: string) => {
  const url = `/user/profile/${username}`;

  try {
    const response = await API.get(url);

    return response.data.payload;
  } catch (err: any) {
    return handleRequestError(err);
  }
};
