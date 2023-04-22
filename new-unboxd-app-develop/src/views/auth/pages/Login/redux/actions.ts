import {
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  SET_AUTHENTICATED,
  SET_VERIFIED,
  SET_VERIFY_EMAIL,
} from './types';
import { API } from '../../../../../utils/api';
import toast from 'react-hot-toast';
// import { AppDispatch } from '../../../../../store/types';

export const loginUser = (userData: any, history: any) => (dispatch: any) => {
  dispatch({ type: LOADING_USER });
  API.post('/auth/signin', userData)
    .then((res) => {
      const token = `Bearer ${res.data.token}`;
      const isVerified = res.data.payload.isVerified;
      localStorage.setItem('token', token); //setting token to local storage
      API.defaults.headers.common['Authorization'] = token; //setting authorize token to header in axios
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: SET_VERIFIED, isVerified });
      dispatch({ type: SET_AUTHENTICATED });
      const prevURL = localStorage.getItem('prevURL');
      if (prevURL) {
        history.push(prevURL); //redirecting to a previous url after login success
      } else {
        history.push('/dashboard'); //redirecting to index page after login success
      }
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({
        type: SET_UNAUTHENTICATED,
      });
      if (err.response.data) {
        const notVerifiedMessage = err.response.data.message;
        if (
          notVerifiedMessage ===
          'Account is not yet verified, kindly verify your account'
        ) {
          dispatch({
            type: SET_VERIFY_EMAIL,
            payload: userData.email
          })
          history.push('/verify-user');
        }
      }
      toast.error(err.response.data.message);
    });
};

//for fetching authenticated user information
export const getUserData = () => (dispatch: any) => {
  dispatch({ type: LOADING_USER });
  API.get('/user/me')
    .then((res) => {
      localStorage.setItem('username', res.data.payload.username); //setting username to local storage
      dispatch({
        type: SET_USER,
        payload: res.data.payload,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const logoutUser = () => (dispatch: any) => {
  localStorage.removeItem('token');
  localStorage.clear();
  delete API.defaults.headers.common['Authorization'];
  dispatch({
    type: SET_UNAUTHENTICATED,
  });
  window.location.href = '/login'; //redirect to login page
};

//check user authetication status
export const checkAuth = () => (dispatch: any) => {
  const token = localStorage.getItem('token');

  if (token) {
    API.defaults.headers.common['Authorization'] = token; //setting authorize token to header in axios
    dispatch(getUserData());
    dispatch({ type: SET_AUTHENTICATED });
  }
};
