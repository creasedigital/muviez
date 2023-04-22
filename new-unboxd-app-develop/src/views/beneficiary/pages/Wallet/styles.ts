import styled, { css } from 'styled-components';
import { Colors } from '../../../../constants';

export const WalletContainer = styled.div`
  display: flex;
  flex-direction: column;

  header.breadCrumb {
    span {
      font-size: 0.8rem;
      font-weight: normal;
    }
  }

  @media (min-width: 769px) {
    display: grid;
    row-gap: 2rem;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  max-width: 300px;

  form {
    h3 {
      font-weight: normal;
      font-size: 1.6rem;
      margin-bottom: 1.5rem;
      text-align: center;
    }
    .walletBalance,
    .verifyText {
      font-size: 0.8rem;
      font-weight: lighter;
      margin-top: 0.8rem;
      margin-bottom: 3rem;
    }
    .verifyText {
      text-align: center;
      margin-top: -0.8rem;
    }
  }

  @media (min-width: 420px) {
    max-width: 400px;
  }

  @media (min-width: 768px) {
    max-width: 500px;
  }
`;

export const InputGroup = styled.div`
  border-radius: 20px;
  background-color: ${Colors.darkNavy};
  display: flex;
  flex-direction: column;
  padding: 0.5em 1.5em;
  height: 64px;
  width: 100%;

  span {
    color: ${Colors.yellow};
    font-size: 0.8rem;
  }

  input {
    background-color: transparent;
    flex: 1;
    font-size: 1rem;
    color: ${Colors.white};

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

export const ChooseBankList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  h3 {
    font-size: 14px;
    margin: 1rem 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }
`;

export const ListItem = styled.li`
  display: flex;
  cursor: pointer;
  align-items: center;
  margin: 0.5rem 0;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    max-width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${Colors.tintOrange};
    color: ${Colors.burntOrange};
    flex: 0 0 20%;
  }

  .account {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  }
`;

export const GoBack = styled.span(
  () => css`
    margin-right: 1rem;
  `
);

export const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);

  @media (min-width: 680px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const Tab = styled.button`
  font-size: 1rem;
  font-weight: lighter;
  padding: 0em 3em 0.5em 3em;
  color: ${Colors.black100};
  background-color: transparent;

  @media (max-width: 767px) {
    padding: 0em 1em 0.5em 1em;
  }
  &.activeTab {
    color: white;
    border-bottom: 1px solid ${Colors.white};
  }
`;

export const TabList = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${Colors.black100};

  @media (min-width: 769px) {
    justify-content: flex-start;
  }
`;

export const TabItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid ${Colors.black200};
  padding: 1em 0em;
  line-height: 1.3rem;

  .right {
    text-align: right;
  }
  .left {
    display: flex;
    > div {
      margin-left: 1rem;
    }
  }
  span {
    color: ${Colors.black100};
    font-weight: lighter;
    font-size: 0.9rem;
  }
  p {
  }
`;

export const Resend = styled.div`
  text-align: center;
`;

export const TabPanels = styled.div``;

export const TabPanel = styled.div``;
