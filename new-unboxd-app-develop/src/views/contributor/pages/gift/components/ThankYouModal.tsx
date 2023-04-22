import { Avatar } from '../../../../../commons';
import { Button, Modal } from '../../../../../components';
import { WelcomeBody, WelcomeHead, WelcomeWrapper } from '../../styles';
import { EventData } from '../index';
import { Row } from '../styles';

type ComponentProps = {
  show: boolean;
  close: () => void;
  eventData: EventData;
};

const ThankYouModal = ({ show, close, eventData }: ComponentProps) => {
  const goBack = () => {
    window.location.href = `/@${eventData.userID.username}/${eventData.slug}`;
  };

  const createList = () => {
    window.location.href = `/`;
  };

  return (
    <Modal show={show} onClose={close}>
      <Modal.Centered>
        <WelcomeWrapper>
          <WelcomeHead>
            <Avatar src={eventData?.coverImage} alt="User" />
            <span className="name">{eventData?.userID.firstname}</span>
          </WelcomeHead>
          <WelcomeBody>
            <p className="hello">Thank You 😊,</p>
            <p className="note">
              {eventData?.description ||
                "I sincerely appreciate you for this gesture, you don't know how much it means to me, but I want you to know it means a lot. I can't thank you enough."}
            </p>
            <Row>
              <Button onClick={goBack}>Finish</Button>
              <Button onClick={createList}>Create list</Button>
            </Row>
          </WelcomeBody>
        </WelcomeWrapper>
      </Modal.Centered>
    </Modal>
  );
};

export default ThankYouModal;
