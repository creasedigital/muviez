import React, { useRef, useState } from 'react';
import { WishCardWrapper, WishLink } from './styles';
import { ReactComponent as Cake } from '../../assets/img/icons/cake.svg';
import { MenuButton } from '../../commons/Menu';
import { useOnClickOutside } from '../../hooks';
import { MenuItems, MenuOverlay } from '../../commons/Menu/style';
import { NoLink } from '../../commons/GiftCard/style';
import { WishList as Wish } from '../../typings/appState';
import { useHistory } from 'react-router-dom';

interface WishCardProps {
  title: string;
  wishCount: number;
  imgSrc: string;
  click?: () => void;
  children?: React.ReactNode;
  eventUrl: string;
  category?: string;
}

interface MenuProps {
  toggle: () => void;
  editUrl: string;
  deleteList: () => void;
}

interface CardMenuProps {
  wish: Wish;
  deleteList: (id: string) => void;
}

const WishCard = ({
  title,
  wishCount,
  imgSrc,
  children,
  eventUrl,
  category,
}: WishCardProps) => {
  return (
    <WishCardWrapper>
      <WishLink to={eventUrl}>
        <div className="overlay"></div>
        <div className="wish-details">
          <h1>{title}</h1>
          <div className="wish-category">
            <span className="wish-amount d-flex-center">
              {wishCount} wish{wishCount > 1 || wishCount < 1 ? 'es' : ''}
            </span>
            <span className="wish-icon d-flex-center">
              {category === 'Birthday' ? (
                <Cake />
              ) : category === 'Personal' ? (
                '😁'
              ) : category === 'Graduation' ? (
                '🎓'
              ) : category === 'Wedding' ? (
                '💍'
              ) : category === 'Secret Santa' ? (
                '🎅🏻'
              ) : (
                '❤️'
              )}
            </span>
          </div>
        </div>
        <img src={imgSrc} className="img" alt="wish" />
      </WishLink>
      {children}
    </WishCardWrapper>
  );
};

const WishCardMenu = ({ toggle, editUrl, deleteList }: MenuProps) => {
  const clickRef = useRef(null);
  useOnClickOutside(clickRef, toggle);
  const history = useHistory();

  const editEvent = () => {
    history.push(editUrl);
  };

  return (
    <>
      {' '}
      <MenuItems ref={clickRef}>
        <NoLink onClick={editEvent}>Edit event</NoLink>
        <NoLink className="danger" onClick={deleteList}>
          Delete
        </NoLink>
      </MenuItems>
      <MenuOverlay />
    </>
  );
};

export const Menu = ({ wish, deleteList }: CardMenuProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggle = () => setShowMenu((prev) => !prev);

  const deleteWishlist = () => {
    deleteList(wish._id);
    toggle();
  };

  return (
    <>
      <MenuButton onClick={() => setShowMenu(true)} active={showMenu} />
      {showMenu && (
        <WishCardMenu
          toggle={toggle}
          editUrl={`/wishlist/${wish.slug}/edit`}
          deleteList={deleteWishlist}
        />
      )}
    </>
  );
};

WishCard.Menu = Menu;

export default WishCard;
