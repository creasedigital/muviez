import { Link } from 'react-router-dom';
import { ResetLinkWrapper } from './styles';
import { ResetLinkComponentProps } from './types';

const ResetLink: React.FC<ResetLinkComponentProps> = () => {
  return (
    <ResetLinkWrapper>
      <div className="container">
        <p className="info">
          <Link to="/auth-reset">Forgot Password?</Link>
        </p>
      </div>
    </ResetLinkWrapper>
  );
};

export default ResetLink;
