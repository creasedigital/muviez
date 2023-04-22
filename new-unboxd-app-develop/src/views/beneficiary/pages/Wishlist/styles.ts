import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Plus } from '@styled-icons/icomoon';

import { SpaceBetween } from '../../../../commons/UtilityStyles/Flex';
import { BTN } from '../../../../components/Button/styles';
import { Colors, Sizes } from '../../../../constants';

const headlineFont = css`
  font-weight: bold;
  font-size: calc(${Sizes.twenty}px);
`;

const thumbImageStyle = css`
  width: 100%;
  height: 55%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  overflow-y: auto;
`;

export const ImageHolder = styled(BTN)`
  height: 30vh;
  background: ${(props) => props.theme.appPrimaryColor};
  border-radius: 10px;
  border: 1px solid #4a4a4a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  text-decoration: underline;
  overflow: hidden;
  svg {
    margin-bottom: 20px;
  }
`;

export const EventCard = styled.div`
  position: relative;
  margin-bottom: 1rem;
  border-radius: 18px;
  overflow: hidden;
  &::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      360deg,
      #000000 2.57%,
      rgba(0, 0, 0, 0) 140.57%
    );
    z-index: 2;
  }
`;

export const EventCardContent = styled(SpaceBetween)`
  width: 100%;
  position: absolute;
  bottom: 20px;
  left: 0;
  padding: 0 10px;
  align-items: flex-end;
  z-index: 3;
`;

export const WishlistHeaderWrapper = styled.div<{ dashboard?: boolean }>`
  position: relative;
  width: 100%;

  &::before {
    content: '';
    width: 100%;
    position: absolute;
    height: 70%;
    bottom: 0;
    background: linear-gradient(
      to top,
      rgba(13, 15, 21, 1),
      rgba(34, 36, 44, 0)
    );
    z-index: 2;
  }

  ${({ dashboard }) =>
    dashboard &&
    css`
      height: calc(170px + 4.5rem);

      &::before {
        bottom: 4rem;
      }
    `}

  @media (min-width: 767px) {
    height: 235px;

    ${({ dashboard }) =>
      dashboard &&
      css`
        &::before {
          bottom: 0;
        }
      `}
  }
`;

export const WishlistHeaderCard = styled.div`
  width: 100%;
  position: relative;
  height: 170px;
  border-radius: 28px;
  overflow: hidden;

  .list-header-content {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 4;
    padding: 10px;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
  }
  img {
    width: 100%;
    height: 235px;
    object-fit: cover;
  }

  @media (min-width: 767px) {
    height: 235px;
  }
`;

export const CopyLink = styled.div<{ mobile?: boolean }>`
  width: 100%;
  background: ${(props) => props.theme.appPrimaryColor};
  color: ${Colors.yellow};
  height: 53px;
  border-radius: 18px;
  display: none;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 9;
  padding: 15px 20px;
  font-size: 15px;
  cursor: pointer;

  p {
    position: relative;
    overflow: hidden;
    width: max-content;
    max-width: 70%;
    text-overflow: ellipsis;
    white-space: nowrap;
    &::after {
      content: '';
      position: absolute;
      background: linear-gradient(
        270deg,
        rgba(33, 36, 44, 0.9) 20.33%,
        rgba(33, 36, 44, 0.5) 100.71%
      );
      width: 30px;
      height: 100%;
      right: 0;
      top: 0;
    }
  }
  .copy {
    color: #80ba7c;
    cursor: pointer;
  }
  @media (min-width: 767px) {
    display: flex;
    min-width: 335px;
    max-width: 335px;
  }

  ${({ mobile }) =>
    mobile &&
    css`
      display: flex;
      bottom: 0;
      left: 0;

      @media (min-width: 767px) {
        display: none;
      }
    `}
`;

export const WishlistHeaderEventDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  padding: 10px;
  margin-top: auto;

  span.days {
    color: #ffffff;
    background: ${Colors.darkGreen};
    padding: 8px;
    border-radius: 10px;
    font-size: 13px;
  }
`;

export const CoverImageWrapper = styled.div`
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  .change-image {
    content: 'Change cover image';
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 40px;
    left: 0;
    bottom: 0;
    background: rgba(22, 24, 29, 0.5);
    border: 1px solid #4a4a4a;
    backdrop-filter: blur(20px);
  }
