import styled from 'styled-components';

export const WelcomeHead = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 2rem 0;
  position: relative;

  span {
    padding-top: 1rem;
    position: absolute;
    bottom: 0;
    margin: 5px 10px;
  }
`;

export const Banner = styled.img`
  border-radius: 17px;
  height: 60px;
  width: 100%;
  box-shadow: 0px 11px 16px rgb(0 0 0 / 15%);
  object-fit: cover;
`;