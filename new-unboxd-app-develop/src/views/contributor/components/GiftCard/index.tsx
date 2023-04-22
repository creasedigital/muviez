import React from 'react';
import { Progress as ProgressBar } from '../../../../commons';
import { Card } from './styles';
import { GiftCardProps } from './types';

const GiftCard: React.FC<GiftCardProps> = ({
  image,
  name,
  price,
  raised,
  onClick,
}) => {
  const addDefaultSrc = (e: any) => {
    e.target.src = '/assets/ps4.png';
  };

  const percentageRaised = Math.round((raised / price) * 100) | 0;

  return (
    <Card onClick={onClick}>
      <div className="img-holder">
        <img
          onError={addDefaultSrc}
          src={image || '/assets/ps4.png'}
          alt={name}
        />
      </div>
      <div className="card-content">
        <h3 className="name">{name}</h3>
        <div className="card-content__bottom">
          <p className="price">₦{price?.toLocaleString()}</p>

          <div className="progress">
            <p className="amount-raised">₦{raised?.toLocaleString()} raised</p>
            <ProgressBar
              percentage={percentageRaised}
              radius={21}
              stroke={1.5}
              className={'progress-circle'}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default GiftCard;
