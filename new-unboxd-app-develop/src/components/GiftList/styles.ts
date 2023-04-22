import styled, { css } from 'styled-components';
import { Colors } from '../../constants';

const thumbImageStyle = css`
  width: 100%;
  height: 55%;
`;

export const GiftThumbImage = styled.img`
  ${thumbImageStyle}
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

export const EmptyThumbImage = styled.div`
  ${thumbImageStyle}
  width: calc(100% - 0.5rem);
  margin: 0.25rem auto;
  background-color: ${Colors.darkNavy};
  border-radius: 10px 10px 0 0;
`;

export const GiftThumbList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  margin-bottom: 1.5rem;

  @media (min-width: 424px) {
    gap: 10px;
  }

  @media (min-width: 730px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 769px) {
    gap: 5px;
  }
`;

export const GiftThumbText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0 0;

  .price {
    font-size: 1.1rem;
    margin-top: 5px;
  }
`;
