import {
  TransWrapper,
  TransDetails,
  TransIcon,
  TransLeft,
  TransPrice,
} from './styles';

const Transaction = () => {
  return (
    <TransWrapper>
      <TransLeft>
        <TransIcon>↖</TransIcon>
        <TransDetails>
          <p>Oke Tega</p>
          <span>for 70” Smart TV</span>
        </TransDetails>
      </TransLeft>
      <TransPrice>
        <p>N50,000</p>
        <span>Oct 20</span>
      </TransPrice>
    </TransWrapper>
  );
};

export default Transaction;
