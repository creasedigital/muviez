import React from 'react';
import { connect } from 'react-redux';

import { getCategories } from '../redux/actions';
import WishlistForm from '../components/WishlistForm';

interface ComponentProps {
  getCategories: () => void;
}

const Wishlist: React.FC<ComponentProps> = ({ getCategories }) => {
  return <WishlistForm type="create" getCategories={getCategories} />;
};

const mapStateToProps = (state: any) => ({
  categories: state.wishlist.categories,
});

const mapDispatchToProps = (dispatch: any) => ({
  getCategories: async () => dispatch(getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
