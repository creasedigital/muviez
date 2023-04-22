import { useEffect, useState } from 'react';
import { ComponentProps } from '../Dashboard/types';
import { DashboardLayout } from '../../../../layout';
import { MyUnboxdListHeader, WishList } from '../Dashboard/styles';
import Logo from '../../../../components/Logo';
import WishCard from '../../../../components/WishCard';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalStoreState } from '../../../../store/types';
import { getUserWishList } from '../Dashboard/redux/actions';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Colors } from '../../../../constants';
import { unSetGlobalButtonLink } from '../../redux/actions';
import { WishList as Wish } from '../../../../typings/appState';
import {
  removeArchivedGiftsInWishList,
  removeDeletedGifts,
} from '../../../../utils/helpers';
import { WishlistGrid } from './styles';
import { useCallback } from 'react';
import { deleteWishlist } from '../../services';

const fallbackImage = '/assets/birthday.jpg';

const WishlistPage: React.FC<ComponentProps> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [wishlistData, setWishlistData] = useState<Wish[]>([]);

  const dispatch = useDispatch();

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
    <DashboardLayout hideWalletSection>
      <MyUnboxdListHeader>
        <p>
          {wishlist ? 'my ' : 'create your first '} &nbsp;
          <Logo />
          &nbsp; list
        </p>
      </MyUnboxdListHeader>
      <WishList>
        {isLoading ? (
          <SkeletonTheme color={Colors.navy}>
            <Skeleton height={150} />
          </SkeletonTheme>
        ) : wishlistData ? (
          <WishlistGrid>
            {wishlistData?.map((wish) => (
              <WishCard
                key={wish._id}
                title={wish.title}
                wishCount={wish.gifts.length}
                imgSrc={wish.coverImage || fallbackImage}
                eventUrl={`/wishlist/${wish.slug}`}
              >
                <WishCard.Menu wish={wish} deleteList={deleteList} />
              </WishCard>
            ))}
          </WishlistGrid>
        ) : (
          'You should create your first wishlist'
        )}
      </WishList>
    </DashboardLayout>
  );
};

export default WishlistPage;
