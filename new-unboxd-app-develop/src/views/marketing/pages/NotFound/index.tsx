import { useHistory } from 'react-router';
import { Logo } from '../../../../components';
import { BTNLink } from '../../../../components/Button/styles';
import { Container, Link, Row } from './styles';

const NotFound = () => {
  const history = useHistory();
  const goBack = () => history.goBack();

  return (
    <Container>
      <Row>
        <Logo />
      </Row>
      <Row>
        <img
          src="https://media.giphy.com/media/iGpkO05xWTl17Vhq6Y/giphy.gif"
          alt="404"
        />
      </Row>
      <Row>
        <h1>Nothing here!</h1>
        <p>
          <span>Error 404:</span> The page you tried to access is not available.
          <Link onClick={goBack}>Go back to the previous page</Link> or
        </p>
      </Row>
      <Row>
        <BTNLink to="/">Go home</BTNLink>
      </Row>
    </Container>
  );
};

export default NotFound;
