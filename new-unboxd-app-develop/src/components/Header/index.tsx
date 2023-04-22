import { HeadWrapper, Auth } from './styles';
import { HeaderComponentProps } from './types';
import { Link } from 'react-router-dom';

const Header: React.FC<HeaderComponentProps> = () => {
  return (
    <HeadWrapper>
      <div className="container">
        <h2>unboxd</h2>
        <Auth>
          Got account? <Link to="/login"> Sign in</Link>
        </Auth>
      </div>
    </HeadWrapper>
  );
};

export default Header;
