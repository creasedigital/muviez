import { HeartWrapper, Heart } from './styles';
import { Heart as HeartIcon } from '../icons';
import { LogoProps } from './types';

const LogoLoader = ({ size = 'md' }: LogoProps) => {
  return (
    <HeartWrapper>
      <Heart white size={size}>
        <HeartIcon fill={"#BDBDBD"} offset={"#EEEEEE"} id={1} />
      </Heart>
      <Heart size={size}>
        <HeartIcon fill={"#2E651E"} offset={"#7DC670"} id={2} />
      </Heart>
    </HeartWrapper>
  );
};

export default LogoLoader;
