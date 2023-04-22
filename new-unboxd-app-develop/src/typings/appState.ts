/**
 * FOR GLOBAL APP TYPE DEFINITIONS
 */

import { WishlistState } from '../views/beneficiary/pages/Wishlist/redux/types';
import { GiftState } from '../views/beneficiary/pages/Gift/redux/types';
import { GlobalButtonState } from '../views/beneficiary/redux/types';
import { WishlistState as CWishlistState } from '../views/contributor/redux/types';
import { OfferingState } from '../views/merchants/redux/types';

interface AppState {
  user: any;
  wishlist: WishlistState;
  gifts: GiftState;
  merchant: OfferingState;
  contributor: CWishlistState;
  beneficiary: GlobalButtonState;
}

export interface Category {
  name: string;
  _id: string;
}

export interface GiftType {
  quantity?: number;
  paid?: number;
  _id: string;
  name: string;
  cost?: number;
  totalCost?: number;
  actualPaid?: number;
  imageURL?: string;
  url?: string;
  coverImage?: string;
  isArchived?: boolean;
  isDeleted?: boolean;
}

export interface WishList {
  gifts: GiftType[];
  _id: string;
  title: string;
  coverImage: string;
  categoryID: Category;
  date: string;
  userID: {
    _id: string;
    firstname: string;
    username: string;
  };
  description?: string;
  slug: string;
  isArchived?: boolean;
  isDeleted?: boolean;
  welcomeNote?: string;
  thankYouNote?: string;
}

export interface Offering {
  merchantItems: MerchantItem[],
  merchantBundles: any[],
  beginDate: string,
  isDeleted: boolean,
  _id: string,
  title: string,
  description: string,
  punchline: string,
  merchantID: string,
  coverImage: string,
  endDate: string,
  slug: string,
  logo?: string,
}
export interface MerchantItem {
  couponsUsed: number,
  isDeleted: boolean,
  _id: string,
  name: string,
  originalPrice: number,
  discountedPrice: number,
  imageURL: string,
  productURL: string,
  offeringID: string,
  couponExpiryDate: string,
  couponRequests: any[],
}

export interface CloneOffer {
  userID?: string,
  sourceMerchantItemID: string,
  destListID: string,
  giftDTO?: GiftType,
}

export interface Contribution {
  Giver: Giver;
  GiftName: string;
  amount: number;
  date: string;
  GivingType: string;
}

export interface Withdrawals {
  bankName: string;
  accountNumber: string;
  amount: string;
  date: string;
  status: string;
}

export interface Giver {
  email: string;
  name: string;
  phoneNumber: string;
}

export interface UserBankAccount {
  _id: string;
  userId: string;
  bankCode: string;
  bankName: string;
  accountNumber: string;
  accountName: string;
}

export default AppState;
