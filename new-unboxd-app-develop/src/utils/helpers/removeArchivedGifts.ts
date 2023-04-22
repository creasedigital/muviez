import { WishList } from '../../typings/appState';

const removeArchivedGiftsInWishList = (wishlist: WishList[]) => {
  return wishlist.map((list) => (
    list.gifts = list?.gifts?.filter((gift: any) => gift.isArchived !== true)
  )
  );
};

export const removeArchivedGiftsInWishlistObject = (wishlist: any) => {
  return wishlist.gifts = wishlist.gifts.filter((gift: any) => gift.isArchived !== true)
}

export default removeArchivedGiftsInWishList;
