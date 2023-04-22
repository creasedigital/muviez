import store from '.';
import {
  Contribution,
  UserBankAccount,
  WishList,
  Withdrawals,
} from '../typings/appState';
import { GlobalButtonState } from '../views/beneficiary/redux/types';

export type AppDispatch = typeof store.dispatch;

export type GlobalStoreState = {
  contributor: {
    event: { data: any; error: string | null };
  };
  userProfile: {
    data: any; isLoading: boolean;
  }
  resources: { data: { categories: Array<any> }; error: string | null };
  user: {
    authenticated: boolean;
    isVerified: boolean;
    credentials: {
      DOB: string | null;
      createdAt: string;
      email: string;
      firstname: string;
      lastname: string;
      username: string;
      phone: string;
      role: string;
      signType: string;
      updatedAt: string;
      _id: string;
      avatar: string;
    };
    errors: string | null;
    loading: boolean;
    verifyEmail: string;
  };
  verifyUser: {
    loading: boolean;
    errors: string | null;
    email: string;
    step: number;
  };
  dashboard: {
    data: WishList[];
    isLoading: boolean;
  };
  wallet: {
    banks: any;
    data: {
      balance: number;
      contributions: Contribution[];
      withdrawals: Withdrawals[];
    };
    error: string | null;
    isLoading: boolean;
    userBanks: UserBankAccount[];
  };
  beneficiary: GlobalButtonState;
  wishlist: {
    data: any | null;
    categories: any;
    error: string | null;
    isLoading: boolean;
  };
  gifts: {
    data: any;
    error: string | null;
  };
  offering: {
    data: any | null;
    error: string | null;
    isLoading: boolean;
  };
};
