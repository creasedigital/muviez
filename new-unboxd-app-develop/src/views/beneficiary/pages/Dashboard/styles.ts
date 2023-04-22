import styled from 'styled-components';

export const DashboardWrapper = styled.div`
  display: flex;
  position: relative;
  min-height: calc(100vh - 70px);

  .container {
    flex-direction: column;
    padding: 10px 20px;
    z-index: 1;
  }
`;

export const DashboardFilm = styled.div`
  position: fixed;
  width: 100%;
  height: 15%;
  bottom: 0;
  left: 0;
  background: linear-gradient(to top, rgba(22, 24, 29, 1), rgba(34, 36, 44, 0));
  z-index: 2;
`;

export const MyUnboxdListHeader = styled.div`
  width: 100%;
  margin: 10px 0 30px;
  p {
    display: flex;
    align-items: center;
    font-size: 15px;
    @media (max-width: 768px) {
      justify-content: center;
    }
  }
`;

export const WishList = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ContentWrapper = styled.div`
  margin-top: 2rem;
  @media (min-width: 768px) {
    width: 60%;
    margin: 2rem auto;
  }
`;

export const SectionSeparator = styled.hr`
  border-top: 1px solid #3f3f3f;
  width: 100%;
  margin: 30px auto;
`;
