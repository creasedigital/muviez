import { Progress as ProgressBar } from '../../../../../commons';
import { GiftType } from '../../../../../typings/appState';
import { CoverImage, EventCardContent } from '../../../../beneficiary/pages/Wishlist/styles';
import { GiftCountdown, GiftCoverTime, GiftDescription, GiftProgressPrice } from '../styles';

interface IGiftCover {
  gift: GiftType;
  daysLeft: number;
  percentageRaised: number;
}

const GiftCover = ({ gift, daysLeft, percentageRaised }: IGiftCover) => {
  return (
    <GiftCoverTime>
      <CoverImage src={gift.imageURL} alt={gift.name} />

      <GiftCountdown>
        {daysLeft > 0 ? daysLeft : 0} {daysLeft > 1 ? 'days ' : 'day'} left
      </GiftCountdown>
      <GiftDescription>
        <EventCardContent>
          <h3>{gift.name}</h3>
          <GiftProgressPrice>
            <ProgressBar
              percentage={percentageRaised}
              radius={21}
              stroke={1.5}
            />
            <div className="price">
              <p>₦{gift.totalCost?.toLocaleString()}</p>
              <small>
                ₦
                {gift?.actualPaid!.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}{' '}
                raised
              </small>
            </div>
          </GiftProgressPrice>
        </EventCardContent>
      </GiftDescription>
    </GiftCoverTime>
  );
};

export default GiftCover;
