import React from 'react';
import { GiftType } from '../../typings/appState';
import { GiftThumbList } from './styles';
import GiftCard from '../../commons/GiftCard';

interface ComponentProps {
  gifts: GiftType[];
  wishlistId: string;
  open?: (id: string) => void;
}
const GiftList: React.FC<ComponentProps> = ({ gifts, wishlistId, open }) => {

  return (
    <GiftThumbList>
      {gifts.map((gift) =>
          <GiftCard key={gift._id} gift={gift} wishlistId={wishlistId} onClick={() => open ? open(gift._id) : null} />
      )}
    </GiftThumbList>
  );
};

export default GiftList;
