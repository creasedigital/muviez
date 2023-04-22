import { WishList } from '../../../../../../typings/appState';
import {
  CopyLink,
  WishlistHeaderCard,
  WishlistHeaderEventDetails,
  WishlistHeaderWrapper,
} from '../../styles';
import * as V from '../../../../../../utils/veem';
import { Menu as WishListMenu } from '../../../../../../components/WishCard';

interface IWishlistHeader {
  toggleShareModal?: () => void;
  username: string | null;
  list: WishList | null;
  daysLeft: number | null;
  deleteList?: (id: string) => void;
}
const WishlistHeader = ({
  toggleShareModal,
  username,
  list,
  daysLeft,
  deleteList,
}: IWishlistHeader) => {
  return (
    <WishlistHeaderWrapper dashboard={V.isThere(toggleShareModal)}>
      <WishlistHeaderCard>
        <div className="list-header-content">
          {toggleShareModal && (
            <CopyLink onClick={toggleShareModal}>
              <p>
                https://unboxd.gifts/@{username}/{list?.slug}
              </p>
              <span className="copy">share</span>
            </CopyLink>
          )}
          <WishlistHeaderEventDetails>
            <h2>{list?.title}</h2>
            <span className="days">
              {daysLeft! > 0 ? daysLeft : 0} days left
            </span>
          </WishlistHeaderEventDetails>
        </div>
        <img src={list?.coverImage} alt="event" />
      </WishlistHeaderCard>
      {toggleShareModal && (
        <CopyLink mobile onClick={toggleShareModal}>
          <p>
            https://unboxd.gifts/@{username}/{list?.slug}
          </p>
          <span className="copy">share</span>
        </CopyLink>
      )}
      {list && deleteList && (
        <WishListMenu wish={list} deleteList={deleteList} />
      )}
    </WishlistHeaderWrapper>
  );
};

export default WishlistHeader;
