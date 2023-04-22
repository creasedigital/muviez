import { Offering } from '../../../../../typings/appState';
import {
  WishlistHeaderEventDetails,
  WishlistHeaderWrapper,
} from '../../../../beneficiary/pages/Wishlist/styles';
// import * as V from '../../../../../utils/veem';
import { Logo, LogoHolder, MerchantHeaderCard } from '../../styles';

interface IMerchantHeader {
  brand: string | null;
  description?: string | null;
  logo: string | null;
  list: Offering | null;
  daysLeft: number | null;
}
const MerchantHeader = ({
  brand,
  description,
  logo,
  list,
  daysLeft,
}: IMerchantHeader) => {
  return (
    <WishlistHeaderWrapper>
      <MerchantHeaderCard>
        <div className="list-header-content">
          <LogoHolder>
            <Logo src={logo!} alt={brand!} />
          </LogoHolder>
          <WishlistHeaderEventDetails>
            <h2>{description}</h2>
            <span className="days">
              {daysLeft! > 0 ? daysLeft : 0} days left
            </span>
          </WishlistHeaderEventDetails>
        </div>
        <img src={list?.coverImage} alt="event" />
      </MerchantHeaderCard>
    </WishlistHeaderWrapper>
  );
};

export default MerchantHeader;
