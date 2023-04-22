import { HeadWrapper } from '../../../../components/Header/styles';
import styled from 'styled-components';

export const HomeHeader = styled(HeadWrapper)`
  padding: 3rem 0;
  .container {
    justify-content: center;
  }

  @media (min-width: 830px) {
    display: none;
  }
`;

export const Main = styled.div`
  display: flex;
  .container {
    flex-direction: column;
  }

  @media(min-width: 768px) {
    height: unset;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  main {
    flex: 2;
    height: 100%;
    padding-top: 2rem;
  }
  .description {
    flex: 1.5;
  }
  .container {
    width: 70%;
    justify-content: center;
  }
  .description {
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme.appPrimaryColor};
    position: relative;
    color: ${(props) => props.theme.contentColor};
    overflow: hidden;

    .large-heart,
    .small-heart {
      position: absolute;
    }
    .small-heart {
      right: 0;
      bottom: 10%;
    }
  }
  .header {
    display: flex;
    justify-content: center;
    display: none;
    width: 100%;
  }
  @media (max-width: 830px) {
    flex-direction: column;
    .description {
      display: none;
    }
    .container {
      width: 100%;
      height: auto;
      justify-content: end;
    }
    .header {
      display: flex;
    }
  }
`;

export const AuthDescriptionHeader = styled.div`
  width: 70%;
  margin: 0 auto;
  height: 150px;
  display: flex;
  align-items: center;
  z-index: 9;
`;

export const AuthDescriptionFooter = styled.div`
  margin: auto auto 116px auto;
  width: 70%;
  z-index: 9;
  h1 {
    font-size: 55px;
    font-weight: 500;
  }
  p {
    font-size: 20px;
    font-family: Averta-CY;
    margin-top: 17px;
    font-weight: 300;
  }
`;
