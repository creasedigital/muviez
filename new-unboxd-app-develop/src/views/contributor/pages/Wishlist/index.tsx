import { differenceInDays } from 'date-fns';
import localforage from 'localforage';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router';
import { ContributorLayout } from '../../../../layout';
import { AppState } from '../../../../typings';
import { getWishlistBySlug } from '../../redux/actions';
import { NeedText } from '../../../beneficiary/pages/Wishlist/styles';
import WelcomeModal from '../../components/WelcomeModal';
import Skeleton from 'react-loading-skeleton';
import PageLoader from '../../../../components/PageLoader';
// import { configureName } from '../../../../utils/helpers';
import { removeArchivedGiftsInWishlistObject } from '../../../../utils/helpers/removeArchivedGifts';
import { removeDeletedGiftsInObject } from '../../../../utils/helpers/removeDeletedGifts';
import GiftList from '../../../../components/GiftList/GiftList';
import { WishlistHeader } from '../../../beneficiary/pages/Wishlist/components';
import { NotFound } from '../../../marketing/pages';

type ParamTypes = {
  username: string;
  slug: string;
};

const eventVisited = localforage.createInstance({
  name: 'Event Visited',
});

const WishlistPage = () => {
  const { username, slug } = useParams<ParamTypes>();
  const [welcomeModal, setWelcomeModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const {
    data: { wishlist },
    error,
  } = useSelector((state: AppState) => state.contributor);
  const dispatch = useDispatch();

  const toggleWelcomeModal = () => setWelcomeModal((prev) => !prev);

  useEffect(() => {
    setLoading(true);

    (async function () {
      if (!wishlist || wishlist.slug !== slug) {
        dispatch(getWishlistBySlug(username, slug));
      } else {
        /**
         * check if this event has been visited before (saved with localforage),
         * then prevent showing welcome message if it has been visited
         */

        const isEventVisited = await eventVisited.getItem(slug);

        if (!isEventVisited) {
          const delay = setTimeout(toggleWelcomeModal, 1000);
          eventVisited.setItem(slug, true);
          return () => clearTimeout(delay);
        }
      }
    })();

    if (wishlist) {
      removeArchivedGiftsInWishlistObject(wishlist);
      removeDeletedGiftsInObject(wishlist);
    }

    if (wishlist?.gifts) {
      setLoading(false);
    }
  }, [username, slug, dispatch, wishlist]);

  useEffect(() => {
    if (error) {
      setLoading(false);
    }
  }, [error]);

  const daysLeft = wishlist
    ? differenceInDays(new Date(wishlist.date), new Date())
    : 1;

  const openGift = useCallback(
    (giftId: string) => {
      history.push(`/@${username}/${slug}/${giftId}`);
    },
    [history, username, slug]
  );


  return loading ? (
    <PageLoader />
  ) : wishlist?.gifts ? (
    <ContributorLayout>
      <div className="container">
        {wishlist.coverImage ? (
          <WishlistHeader
            username={username}
            daysLeft={daysLeft}
            list={wishlist}
          />
        ) : (
          <Skeleton height={250} />
        )}

        <NeedText>
          Pick an item below
        </NeedText>
        {/* <NeedText>
          Choose what to gift{' '}
          <em>
            {wishlist.categoryID.name === 'Wedding'
              ? 'us for our wedding 🎉'
              : wishlist.userID.firstname}
          </em>
        </NeedText> */}

        <GiftList
          gifts={wishlist?.gifts!}
          wishlistId={wishlist?._id!}
          open={openGift}
        />
      </div>
      <WelcomeModal
        show={welcomeModal}
        close={toggleWelcomeModal}
        list={wishlist}
      />
    </ContributorLayout>
  ) : (
    <NotFound />
  );
};

export default WishlistPage;
