import styled from 'styled-components';
import { Colors } from '../../../../constants';

export const ProfileWrapper = styled.div`
  display: flex;
`;

export const AvatarThing = styled.div`
  display: flex;
  flex: 0 0 25%;
  margin-right: 1rem;

  .img-holder {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    background: linear-gradient(
      to bottom,
      rgba(139, 203, 133, 1),
      rgba(139, 203, 133, 0)
    );
    border-radius: 1.5rem;
    overflow: hidden;
  }

  img {
    max-width: 65px;
    max-height: 65px;
    object-fit: cover;
    width: 100%;
    border-radius: 1.5rem;
  }

  @media (min-width: 420px) {
    .img-holder {
      width: 90px;
      height: 90px;
    }

    img {
      max-width: 85px;
      max-height: 85px;
    }
  }

  @media (min-width: 680px) {
    flex: 0;

    .img-holder {
      width: 120px;
      height: 120px;
    }

    img {
      max-width: 110px;
      max-height: 110px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;

  .name {
    font-size: 18px;
  }

  .username {
    font-size: 12px;
    opacity: 0.5;
    padding-top: 0.25rem;
  }

  @media (min-width: 420px) {
    .name {
      font-size: 24px;
    }

    .username {
      font-size: 15px;
    }
  }

  @media (min-width: 680px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    .name {
      font-size: 30px;
    }

    .username {
      font-size: 20px;
    }
  }
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SocialsWrapper = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 10px;
    margin-right: 1rem;
  }

  .socials {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;

    a {
      width: 46px;
      height: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 16px;
      svg {
        margin-right: 0;
      }
    }
  }
`;

export const UserWishlist = styled.div`
  margin-top: 1.5rem;

  .tabs {
    background-color: ${Colors.navy};
    padding: 1rem;
    min-height: 72.5vh;
  }

  @media (min-width: 680px) {
    .tabs {
      margin-left: calc(50% - 50vw);
      margin-right: calc(50% - 50vw);
    }
  }

  @media (min-width: 769px) {
    .tabs {
      margin-left: 0;
      margin-right: 0;
      background-color: transparent;
    }
  }
`;
