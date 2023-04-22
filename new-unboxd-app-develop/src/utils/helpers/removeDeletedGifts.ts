import { WishList } from '../../typings/appState';

const removeDeletedGifts = (wishlist: WishList[]) => {
  return wishlist.map((list) => (
    list.gifts = list.gifts.filter((gift) => gift.isDeleted !== true)
  )
  );
};

export const removeDeletedGiftsInObject = (wishlist: any) => {
  return wishlist.gifts = wishlist.gifts.filter((gift: any) => gift.isDeleted !== true);
}

export default removeDeletedGifts;
