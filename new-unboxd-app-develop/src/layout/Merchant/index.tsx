import React, { useEffect } from 'react';
import AppWrapper from '../../commons/AppWrapper';
import DashboardHeader from '../Dashboard/DashboardHeader';
import Header from '../Dashboard/header';
import { MerchantDashboardContent } from '../Dashboard/styles';
import { LayoutProps } from '../Dashboard/types';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStoreState } from '../../store/types';
import { getUserData } from '../../views/auth/pages/Login/redux/actions';
import { getUserWishList } from '../../views/beneficiary/pages/Dashboard/redux/actions';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Colors } from '../../constants';

const MerchantLayout: React.FC<LayoutProps> = ({
  children,
  isHome,
  loading,
}) => {
  const dispatch = useDispatch();
  const { credentials } = useSelector((state: GlobalStoreState) => state.user);
  const { data: wishlist } = useSelector(
    (state: GlobalStoreState) => state.dashboard
  );

  useEffect(() => {
    if (!credentials) {
      dispatch(getUserData());
      dispatch(getUserWishList());
    }
  }, [credentials, dispatch, wishlist]);

  return (
    <>
      <DashboardHeader></DashboardHeader>
      <Header>{isHome ? <Header.Home /> : <Header.Main />}</Header>
      <AppWrapper>
        <MerchantDashboardContent>
          {loading ? (
            <SkeletonTheme color={Colors.navy}>
              <Skeleton height={200} delay={2} />
              <Skeleton count={5} delay={2} />
            </SkeletonTheme>
          ) : (
            children
          )}
        </MerchantDashboardContent>
      </AppWrapper>
    </>
  );
};

export default MerchantLayout;
