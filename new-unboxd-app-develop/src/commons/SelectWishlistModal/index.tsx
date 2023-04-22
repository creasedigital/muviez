import { SpaceBetweenHeader } from '../UtilityStyles/Flex';
import { PlainButton } from '../../components/Button/styles';
import Modal from '../../components/Modal/ImageModal';
import {
  ColText,
  ShareWrapper,
  Container,
  Text,
  Clear,
} from './styles';
import { CloneOffer, WishList } from '../../typings/appState';
import { useState } from 'react';
import LogoLoader from '../LogoLoader';
import { useDispatch } from 'react-redux';
import { cloneAnOffer, setCloneOfferId } from '../../views/merchants/redux/actions';

interface ComponentProps {
  show: boolean;
  close: () => void;
  list: WishList[];
  added: () => void;
  data: CloneOffer;
}

const SelectWishlistModal = ({ added, show, close, list, data }: ComponentProps) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  
  const chooseWishlist = (id: string) => {
    setLoading(true);
    dispatch(setCloneOfferId(id));
    localStorage.setItem('dest', id);
    cloneOffer();
  }

  const cloneOffer = async() => {
    const destId = localStorage.getItem('dest');

    const payload: CloneOffer = {
      sourceMerchantItemID: data.sourceMerchantItemID,
      destListID: destId!
    };

    try {
      await dispatch(cloneAnOffer(payload));
      added();
      close();
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onClose={close}>
      <Container>
        {loading ? <LogoLoader /> : <ShareWrapper>
          <SpaceBetweenHeader align="center">
            <ColText>
              <h2>Select a Wishlist</h2>
            </ColText>
            <PlainButton underlined onClick={close}>
              Close
            </PlainButton>
          </SpaceBetweenHeader>
          <Clear />
          {list.map((item) => (
            <Text key={item._id} onClick={() => chooseWishlist(item._id)}>{item.title}</Text>
          ))}
        </ShareWrapper>}
      </Container>
    </Modal>
  );
};

export default SelectWishlistModal;
