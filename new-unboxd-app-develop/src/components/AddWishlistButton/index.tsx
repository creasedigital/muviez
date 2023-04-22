import { Link } from "react-router-dom";
import { UnboxdAddButton } from "./styles";

import { ReactComponent as PlusIcon } from '../../assets/img/icons/plus.svg';

interface IButton {
    link: string;
    round?: boolean;
}

const AddWishlistButton = ({ link, round }: IButton) => {
  return (
    <UnboxdAddButton round={round}>
      <div className="under-layer pulsate-fwd"></div>
      <Link to={link} className="d-flex-center">
        <span>{link === '/wishlist/create' ? 'Add Wishlist' : 'Add Wish'}</span>
        <PlusIcon />
      </Link>
    </UnboxdAddButton>
  );
};

export default AddWishlistButton;
