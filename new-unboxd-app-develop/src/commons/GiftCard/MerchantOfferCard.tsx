import { useDispatch, useSelector } from 'react-redux';
import { CloneOffer, MerchantItem } from '../../typings/appState';
import { GiftThumb, GiftThumbImage, GiftThumbText } from './style';
import { Button } from '../../components';
import { GlobalStoreState } from '../../store/types';
import { useEffect, useState } from 'react';
import { SelectWishlistModal } from '..';
import { getUserWishList } from '../../views/beneficiary/pages/Dashboard/redux/actions';
import { useHistory } from 'react-router-dom';

interface ComponentProps {
  children?: React.ReactNode;
  item: MerchantItem;
}

const MerchantOfferCard = ({ item, children }: ComponentProps) => {
  const history = useHistory();
  const { credentials } = useSelector((state: GlobalStoreState) => state.user);
  const [added, setAdded] = useState(false);
  const [wishlistModal, setWishlistModal] = useState(false);
  const [data, setData] = useState<CloneOffer>({
    sourceMerchantItemID: '',
    destListID: '',
  });
  const dispatch = useDispatch();
  const toggleWishlistModal = () => setWishlistModal((prev) => !prev);
  const changeSetAdded = () => setAdded((prev) => !prev);

  useEffect(() => {
      dispatch(getUserWishList());
  }, [dispatch])

  const { data: wishlist } = useSelector(
    (state: GlobalStoreState) => state.dashboard
  );

  const chooseItem = () => {
    setData({ ...data, sourceMerchantItemID: item._id });
    setWishlistModal(true);
  };

  const userLogin = () => {
    localStorage.setItem('prevURL', history.location.pathname);
    window.location.href = '/login';
  }

  return (
    <>
      <GiftThumb>
        {children}
        <GiftThumbImage>
          <img src={item.imageURL} alt={item.name} />
        </GiftThumbImage>
        <GiftThumbText>
          <p className="gift-name">{item.name}</p>
          <div className="merch-discount-box">
            <p className="price">
              <s>{`₦${item.originalPrice.toLocaleString()}`}</s>
            </p>
            <p className="price">{`₦${item.discountedPrice.toLocaleString()}`}</p>
          </div>
          <Button onClick={credentials ? added ? () => {} : chooseItem : userLogin} disabled={added}>
            {added ? 'Added' : 'Add this to wishlist'}
          </Button>
        </GiftThumbText>
      </GiftThumb>
      <SelectWishlistModal
        show={wishlistModal}
        close={toggleWishlistModal}
        list={wishlist}
        added={changeSetAdded}
        data={data}
      />
    </>
  );
};

export default MerchantOfferCard;
