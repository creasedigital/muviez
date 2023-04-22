import React, { useMemo } from 'react';
import shortid from 'shortid';
import { GiftType, MerchantItem } from '../../typings/appState';
import { GiftThumbList } from './styles';
import { EmptyGiftCard } from '../../views/beneficiary/pages/Wishlist/components';
import GiftCard from '../../commons/GiftCard';
import MerchantOfferCard from '../../commons/GiftCard/MerchantOfferCard';

interface ComponentProps {
  gifts?: GiftType[];
  items?: MerchantItem[];
  wishlistId: string;
}
const GiftList: React.FC<ComponentProps> = ({ gifts, wishlistId, items }) => {
  const giftList = useMemo((): Array<GiftType | null> => {
    const itemsArray = Array(6).fill(null);
    if (gifts) {
      itemsArray.splice(0, gifts?.length!, ...gifts!);
      return itemsArray;
    }
    return itemsArray;
  }, [gifts]);

  const itemList = useMemo((): Array<MerchantItem | null> => {
    const itemsArray = Array(6).fill(null);
    if (items) {
      itemsArray.splice(0, items?.length!, ...items!);
      return itemsArray;
    }
    return itemsArray;
  }, [items]);

  return (
    <GiftThumbList>
      {gifts
        ? giftList.map((gift) =>
            gift ? (
              <GiftCard key={gift._id} gift={gift} wishlistId={wishlistId}>
                <GiftCard.Menu />
              </GiftCard>
            ) : (
              <EmptyGiftCard key={shortid.generate()} />
            )
          )
        : itemList.map((item) =>
            item ? (
              <MerchantOfferCard
                key={item._id}
                item={item}
              />
            ) : (
              <EmptyGiftCard key={shortid.generate()} />
            )
          )}
    </GiftThumbList>
  );
};

export default GiftList;
