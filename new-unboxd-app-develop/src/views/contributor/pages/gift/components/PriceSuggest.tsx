import styled from 'styled-components';
import { Flex } from '../../../../../commons/UtilityStyles/Flex';
import { Colors } from '../../../../../constants';
import { roundToThousands } from '../../../../../utils/helpers/price';
import { SuggestWrapper } from '../styles';

type ComponentProps = {
  price: number;
  selectSuggestion: (price: number | '') => void;
};

const PillWrapper = styled(Flex)`
  flex-wrap: wrap;
`;

const PricePill = styled.span`
  background: ${Colors.navy};
  border-radius: 18px;
  padding: 1rem 1.5rem;
  margin-bottom: 0.8rem;
  white-space: nowrap;
  color: ${Colors.white};
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 0.25rem;
  }

  @media (min-width: 425px) {
    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
`;

const PriceSuggest = ({ price, selectSuggestion }: ComponentProps) => {
  let roundedHalfPrice = 0;
  let amount = 0;
  if (price > 500000) {
    amount = 500000;
    roundedHalfPrice = roundToThousands(amount / 2);
  } else {
    amount = price;
    roundedHalfPrice = roundToThousands(price / 2);
  }

  return (
    <SuggestWrapper>
      <p>Choose an amount to contribute</p>

      <PillWrapper>
        <PricePill onClick={() => selectSuggestion(roundedHalfPrice)}>
          ₦ {roundedHalfPrice?.toLocaleString()}
        </PricePill>
        <PricePill onClick={() => selectSuggestion(amount)}>
          ₦ {amount?.toLocaleString()}
        </PricePill>
        <PricePill onClick={() => selectSuggestion('')}>Others</PricePill>
      </PillWrapper>
    </SuggestWrapper>
  );
};

export default PriceSuggest;
