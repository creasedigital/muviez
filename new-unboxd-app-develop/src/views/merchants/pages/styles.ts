import Styled from 'styled-components';

export const LogoHolder = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem auto;
`;

export const ItemsWrapper = Styled.div`
  width: 100%;
  display: flex;
  margin: 20px auto 5rem;
  justify-content: space-between;
`;

export const MerchantHeaderCard = Styled.div`
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
    flex-direction: column;
  }

  @media (min-width: 767px) {
    height: 235px;
  }
`;

export const Logo = Styled.img`
    max-width: 120px;
    max-height: 70px;
    margin: 0.25rem auto;

    @media (min-width: 768px) {
        max-width: 170px;
    }
`;