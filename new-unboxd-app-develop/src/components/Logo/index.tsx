import styled from 'styled-components';
import { useAppThemeContext } from '../../store/ThemeContext';

const LogoSizes = {
  sm: 110,
  md: 130,
  lg: 200,
};

type Size = keyof typeof LogoSizes;

interface ILogoProps {
  size?: Size;
  click?: () => void;
}

const LogoStyle = styled.img<{ size: Size }>`
  width: ${({ size }) => LogoSizes[size]}px;
`;

const Logo = ({ size = 'md', click }: ILogoProps) => {
  const appThemeContext = useAppThemeContext();
  return (
    <LogoStyle
      size={size}
      src={
        appThemeContext?.theme === 'dark'
          ? '/logo-white.svg'
          : '/logo-white.svg'
      }
      alt="unboxd logo"
      className="ub-logo"
      onClick={click}
    />
  );
};

export default Logo;
