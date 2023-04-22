import { useCallback, useEffect, useState, MouseEvent } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { NumberFormatValues } from 'react-number-format';

import { getGift, getWishlistBySlug } from '../../redux/actions';
import { AppState } from '../../../../typings';
import { differenceInDays } from 'date-fns';
import { NeedText } from '../../../beneficiary/pages/Wishlist/styles';
import { Paystack } from '../../components';
import PriceSuggest from './components/PriceSuggest';
import { ContributorLayout } from '../../../../layout';
import { Form } from '../styles';
import { Button, PageLoader } from '../../../../components';

import { Notify } from '../../../../utils/notify';
import PriceInput from '../../../../components/Input/price';
import * as services from '../../services';
import ThankYouModal from './components/ThankYouModal';
import PrePaymentModal from './components/PrePayment';
import * as V from '../../../../utils/veem';
import { WishList } from '../../../../typings/appState';
import GiftCover from './components/GiftCover';
import { NotFound } from '../../../marketing/pages';
import GiftList from '../../../../components/GiftList/GiftList';

export interface EventData extends WishList {
  giftId: string;
}
interface ParamType {
  id: string;
  username: string;
  slug: string;
}

interface PaymentState {
  amount: string | number;
  email: string | '';
  phone: string | '';
  name: string | '';
  anonymous: boolean;
  showForm: boolean;
}

const Gift = () => {
  const { id, username, slug } = useParams<ParamType>();
  const dispatch = useDispatch();
  const {
    data: { gift, wishlist },
    error,
  } = useSelector((state: AppState) => state.contributor);
  const [paymentData, setPaymentData] = useState<PaymentState>({
    amount: '',
    email: '',
    phone: '',
    name: '',
    anonymous: false,
    showForm: false,
  });

  const eventData = { ...wishlist, giftId: id };
  const [next, setNext] = useState(false);

  const [loading, setLoading] = useState(false);
  const [pageLoad, setPageLoad] = useState(false);

  const selectPrice = (amount: number | '') => {
    setPaymentData({
      ...paymentData,
      amount,
      showForm: true,
    });
  };

  useEffect(() => {
    setPageLoad(true);
    dispatch(getGift(id));

    if (gift) {
      setPageLoad(false);
    }
  }, [dispatch, gift, id]);

  useEffect(() => {
    if (!wishlist) {
      dispatch(getWishlistBySlug(username, slug));
    }
  }, [dispatch, wishlist, username, slug]);

  useEffect(() => {
    if (error) {
      setPageLoad(false);
    }
  }, [error]);

  const daysLeft = wishlist
    ? differenceInDays(new Date(wishlist.date), new Date())
    : 1;
  const percentageRaised = gift
    ? Math.round((gift?.actualPaid! / gift.totalCost!) * 100)
    : 0;

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const openGift = useCallback(
    (giftId: string) => {
      window.location.href = `/@${username}/${slug}/${giftId}`;
      scrollToTop();
    },
    [username, slug]
  );

  const complete = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setNext(true);
  };

  const handleClose = () => setNext(false);

  const [reference, setReference] = useState('');
  const [successModal, setSuccessModal] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (e.target.name === 'anonymous') {
      if (e.target.checked) {
        setPaymentData((prev) => ({ ...prev, anonymous: true }));
      }
    } else {
      setPaymentData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }, []);

  const changePrice = useCallback(({ value }: NumberFormatValues) => {
    if (+value > 500000) {
      return Notify.top('Kindly input an amount less than 500,000');
    }
    setPaymentData((prev) => ({ ...prev, amount: value }));
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { amount, email, anonymous, name, phone } = paymentData;
    const token = localStorage.getItem('token');

    if (!amount) {
      return Notify.top(
        "Seems you didn't enter an amount, Kindly input an amount"
      );
    }

    if (!email || !V.isEmail(email)) {
      return Notify.top('Please enter a valid email address');
    }

    const payload = {
      amount: +amount,
      email,
      listId: eventData?._id!,
      giftId: eventData?.giftId!,
      givingType:
        token && !anonymous ? 'user' : anonymous ? 'anonymous' : 'guest',
      givingTo: eventData?.userID!._id!,
      giver: {
        email,
        name,
        phoneNumber: phone,
      },
    };

    setLoading(true);
    const [err, result] = await services.getPaymentReference(payload!);
    setLoading(false);

    if (err) {
      return;
    }

    console.log(result, 'rez');

    setReference(result.reference);
  };

  const toggleSuccessModal = useCallback(
    () => setSuccessModal((prev) => !prev),
    []
  );

  const paymentSuccess = useCallback(() => {
    setReference('');
    setSuccessModal(true);
  }, []);

  const removeReference = () => setReference('');

  return pageLoad ? (
    <PageLoader />
  ) : gift ? (
    <ContributorLayout>
      <div className="container">
        {wishlist && (
          <GiftCover
            gift={gift}
            daysLeft={daysLeft}
            percentageRaised={percentageRaised}
          />
        )}

        {wishlist && (
          <>
            <Form>
              <PriceSuggest
                price={+(gift.totalCost! - gift.actualPaid!)}
                selectSuggestion={selectPrice}
              />
              {paymentData.showForm && (
                <PriceInput
                  onChange={changePrice}
                  name="amount"
                  value={paymentData.amount}
                  label="Amount to pay"
                />
              )}
              <Button
                className={+paymentData.amount > 0 ? 'null' : 'disabled'}
                onClick={complete}
                disabled={
                  !(
                    +paymentData.amount > 0 &&
                    gift.totalCost === gift.actualPaid &&
                    gift.totalCost !== 0
                  )
                    ? false
                    : true
                }
              >
                {gift.totalCost === gift.actualPaid && gift.totalCost !== 0
                  ? 'Completed'
                  : 'Contribute'}
              </Button>

              {next && (
                <PrePaymentModal
                  close={handleClose}
                  change={handleChange}
                  submit={handleSubmit}
                  data={paymentData}
                />
              )}

              {reference && (
                // <Payment
                //   amount={+paymentData.amount}
                //   email={paymentData.email}
                //   event={eventData?.title!}
                //   reference={reference}
                //   success={paymentSuccess}
                //   close={removeReference}
                // />
                <Paystack
                  email={paymentData.email}
                  amount={+paymentData.amount * 100}
                  reference={reference}
                  event={eventData?.title!}
                  success={() => {
                    paymentSuccess();
                    removeReference();
                  }}
                />
              )}

              {loading && <PageLoader />}

              <ThankYouModal
                show={successModal}
                close={toggleSuccessModal}
                eventData={eventData as EventData}
              />
            </Form>

            <NeedText>
              Choose another item to gift {wishlist.userID.firstname}
            </NeedText>

            <GiftList
              gifts={wishlist?.gifts!}
              wishlistId={wishlist?._id!}
              open={openGift}
            />
          </>
        )}
      </div>
    </ContributorLayout>
  ) : (
    <NotFound />
  );
};

export default Gift;
