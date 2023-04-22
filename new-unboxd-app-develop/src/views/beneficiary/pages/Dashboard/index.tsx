import { useEffect, useCallback, useState } from 'react';
import { ComponentProps } from './types';
import { DashboardLayout } from '../../../../layout';
import { WishList } from './styles';
import WishCard from '../../../../components/WishCard';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalStoreState } from '../../../../store/types';
import { getUserWishList } from './redux/actions';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Colors } from '../../../../constants';
import { unSetGlobalButtonLink } from '../../redux/actions';
import { WishList as Wish } from '../../../../typings/appState';
import {
  removeArchivedGiftsInWishList,
  removeDeletedGifts,
} from '../../../../utils/helpers';
import { NeedText } from '../Wishlist/styles';
import { deleteWishlist } from '../../services';

const fallbackImage = '/assets/birthday.jpg';

const Dashboard: React.FC<ComponentProps> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [wishlistData, setWishlistData] = useState<Wish[]>([]);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setIsLoading(true);
    dispatch(getUserWishList());
    dispatch(unSetGlobalButtonLink());
    setIsLoading(false);
  }, [dispatch]);

  const { data: wishlist } = useSelector(
    (state: GlobalStoreState) => state.dashboard
  );

  useEffect(() => {
    if (wishlist) {
      removeArchivedGiftsInWishList(wishlist);
      removeDeletedGifts(wishlist);
    }
    setWishlistData(wishlist);
  }, [wishlist]);

  const openList = useCallback(
    (slug: string) => {
      history.push(`/wishlist/${slug}`);
    },
    [history]
  );

  const deleteList = useCallback(
    async (id: string) => {
      const [err] = await deleteWishlist(id);

      if (err) {
        return err;
      }

      dispatch(getUserWishList());
    },
    [dispatch]
  );

  return (
    <DashboardLayout>
      <NeedText>
        {wishlist ? 'my ' : 'create your first '}wishlists{' '}
        <span>{wishlistData?.length}</span>
      </NeedText>
      <WishList>
        {isLoading ? (
          <SkeletonTheme color={Colors.navy}>
            <Skeleton height={150} />
          </SkeletonTheme>
        ) : wishlistData ? (
          wishlistData?.map((wish) => (
            <WishCard
              key={wish._id}
              title={wish.title}
              wishCount={wish.gifts.length}
              imgSrc={wish.coverImage || fallbackImage}
              click={() => openList(wish.slug)}
              eventUrl={`/wishlist/${wish.slug}`}
              category={wish.categoryID.name}
            >
              <WishCard.Menu wish={wish} deleteList={deleteList} />
            </WishCard>
          ))
        ) : (
          'You should create your first wishlist'
        )}
      </WishList>
    </DashboardLayout>
  );
};

export default Dashboard;
