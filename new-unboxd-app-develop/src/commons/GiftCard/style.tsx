import styled, { css } from 'styled-components';
import Colors from '../../constants/Colors';
import Sizes from '../../constants/Sizes';

export const GiftThumb = styled.div`
  display: flex;
  flex-direction: column;
  background: ${Colors.navy};
  border-radius: 10px;
  height: 270px;
  min-width: 115px;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  @media (min-width: 1028px) {
    margin: 0.5rem;
  }
`;

export const GiftThumbImage = styled.div`
  width: 100%;
  min-height: 50%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Raised = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GiftThumbText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 15px;

  .gift-name {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }

  .price {
    font-size: 1.1rem;
    margin-top: 5px;
    text-align: center;
    width: 100%;
  }
  
  .raised {
    color: ${Colors.darkGrey};
    font-size: ${Sizes.small}px;
  }
  
  .merch-discount-box {
    display: flex;
    align-items: center;
    margin: 0 auto;
    
    .price {
      font-size: 0.85rem;
      color: ${Colors.grey};
      padding: 0 0.35rem;

      &:last-child {
        font-size: 1rem;
        color: ${Colors.white};
      }
    }
  }

  button {
    margin: 0.85rem 1px 0;
    padding: 0.75rem 0;
    height: 50px;
  }

  @media (min-width: 580px) {
    align-items: center;

    .gift-name {
      text-align: center;
    }
  }
`;

export const GiftThumbRaised = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000d1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: not-allowed;
`;

export const NoLink = styled.button`
  display: flex;
  background-color: transparent;
  border: 0;
  font-weight: ${Sizes.mediumWeight};
`;

export const MenuButton = styled.button<{ active: boolean }>`
  background-color: ${Colors.white};
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0.5rem 0.75rem;
  border-radius: 30px;
  box-shadow: 0 1px 6px #0000006b;
  display: flex;

  span {
    padding: 2.5px;
    background-color: #000;
    border-radius: 50%;
    margin: 0 2px;
  }

  ${({ active }) =>
    active &&
    css`
      z-index: 5;
    `}
`;

export const MenuOverlay = styled.div`
  &::before {
    content: ' ';
    background-color: #000000dd;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    height: 100%;
    width: 100%;
  }
`;

export const MenuItems = styled.div`
  position: absolute;
  top: 55px;
  right: 10px;
  background: ${Colors.white};
  width: 100%;
  z-index: 11;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  color: ${Colors.black};
  overflow: hidden;

  a,
  button {
    padding: 0.7rem 1rem;
    transition: 0.5s ease all;

    &:not(:last-child) {
      border-bottom: 1px solid ${Colors.grey};
    }
    &:hover {
      background: ${Colors.lightGrey};
    }
  }
`;
