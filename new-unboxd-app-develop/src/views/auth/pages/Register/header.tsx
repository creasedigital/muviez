import { Link } from 'react-router-dom';
import { Auth, HeadWrapper } from '../../../../components/Header/styles';

function Header() {
  return (
    <HeadWrapper>
      <div className="container">
        <h2>
          <Link to="/">unboxd</Link>
        </h2>
        <Auth>
          Got account? <Link to="/login">Sign in</Link>
        </Auth>
      </div>
    </HeadWrapper>
  );
}

export default Header;
