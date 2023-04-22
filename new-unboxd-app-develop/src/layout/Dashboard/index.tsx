import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import AppWrapper from '../../commons/AppWrapper';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';
import Header from './header';
import {
  DashboardContent,
  DashboardWalletSection,
  UserProfile,
  WalletBalance,
} from './styles';
import { LayoutProps } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../typings';
import { GlobalStoreState } from '../../store/types';
import { getUserData } from '../../views/auth/pages/Login/redux/actions';
import { getUserWishList } from '../../views/beneficiary/pages/Dashboard/redux/actions';
import { getUserWallet } from '../../views/beneficiary/pages/Wallet/redux/actions';
import { formatNumber } from '../../utils/helpers';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Colors } from '../../constants';
import { SlugParams } from '../../typings/params';
import { AddWishlistButton } from '../../components';
import { MerchantAd } from '../../components/Ads';

const DashboardLayout: React.FC<LayoutProps> = ({
  children,
  isHome,
  hideWalletSection,
  loading,
}) => {
  const dispatch = useDispatch();
  const { link } = useSelector((state: AppState) => state.beneficiary);
  const { credentials } = useSelector((state: GlobalStoreState) => state.user);
  const { data: wishlist } = useSelector(
    (state: GlobalStoreState) => state.dashboard
  );

  const { data, isLoading } = useSelector(
    (state: GlobalStoreState) => state.wallet
  );

  useEffect(() => {
    dispatch(getUserWallet());
  }, [dispatch]);

  useEffect(() => {
    if (!credentials) {
      dispatch(getUserData());
      dispatch(getUserWishList());
    }
  }, [credentials, dispatch, wishlist]);

  const { pathname } = useLocation();
  const { slug } = useParams<SlugParams>();

  return (
    <>
      <MerchantAd />
      <DashboardHeader></DashboardHeader>
      <Header>{isHome ? <Header.Home /> : <Header.Main />}</Header>
      <AppWrapper>
        <DashboardSidebar />
        <DashboardContent>
          {!hideWalletSection ? (
            <DashboardWalletSection>
              <UserProfile>
                <div className="profile-img">
                  <img src={credentials?.avatar ?? "/assets/avatar.png"} alt="profile" />
                </div>
                <p>Hi, {credentials?.firstname}</p>
              </UserProfile>
              <WalletBalance>
                <span>Wallet Balance</span>
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  <p>NGN {formatNumber(data?.balance || 0)}</p>
                )}
              </WalletBalance>
            </DashboardWalletSection>
          ) : null}
          {loading ? (
            <SkeletonTheme color={Colors.navy}>
              <Skeleton height={200} delay={2} />
              <Skeleton count={5} delay={2} />
            </SkeletonTheme>
          ) : (
            children
          )}
        </DashboardContent>
        {(pathname === '/dashboard' || pathname === '/wishlist' || pathname === `/wishlist/${slug}`) && (
          <AddWishlistButton link={link} />
        )}
      </AppWrapper>
    </>
  );
};

export default DashboardLayout;
