import { useOnClickOutside } from '../../hooks';
import { getWishlistBySlug } from '../../views/beneficiary/pages/Wishlist/redux/actions';
import { updateGift } from '../../views/beneficiary/services';
import { deleteGiftItem } from '../../views/beneficiary/pages/Gift/redux/actions';
import React, {
  ButtonHTMLAttributes,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { GiftType } from '../../typings/appState';
import ProgressBar from '../Progress';
import {
  GiftThumb,
  GiftThumbImage,
  GiftThumbRaised,
  GiftThumbText,
  MenuButton,
  MenuItems,
  MenuOverlay,
  NoLink,
  Raised,
} from './style';

interface ComponentProps {
  gift: GiftType;
  children?: React.ReactNode;
  onClick?: () => void;
  wishlistId: string;
}

interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  active: boolean;
}

interface MenuProps {
  close: () => void;
  gift: GiftType;
  wishlistId: string;
}

interface ContextProps {
  show: boolean;
  toggle: () => void;
  gift: GiftType | null;
  wishlistId: string;
}

type ParamTypes = {
  slug: string;
};

const GiftCardContext = React.createContext<ContextProps>({
  show: false,
  toggle: () => null,
  gift: null,
  wishlistId: '',
});

const GiftMenuButton = ({ onClick, active }: MenuButtonProps) => {
  return (
    <MenuButton onClick={onClick} active={active}>
      <span />
      <span />
      <span />
    </MenuButton>
  );
};

const GiftMenu = ({ close, gift, wishlistId }: MenuProps) => {
  const clickRef = useRef(null);
  useOnClickOutside(clickRef, close);
  const [changed, setChanged] = useState<any>();

  const dispatch = useDispatch();
  const history = useHistory();

  const { slug } = useParams<ParamTypes>();

  const hideItem = async () => {
    const payload = {
      ...gift,
      isArchived: true,
    };

    const result = await updateGift({ data: payload, id: gift._id });
    dispatch(getWishlistBySlug(slug));

    if (result) {
      setChanged(result);
    }
  };

  const deleteItem = async () => {
    const result = await dispatch(deleteGiftItem({ id: gift._id, wishlistId }));

    dispatch(getWishlistBySlug(slug));

    if (result) {
      setChanged(result);
    }
  };

  useEffect(() => {
    if (changed) {
      const nextUrl = `/wishlist/${slug}`;
      history.push(nextUrl);
    }
  }, [history, changed, slug]);

  return (
    <>
      <MenuItems ref={clickRef}>
        <Link to={`/wishlist/${slug}/edit-gift/${gift._id}`}>Edit</Link>
        <NoLink onClick={hideItem}>Hide Item</NoLink>
        <NoLink onClick={deleteItem} className="danger">
          Delete
        </NoLink>
      </MenuItems>
      <MenuOverlay />
    </>
  );
};

const GiftCard = ({ gift, children, onClick, wishlistId }: ComponentProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = useCallback(() => setShowMenu((prev) => !prev), []);

  const value = useMemo(
    () => ({ show: showMenu, toggle: toggleMenu, gift, wishlistId }),
    [showMenu, toggleMenu, gift, wishlistId]
  );

  const percentageRaised = Math.round((gift.actualPaid! / gift.totalCost!) * 100);

  return (
    <GiftCardContext.Provider value={value}>
      <GiftThumb
        onClick={
          gift?.totalCost === gift?.actualPaid && gift?.totalCost !== 0
            ? () => {}
            : onClick
        }
      >
        {children}
        <GiftThumbImage>
          <img src={gift.imageURL} alt={gift.name} />
        </GiftThumbImage>
        <GiftThumbText>
          <p className="gift-name">{gift.name}</p>
          <p className="price">{`₦${gift?.totalCost?.toLocaleString()}`}</p>
          <Raised>
            <p className="raised">{`₦${gift?.actualPaid?.toLocaleString()} raised`}</p>
            <ProgressBar
              percentage={percentageRaised < 100 ? percentageRaised : 100}
              radius={21}
              stroke={1.5}
            />
          </Raised>
        </GiftThumbText>
        {gift?.totalCost === gift?.actualPaid && gift?.totalCost !== 0 ? (
          <GiftThumbRaised>
            <p>Completely Raised</p>
            <ProgressBar
              percentage={percentageRaised < 100 ? percentageRaised : 100}
              radius={21}
              stroke={1.5}
            />
          </GiftThumbRaised>
        ) : (
          ''
        )}
      </GiftThumb>
    </GiftCardContext.Provider>
  );
};

const Menu = () => {
  const { show, toggle, gift, wishlistId } = useContext(GiftCardContext);

  return (
    <>
      <GiftMenuButton onClick={toggle} active={show} />
      {show && <GiftMenu close={toggle} gift={gift!} wishlistId={wishlistId} />}
    </>
  );
};

GiftCard.Menu = Menu;

export default GiftCard;