`;

export const CoverImage = styled.img`
  height: 25vh;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
  border: 1px solid #4a4a4a;
`;

export const CountDown = styled.div`
  background-color: ${Colors.green};
  padding: 0.4rem 0.7rem;
  font-size: 0.95rem;
  border-radius: 7.5px;
  text-align: center;
  white-space: nowrap;
`;

export const HeadlineInput = styled.textarea`
  border: none;
  background: transparent;
  width: 100%;
  resize: none;
  padding: 2rem 0;
  font-family: Lato;
  color: ${Colors.white};
  ${headlineFont}

  &::placeholder {
    opacity: 0.5;
    font-size: 1.5rem;
  }
`;

export const HeadlineText = styled.div`
  max-width: 60%;
  h2 {
    ${headlineFont};
  }
`;

export const ShareBox = styled.div`
  position: relative;
  padding: 1rem;
  background: ${Colors.darkNavy};
  border-radius: 10px;
  width: 100%;
  overflow: hidden;

  &::before {
    content: '';
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 20%,
      ${Colors.darkNavy} 60%
    );
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .url {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .share-button {
    color: ${Colors.textGreen};
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 2;
    transform: translateY(-50%);
    padding: 0.5rem 1rem;
    font-size: ${Sizes.normal}px;
  }
`;

export const NeedText = styled.p`
  font-weight: 300;
  text-align: center;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  em {
    font-weight: bold;
  }

  span {
    color: ${Colors.lemonGreen};
    background-color: ${Colors.darkerGreen};
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.65rem;
    font-size: 0.75rem;
    font-weight: 600;
  }

  @media (min-width: 580px) {
    margin: 2rem 0;
  }
`;

export const AddIcon = styled(Plus)`
  color: ${Colors.green};
  width: 15px;
  height: 15px;
`;

export const AddItem = styled(Link)`
  border-radius: 50%;
  padding: 2rem;
  background-color: ${Colors.lightgreen};
  position: fixed;
  bottom: 10vh;
  right: 20px;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);

  &::after {
    content: ' ';
    width: 70%;
    height: 70%;
    background: ${Colors.white};
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
`;

//Explainer Modal Styles
export const Explainer = styled.div`
  position: fixed;
  bottom: 20vh;
  right: 0;
  z-index: 3;
  margin: 0 auto;

  h3 {
    padding: 5px 10px;
    margin-bottom: 5px;
  }

  p {
    width: 50%;
    margin: 0 auto;
    text-align: center;
  }

  @media (min-width: 768px) {
    width: 25%;
    right: 10%;

    h3,
    p {
      width: 100%;
      text-align: right;
    }
  }
`;

export const ExplainerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, ${Colors.darkNavy}, rgba(0, 0, 0, 0.85));
  z-index: 15;
  padding: 0 20px;
`;

export const ExplainerHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 0;
  background: ${Colors.darkNavy};
`;

export const ExplainerNav = styled.div<{ active?: boolean }>`
  background-color: transparent;
  opacity: ${({ active }) => (active ? '1' : '0.2')};
  font-size: 13px;
  padding: 0 10px;

  &:last-child {
    padding-right: 0;
  }
`;

export const ExplainerContent = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  padding-right: 20px;

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    width: 70%;
    margin-bottom: 2.5rem;
  }
`;

export const ExplainerButton = styled.button`
  background: transparent;
  text-decoration: underline;
  font-size: 1rem;
`;

export const WishItemsWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 20px auto 5rem;
  justify-content: space-between;
`;

export const DatePickerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  .month {
    @media (max-width: 768px) {
      order: -1;
      flex: 1 0 100%;
    }
  }
`;

export const Hold = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: ${Colors.grey};
    margin-top: 10px;
  }
`;

export const WishlistGrid = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const GiftThumb = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  border-radius: 10px;
  opacity: 0.1;
  height: 270px;
  min-width: 115px;
  position: relative;

  @media (min-width: 1028px) {
    margin: 0.5rem;
  }
`;

export const EmptyThumbImage = styled.div`
  ${thumbImageStyle}
  width: calc(100% - 0.5rem);
  margin: 0.25rem auto;
  background-color: ${Colors.darkNavy};
  border-radius: 10px 10px 0 0;
`;
