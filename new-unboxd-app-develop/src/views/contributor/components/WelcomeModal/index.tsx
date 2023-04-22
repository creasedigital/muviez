import { Container } from '../../../../commons/ImageUploadModal/styles';
import { Button } from '../../../../components';
import Modal from '../../../../components/Modal/ImageModal';
import { WishList } from '../../../../typings/appState';
import { WelcomeBody } from '../../pages/styles';
import { WelcomeHead, Banner } from './style';

type ComponentProps = {
  show: boolean;
  close: () => void;
  list: WishList;
};

const WelcomeModal = ({ show, close, list }: ComponentProps) => {
  return (
    <Modal show={show} onClose={close}>
      <Container>
          <WelcomeHead>
            <Banner src={list.coverImage} alt="User" />
            <span className="name">{list.title}</span>
          </WelcomeHead>
          <WelcomeBody>
            <p className="hello">Hi Friend,</p>
            <p className="note">
              {list.welcomeNote
                ? list.welcomeNote
                : "If you are here, it's because you count as one of my loved ones. On the list you're about to see, are the items I deeply wish for."}
            </p>
            <Button onClick={close}>Open List</Button>
          </WelcomeBody>
      </Container>
    </Modal>
  );
};

export default WelcomeModal;
