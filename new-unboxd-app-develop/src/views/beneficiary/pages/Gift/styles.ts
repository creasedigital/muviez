import styled, { css } from 'styled-components';
import { BTN } from '../../../../components/Button/styles';
import { Colors } from '../../../../constants';
import { SpaceBetween } from '../../../../commons/UtilityStyles/Flex';

const imageStyle = css`
  height: 40vh;
  position: relative;
  border-radius: 5px;
`;

export const ImageHolder = styled(BTN)`
  ${imageStyle}
  border: 1px solid #4a4a4a;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  text-decoration: underline;
  overflow: hidden;
  background-color: ${Colors.navy};
`;

export const UploadButton = styled(BTN)<{ color?: string }>`
  background-color: ${({ color }) => (color ? color : 'white')};
  color: ${Colors.lineBlack};
  border: 1px solid ${Colors.black};
  position: absolute;
  bottom: 10px;
  left: calc(50% - 80px);
  width: unset;
  border-radius: 5px;

  &:hover {
    color: ${Colors.white};
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
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
  ${imageStyle}
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

export const Total = styled(SpaceBetween)`
  align-items: center;
  background-color: ${Colors.lightGrey};
  padding: 20px 20px 30px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const TotalAmount = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 1.25rem;
    margin-top: 0.5rem;
  }
`;
