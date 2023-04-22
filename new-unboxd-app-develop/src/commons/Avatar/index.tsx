import styled, { css } from 'styled-components';

const Image = styled.img<{ small?: boolean }>`
  border-radius: 17px;
  height: 60px;
  width: 60px;
  box-shadow: 0px 11px 16px rgba(0, 0, 0, 0.15);
  object-fit: cover;

  ${({ small }) => small && css`
    height: 25px;
    width: 25px;
  `}
`;

type ComponentProps = {
  src: string;
  alt: string;
  small?: boolean;
};

const Avatar = (props: ComponentProps) => {
  return <Image {...props} />;
};

export default Avatar;
