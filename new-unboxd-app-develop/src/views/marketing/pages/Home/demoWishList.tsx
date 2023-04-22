import { ContributorLayout } from '../../../../layout';
import { WishlistHeader } from '../../../beneficiary/pages/Wishlist/components';
import { NeedText } from '../../../beneficiary/pages/Wishlist/styles';
// import ZuliatProfile from "../../../../assets/img/illustrations/zuliat.svg";
import XmasCover from '../../../../assets/img/illustrations/xmasCover.svg';
import Tv from '../../../../assets/img/illustrations/tv.svg';
import LapTop from '../../../../assets/img/illustrations/laptop.svg';
import Iphone from '../../../../assets/img/illustrations/iphone.svg';
import { BTNLink } from '../../../../components/Button/styles';
import { DemoGiftWrapper } from './style';
// import { Avatar } from '../../../../commons';
import GiftList from '../../../../components/GiftList/GiftList';

const DemoWishList = () => {
  const dummyWishList = {
    gifts: [
      {
        quantity: 1,
        paid: 22,
        _id: '1',
        name: 'Tv set',
        cost: 263000,
        totalCost: 263000,
        actualPaid: 130750,
        coverImage: Tv,
        imageURL: Tv,
      },
      {
        quantity: 1,
        paid: 22,
        _id: '2',
        name: 'IPad 6th Gen',
        cost: 3000,
        totalCost: 240000,
        actualPaid: 87550,
        coverImage: LapTop,
        imageURL: LapTop,
      },
      {
        quantity: 1,
        paid: 22,
        _id: '3',
        name: 'Iphone 12',
        cost: 3000,
        totalCost: 453000,
        actualPaid: 90600,
        coverImage: Iphone,
        imageURL: Iphone,
      },
      {
        quantity: 1,
        paid: 22,
        _id: '4',
        name: 'Tv set',
        cost: 263000,
        totalCost: 263000,
        actualPaid: 130750,
        coverImage: Tv,
        imageURL: Tv,
      },
      {
        quantity: 1,
        paid: 22,
        _id: '5',
        name: 'IPad 6th Gen',
        cost: 3000,
        totalCost: 240000,
        actualPaid: 87550,
        coverImage: LapTop,
        imageURL: LapTop,
      },
      {
        quantity: 1,
        paid: 22,
        _id: '6',
        name: 'Iphone 12',
        cost: 3000,
        totalCost: 453000,
        actualPaid: 90600,
        coverImage: Iphone,
        imageURL: Iphone,
      },
    ],
    _id: '1',
    title: 'My christmas wishlist',
    coverImage: XmasCover,
    categoryID: {
      name: '',
      _id: '',
    },
    date: '',
    userID: {
      _id: '',
      firstname: '',
      username: 'dummy',
    },
    slug: '',
  };

  const daysLeft = 31 - (new Date()).getDate();

  return (
    <ContributorLayout>
      <div className="container">
        <WishlistHeader
          username={dummyWishList.userID.username}
          list={dummyWishList}
          daysLeft={daysLeft}
        />
        <NeedText>
          {/* Choose what to gift {' '} <Avatar small src={ZuliatProfile} alt="shay"/> <em> Shay</em> */}
          Choose what to gift&nbsp; <em>Shay</em>
        </NeedText>
        <DemoGiftWrapper>
          <GiftList
            gifts={dummyWishList?.gifts}
            wishlistId={dummyWishList?._id}
          />
          <div className="btnWrapper">
            <BTNLink to="/register">CREATE A WISHLIST - it's free</BTNLink>
          </div>
        </DemoGiftWrapper>
      </div>
    </ContributorLayout>
  );
};
export default DemoWishList;
