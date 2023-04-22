import Tv from '../../../../assets/img/illustrations/tv.svg';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { GiftList, NoItem } from '../../../../components';
import { MerchantLayout } from '../../../../layout';
import AppState from '../../../../typings/appState';
import {
  DashboardFilm
} from '../../../beneficiary/pages/Dashboard/styles';
import { NeedText } from '../../../beneficiary/pages/Wishlist/styles';
import MerchantHeader from '../components/Header';
import { ItemsWrapper } from '../styles';
import * as V from '../../../../utils/veem';
import { useDispatch, useSelector } from 'react-redux';
import { getOffering } from '../../redux/actions';
import { differenceInDays } from 'date-fns';

type ParamTypes = {
  merchant: string;
  slug: string;
};

const MerchantDashboard = () => {
  const merchantData: any = {
    _id: '',
    name: 'shopbcode',
    logo: '',
    description: '',
    items: [
      {
        quantity: 1,
        paid: 22,
        _id: '1',
        name: 'Tv set',
        cost: 263000,
        totalCost: 263000,
        actualPaid: 130750,
        coverImage: Tv,
        imageURL: Tv,
      },
    ],
    discount: true,
    discountAmount: 50,
    discountDeadline: '',
  };

  const { merchant, slug } = useParams<ParamTypes>();

  const {
    data: { offering },
    isLoading
  } = useSelector((state: AppState) => state.merchant);

  const dispatch = useDispatch();

  const daysLeft = offering ? differenceInDays(new Date(offering.endDate), new Date()) : 1;

  useEffect(() => {
    if (!offering || offering.slug !== slug) {
      dispatch(getOffering(merchant, slug));
    }
  }, [dispatch, offering, slug, merchant]);

  return (
    <MerchantLayout pageTitle="Add Item from Merchant" showBack>
      <MerchantHeader
        brand={offering?.title!}
        logo={offering?.logo!}
        daysLeft={daysLeft}
        list={offering}
      />
      <NeedText>
        Available Items <span>{offering?.merchantItems?.length}</span>
      </NeedText>
      <ItemsWrapper>
        {!isLoading ? (
          V.isEmpty(offering?.merchantItems!) ? (
            <NoItem />
          ) : (
            <GiftList
              items={offering?.merchantItems!}
              wishlistId={merchantData?._id!}
            />
          )
        ) : (
          <GiftList
            items={offering?.merchantItems!}
            wishlistId={merchantData?._id!}
          />
        )}
        {merchantData.items.length < 6 && <DashboardFilm />}
      </ItemsWrapper>
    </MerchantLayout>
  );
};

export default MerchantDashboard;