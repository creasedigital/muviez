import { combineReducers } from 'redux';

import userReducer from '../views/auth/pages/Login/redux/reducer';
import verifyUserReducer from '../views/auth/pages/VerifyUser/redux/reducer';
import dashboardReducer from '../views/beneficiary/pages/Dashboard/redux/reducer';
import walletReducer from '../views/beneficiary/pages/Wallet/redux/reducer';
import beneficiaryReducer from '../views/beneficiary/redux/reducers';
import wishlistReducer from '../views/beneficiary/pages/Wishlist/redux/reducer';
import giftReducer from '../views/beneficiary/pages/Gift/redux/reducer';
import contributorReducer from '../views/contributor/redux/reducer';
import userProfileReducer from '../views/contributor/pages/User/redux/reducer';
import merchantReducer from '../views/merchants/redux/reducer';

const rootReducer = combineReducers({
    user: userReducer,
    verifyUser: verifyUserReducer,
    dashboard: dashboardReducer,
    wallet: walletReducer,
    beneficiary: beneficiaryReducer,
    wishlist: wishlistReducer,
    gifts: giftReducer,
    contributor: contributorReducer,
    userProfile: userProfileReducer,
    merchant: merchantReducer
});

export default rootReducer;