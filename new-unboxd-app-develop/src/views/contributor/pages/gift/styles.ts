import styled from 'styled-components';
import {Colors} from '../../../../constants';
import {
  CountDown,
  EventCard,
} from '../../../beneficiary/pages/Wishlist/styles';

export const GiftCoverTime = styled(EventCard)`
  min-height: 250px;
  max-height: 265px;
  margin-left: -1rem;
  margin-right: -1rem;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0.39deg,
      #000000 0.33%,
      rgba(0, 0, 0, 0) 85.87%
    );
    z-index: 1;
  }

  img {
    height: 100%;
  }

  @media (min-width: 375px) {
    margin-left: 0rem;
    margin-right: 0rem;
  }
`;

export const GiftCountdown = styled(CountDown)`
  position: absolute;
  top: 20px;
  right: 10px;
  z-index: 2;
`;

export const GiftDescription = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px;
  color: ${Colors.white};
  z-index: 2;
  width: 100%;
`;

export const GiftProgressPrice = styled.div`
  display: flex;
  margin-top: 0.5rem;

  .price {
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;

    p {
      font-size: 1.3rem;
      margin-bottom: 2px;
    }

    small {
      opacity: 0.5;
    }
  }
`;

export const SuggestWrapper = styled.div`
  padding: 2rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  p {
    color: ${Colors.darkGrey};
    margin-bottom: 1rem;
  }

  form {
    min-width: 260px
  }

  @media (min-width: 320px) {
    form {
      min-width: 300px;
    }
  }
  
  @media (min-width: 768px) {
    form {
      min-width: 420px;
    }
  }
`;

export const PrePaymentModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: ${Colors.darkNavy};
  top: 0;
  left: 0;
  z-index: 10;

  .container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 768px;
    min-height: 95vh;
    overflow: scroll;
    max-height: 100vh;

    .close {
      margin: 1rem 0 1rem auto;
      cursor: pointer;
    }

    .intro {
      display: flex;
      flex-direction: column;
      margin: 1rem 0;

      h3 {
        padding-bottom: 2rem;
      }

      p {
        font-weight: 400;

        span {
          font-weight: 200;
          color: ${Colors.offWhite};
        }
      }
    }

    img {
      margin: auto;
    }

  }

  @media (min-width: 768px) {
    .container {
      min-height: 100vh;

      .close {
        margin-top: 2rem;
      }
    }
  }
`;

export const PrePaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

`;

export const Spacer = styled.hr`
  border-top: 1px solid ${Colors.lineBlack};
  margin: 1rem 0;
  opacity: 0.6;
`;

export const Row = styled.div`
  display: flex;
`;