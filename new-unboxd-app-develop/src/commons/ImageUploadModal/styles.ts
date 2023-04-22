import styled, { css } from 'styled-components';
import { button } from '../../components/Button/styles';
import { Colors } from '../../constants';

export const FileInput = styled.input`
  display: none;
`;

const buttonstyle = css`
  ${button};
  background-color: ${Colors.green};
  margin: 1rem 0 0.5rem;
`;

export const FileLabel = styled.label`
  ${buttonstyle}
`;

export const Button = styled.button`
  ${buttonstyle}
`;

export const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin: 10px 0;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const PhotoThumb = styled.a`
  display: flex;
  flex-direction: column;
`;

export const PhotoCardImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const PhotoAuthor = styled.p`
  a {
    text-decoration: underline;
  }
`;

export const Container = styled.div`
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
`;
