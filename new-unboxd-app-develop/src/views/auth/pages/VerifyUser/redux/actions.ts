import {
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_USER,
  SEND_EMAIL,
  SET_STEP,
} from './types';
import { API } from '../../../../../utils/api';
import toast from 'react-hot-toast';

export const sendEmail = (payload: any) => (dispatch: any) => {
  dispatch({ type: LOADING_USER });
  API.post('/auth/sendOtp', payload)
    .then((res) => {
      toast.success(res ? res.data.message : 'OTP sent to your email');
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: SEND_EMAIL, payload: payload.email });
      dispatch({ type: SET_STEP });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      toast.error(err.response.data.message);
    });
  };
  
  export const verifyUser = (userData: any, history: any) => (dispatch: any) => {
    dispatch({ type: LOADING_USER });
    API.post('/auth/verifyOtp', userData)
    .then((res) => {
      toast.success(res ? res.data.message : 'Account Verified');
      dispatch({ type: CLEAR_ERRORS });
      history.push('/dashboard'); //redirecting to index page after login success
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      toast.error(err.response.data.message);
    });
};
