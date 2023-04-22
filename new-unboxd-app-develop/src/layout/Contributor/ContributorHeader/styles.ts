import styled from 'styled-components';
import { Colors } from '../../../constants';

export const ContributorHeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  .header-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    .ub-logo {
      cursor: pointer;
      margin: auto;
    }
    a {
      color: ${(props) => props.theme.contentColor};
    }
  }

  @media (min-width: 768px) {
    background: ${(props) => props.theme.appPrimaryColor};
    .header-content {
      .ub-logo {
        margin-left: 0;
      }
    }
  }
`;

export const AppMenu = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;

    a {
      margin: 0 1rem;
      display: flex;
      align-items: center;

      svg {
        margin-right: 10px;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export const Span = styled.span`
  display: flex;
  padding: 0.5rem 1rem;
  background: ${Colors.green};
  color: ${Colors.white};
  border-radius: 12px;
  cursor: pointer;
`;
