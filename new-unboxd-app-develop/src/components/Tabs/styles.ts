import styled, { css } from 'styled-components';
import { Colors } from '../../constants';

export const Tabs = styled.div``;

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

export const TabItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid ${Colors.black200};
  padding: 1em;
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
  small {
    color: ${Colors.black100};
    font-weight: lighter;
    font-size: 0.9rem;
  }
  span {
    font-size: 1rem;
    color: ${Colors.white};
    font-weight: 700;
    margin-left: 0.35rem;
  }

  @media (min-width: 680px) {
    padding: 1rem 0;
  }
`;

export const Entry = styled.div`
  display: flex;
  align-items: center;
`;

export const SpanText = styled.p`
  display: none;
  font-size: 1rem;
  color: ${Colors.white};
  font-weight: 700;
  margin-right: 0.35rem;

  @media (min-width: 680px) {
    display: unset;
  }
`;

export const TabPanels = styled.div``;

export const TabPanel = styled.div``;

export const Badge = styled.label<{ error?: boolean }>`
  font-size: 0.6rem;
  margin-left: 0.5rem;
  background-color: ${Colors.darkGreen};
  color: ${Colors.white};
  padding: 0.2rem 0.6rem;
  border-radius: 1rem;
  
  ${({ error }) => error && css`
  background-color: ${Colors.error};
  `}
`;
