import styled, { css } from 'styled-components';
import { Copy, Facebook, Twitter, Whatsapp } from '@styled-icons/icomoon';
import { PlainButton } from '../../components/Button/styles';
import { Colors, Effects } from '../../constants';

export const ShareWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px 20px 10px;

  @media (min-width: 580px) {
    padding: 20px 40px;
  }
`;

export const Container = styled.div`
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
`;

export const WelcomeNoteActive = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(${Effects.blur}px);
  z-index: 15;
`;

export const WelcomeNote = styled.div`
  padding: 10px 20px;
  background: ${Colors.navy};
  border-radius: 10px;
  position: relative;

  .title {
    font-size: 14px;
    color: ${Colors.grey};
    margin-bottom: 10px;
  }

  .nb {
    display: none;
    background: ${Colors.navy};
    margin-bottom: 1rem;
    position: absolute;
    top: 2rem;
    width: 90%;
    padding: 10px;
  }

  textarea {
    width: 100%;
    min-height: 100px;
    background: transparent;
    resize: none;
    color: ${Colors.white};
    font-family: 'Averta-CY', 'Lato', sans-serif;
    font-weight: 300;
    letter-spacing: 0.35px;
    font-size: 14px;
    line-height: 18px;
    margin-top: 5px;

    @media screen and (min-width: 375px) {
      min-height: 85px;
    }

    @media screen and (min-width: 425px) {
      min-height: 70px;
    }

    @media screen and (min-width: 768px) {
      min-height: 80px;
    }
  }
`;

export const WelcomeBtnActions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
  padding: 0 0 10px;
  position: relative;

  span {
    font-size: 13px;
    color: ${Colors.yellow};
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const ShareBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  position: relative;
`;

export const ShadowOverlay = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: transparent;
  backdrop-filter: blur(${Effects.smallBlur}px);
  z-index: 15;
`;

export const ShareText = styled.p`
  width: 70%;
  margin: 1rem 0 1.5rem;
  color: ${Colors.grey};
  text-align: center;
  margin: 10px auto;
`;

export const ShareUrl = styled.p`
  position: relative;
  white-space: nowrap;
  overflow-x: hidden;
  padding: 1rem 0.75rem;
  background: ${Colors.navy};
  border-radius: 10px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      270deg,
      ${Colors.navy} 0%,
      rgba(247, 247, 247, 0) 100%
    );
    width: 100%;
    height: 100%;
  }
`;

export const SocialOptions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SocialIcon = styled(PlainButton)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem 0;
  font-size: 0.8rem;

  .image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: ${Colors.grey};
    margin-bottom: 0.5rem;
  }

  @media (min-width: 580px) {
    margin: 2rem 0;
  }
`;

const socialIconImage = css`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  background: ${Colors.grey};
  margin-bottom: 0.5rem;
  padding: 0.8rem;
  color: ${Colors.white};
`;

export const FShare = styled(Facebook)`
  ${socialIconImage}
  background: #1877F2;
`;

export const WShare = styled(Whatsapp)`
  ${socialIconImage}
  background: linear-gradient(53.56deg, #22B139 3.54%, #5FD569 99.84%);
`;

export const TShare = styled(Twitter)`
  ${socialIconImage}
  background: #1DA1F2;
`;

export const CopyShare = styled(Copy)`
  ${socialIconImage}
  background: ${Colors.green}
`;
