import AppState, { WishList } from '../../../../../typings/appState';
import { connect } from 'react-redux';

import { getCategories, getWishlistBySlug } from '../redux/actions';
import WishlistForm from '../components/WishlistForm';

interface ComponentProps {
  list: WishList | null;
  getWishlist: (id: string) => void;
  getCategories: () => void;
}

const EditEvent = ({ list, getWishlist, getCategories }: ComponentProps) => {
  return (
    <WishlistForm
      type="edit"
      getCategories={getCategories}
      getWishlist={getWishlist}
      list={list}
    />
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    list: state.wishlist.data,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getWishlist: (slug: string) => dispatch(getWishlistBySlug(slug)),
  getCategories: () => dispatch(getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);
