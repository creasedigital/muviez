import React from 'react';
import styled from 'styled-components';
import { ReactComponent as EditIcon } from '../../assets/img/icons/edit.svg';

interface EditProfileImageProps {
  id: string;
  src: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EditProfileImage: React.FC<EditProfileImageProps> = ({
  id,
  src,
  onChange,
}) => {
  return (
    <ImageWrapper>
      <img src={src ? src : '/assets/dp.jpg'} alt="You" />
      <label htmlFor={id}>
        <EditIcon />
      </label>
      <input type="file" id={id} onChange={onChange} />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  margin: auto auto 50px auto;
  border-radius: 34px;
  width: 89px;
  height: 89px;
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    height: 89px;
    border: 5px solid rgba(140, 192, 135, 0.8);
    border-radius: 34px;
    object-fit: cover;
  }
  input {
    display: none;
  }
  label {
    position: absolute;
    background: #ffffff;
    width: 32px;
    height: 32px;
    border-radius: 12px;
    bottom: 0;
    right: -8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

export default EditProfileImage;
