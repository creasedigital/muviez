import styled from 'styled-components';

export const DashboardHeaderWrapper = styled.header`
  width: 100%;
  background: ${(props) => props.theme.appPrimaryColor};
  height: 80px;
  display: flex;
  align-items: center;

  .header-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    .ub-logo {
      margin-right: auto;
    }
    a {
      color: ${(props) => props.theme.contentColor};
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
