import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Colors from '../../constants/Colors';

export const WishLink = styled(Link)`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
`;

export const WishCardWrapper = styled.div`
  max-height: 177px;
  flex: 0 0 48%;
  border-radius: 18px;
  position: relative;
  margin-bottom: 14px;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    width: 100%;
    position: absolute;
    height: 70%;
    bottom: -1px;
    background: linear-gradient(
      to top,
      rgba(22, 24, 29, 1),
      rgba(34, 36, 44, 0)
    );
    z-index: 2;
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.3);
  }

  .wish-details {
    position: absolute;
    z-index: 9;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    h1 {
      flex: 2;
      font-size: 20px;
    }
    .wish-category {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-self: flex-end;
      .wish-amount {
        margin-right: 5px;
        width: 78px;
        height: 27px;
        background: ${Colors.green};
        border-radius: 8px;
        text-transform: uppercase;
        font-size: 11px;
      }
      .wish-icon {
        width: 29px;
        height: 27px;
        background: ${Colors.green};
        border-radius: 8px;
      }
    }
  }
  @media (max-width: 767px) {
    width: 100%;
    min-width: 100%;
  }
  @media (min-width: 768px) and (max-width: 770px) {
    min-width: 355px;
  }
`;
