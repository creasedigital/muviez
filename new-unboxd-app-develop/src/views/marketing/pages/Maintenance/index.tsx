import { Logo } from '../../../../components';
// import { BTNLink } from '../../../../components/Button/styles';
import { Container, Row } from  './styles';

const Maintenance = () => {
  return (
    <Container>
      <Row>
        <Logo />
      </Row>
      <Row>
        <img
          src="https://media.giphy.com/media/Sk3KytuxDQJQ4/giphy.gif"
          alt="Maintenance mode"
        />
      </Row>
      <Row>
        <h1>We are under maintenance!</h1>
        <p>We are working on improving your experience as you create wishlists and gather contributions from friends and family. We will be back shortly
        </p>
      </Row>
      {/* <Row>
        <BTNLink to="/">Notify me when done</BTNLink>
      </Row> */}
    </Container>
  );
};

export default Maintenance;
