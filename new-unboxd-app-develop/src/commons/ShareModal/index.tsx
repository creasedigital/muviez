import React, { useRef, useState } from 'react';
import { SpaceBetweenHeader } from '../UtilityStyles/Flex';
import { PlainButton } from '../../components/Button/styles';
import Modal from '../../components/Modal/ImageModal';
import {
  ShareWrapper,
  ShareText,
  ShareUrl,
  SocialIcon,
  SocialOptions,
  FShare,
  WShare,
  TShare,
  CopyShare,
  Container,
  WelcomeNote,
  ShareBottomWrapper,
  WelcomeBtnActions,
  ShadowOverlay,
} from './styles';
import { WishList } from '../../typings/appState';
import toast from 'react-hot-toast';
import Loader from '../LogoLoader';
import { useDispatch } from 'react-redux';
import { updateWishlist } from '../../views/beneficiary/pages/Wishlist/redux/actions';

interface ComponentProps {
  show: boolean;
  close: () => void;
  wishlist: WishList;
}

const copyUrl = async (url: string) => {
  try {
    await navigator.clipboard.writeText(url);
    toast.success('Copied to clipboard');
  } catch (err) {
    return err;
  }
};

const shareToFacebook = (url: string, title: string) => {
  const encodedUrl = encodeURIComponent(url);
  const facebookSharer = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${title}`;

  window.open(facebookSharer, '_blank');
};

const shareToWhatsapp = (url: string, title: string) => {
  const encodedUrl = encodeURIComponent(url + ' \n\n' + title);
  const whatsappSharer = `whatsapp://send?text=${encodedUrl}`;

  window.open(whatsappSharer, '_blank');
};

const shareToTwitter = (url: string, title: string) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const twitterSharer = `https://www.twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;

  window.open(twitterSharer, '_blank');
};

const ShareEventModal = ({ show, close, wishlist }: ComponentProps) => {
  const dispatch = useDispatch();

  const username = localStorage.getItem('username');
  const eventUrl = `${process.env.REACT_APP_DOMAIN_NAME}@${username}/${wishlist.slug}`;

  const [data, setData] = useState({
    welcomeNote: wishlist?.welcomeNote || '',
    thankYouNote: wishlist?.thankYouNote || '',
  });

  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [showThis, setShowThis] = useState(false);
  const [writeNote, setWriteNote] = useState(false);

  const whatisRef = useRef<HTMLDivElement>(null);
  const shareButtomRef = useRef<HTMLDivElement>(null);
  const actionButtomRef = useRef<HTMLDivElement>(null);
  const writeNewRef = useRef<HTMLTextAreaElement>(null);
  const writeNoteRef = useRef<HTMLSpanElement>(null);
  const showThisRef = useRef<HTMLSpanElement>(null);

  const writeNew = () => {
    setWriteNote(!writeNote);
    setDisabled(!writeNewRef.current?.disabled);
    if (
      !writeNote &&
      shareButtomRef.current &&
      actionButtomRef.current &&
      writeNoteRef.current &&
      showThisRef.current
    ) {
      actionButtomRef.current.style.display = 'flex';
      shareButtomRef.current.style.display = 'flex';
      writeNoteRef.current.style.zIndex = '20';
      showThisRef.current.style.zIndex = '20';
    }

    if (
      writeNote &&
      shareButtomRef.current &&
      actionButtomRef.current &&
      writeNoteRef.current &&
      showThisRef.current
    ) {
      actionButtomRef.current.style.display = 'none';
      shareButtomRef.current.style.display = 'none';
      writeNoteRef.current.style.zIndex = '0';
      showThisRef.current.style.zIndex = '0';
    }
  };

  const closeEditor = () => {
    setLoading(false);
    setDisabled(true);
    setShowThis(false);
    setWriteNote(false);

    if (
      whatisRef.current &&
      shareButtomRef.current &&
      actionButtomRef.current &&
      showThisRef.current &&
      writeNoteRef.current
    ) {
      actionButtomRef.current.style.display = 'none';
      shareButtomRef.current.style.display = 'none';
      showThisRef.current.style.zIndex = '0';
      whatisRef.current.style.display = 'none';
      writeNoteRef.current.style.zIndex = '0';
    }
  };

  const showWhatIs = () => {
    setShowThis(!showThis);
    if (
      !showThis &&
      whatisRef.current &&
      shareButtomRef.current &&
      actionButtomRef.current &&
      showThisRef.current
    ) {
      actionButtomRef.current.style.display = 'flex';
      shareButtomRef.current.style.display = 'flex';
      showThisRef.current.style.zIndex = '20';
      whatisRef.current.style.display = 'flex';
    }
    if (
      showThis &&
      whatisRef.current &&
      shareButtomRef.current &&
      actionButtomRef.current &&
      showThisRef.current
    ) {
      actionButtomRef.current.style.display = 'none';
      shareButtomRef.current.style.display = 'none';
      showThisRef.current.style.zIndex = '0';
      whatisRef.current.style.display = 'none';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const saveNote = async () => {
    const type = 'edit';

    const payload = new FormData();

    payload.append('welcomeNote', data.welcomeNote || wishlist.welcomeNote!);
    payload.append('thankYouNote', data.thankYouNote || wishlist.thankYouNote!);

    if (!data.welcomeNote) {
      return toast.error('Welcome note is empty');
    }

    if (!data.thankYouNote) {
      return toast.error('Thank you note is empty');
    }

    setLoading(true);
    dispatch(updateWishlist(payload, type, wishlist._id!));

    setDisabled(true);
    setWriteNote(false);
    setLoading(false);
  };

  const handleClose = () => {
    setLoading(false);
    setDisabled(true);
    setShowThis(false);
    setWriteNote(false);
    // setData({
    //   welcomeNote: '',
    //   thankYouNote: '',
    // });
    if (
      whatisRef.current &&
      shareButtomRef.current &&
      actionButtomRef.current &&
      showThisRef.current &&
      writeNoteRef.current
    ) {
      actionButtomRef.current.style.display = 'none';
      shareButtomRef.current.style.display = 'none';
      showThisRef.current.style.zIndex = '0';
      whatisRef.current.style.display = 'none';
      writeNoteRef.current.style.zIndex = '0';
    }
    close();
  };

  return (
    <Modal show={show} onClose={close}>
      <Container>
        <ShareWrapper>
          {loading ? (
            <Loader />
          ) : (
            <>
              <SpaceBetweenHeader align="center">
                <h2>Share Wishlist</h2>
                <PlainButton underlined onClick={handleClose}>
                  Close
                </PlainButton>
              </SpaceBetweenHeader>
              <WelcomeNote>
                <p className="title">Welcome note</p>
                <textarea
                  defaultValue={
                    data?.welcomeNote ? data.welcomeNote : wishlist.welcomeNote
                  }
                  maxLength={340}
                  disabled={disabled}
                  autoFocus
                  ref={writeNewRef}
                  name="welcomeNote"
                  onChange={handleChange}
                ></textarea>
                <p className="title">Thank you note</p>
                <textarea
                  defaultValue={
                    data?.thankYouNote
                      ? data.thankYouNote
                      : wishlist.thankYouNote
                  }
                  maxLength={340}
                  disabled={disabled}
                  autoFocus
                  ref={writeNewRef}
                  name="thankYouNote"
                  onChange={handleChange}
                ></textarea>
                <div className="nb" ref={whatisRef}>
                  <p>
                    When you share your wishlist with loved ones, youur welcome
                    note is what they first see before getting into your
                    wishlist.
                  </p>
                </div>
                <WelcomeBtnActions>
                  <ShadowOverlay ref={actionButtomRef}></ShadowOverlay>
                  <span
                    ref={writeNoteRef}
                    onClick={writeNote ? saveNote : writeNew}
                  >
                    {writeNote ? 'save note' : 'edit note'}
                  </span>
                  <span
                    ref={showThisRef}
                    onClick={writeNote ? closeEditor : showWhatIs}
                  >
                    {writeNote
                      ? 'cancel'
                      : showThis
                      ? 'okay, close'
                      : "what's this?"}
                  </span>
                </WelcomeBtnActions>
              </WelcomeNote>
              <ShareBottomWrapper>
                <ShadowOverlay ref={shareButtomRef}></ShadowOverlay>
                <ShareText>Choose a sharing option</ShareText>
                <ShareUrl>{eventUrl}</ShareUrl>
                <SocialOptions>
                  <SocialIcon onClick={() => copyUrl(eventUrl)}>
                    <CopyShare />
                    Copy Link
                  </SocialIcon>
                  <SocialIcon
                    onClick={() => shareToWhatsapp(eventUrl, wishlist.title)}
                  >
                    <WShare />
                    WhatsApp
                  </SocialIcon>
                  <SocialIcon
                    onClick={() => shareToTwitter(eventUrl, wishlist.title)}
                  >
                    <TShare />
                    Twitter
                  </SocialIcon>
                  <SocialIcon
                    onClick={() => shareToFacebook(eventUrl, wishlist.title)}
                  >
                    <FShare />
                    Facebook
                  </SocialIcon>
                </SocialOptions>
              </ShareBottomWrapper>
            </>
          )}
        </ShareWrapper>
      </Container>
    </Modal>
  );
};

export default ShareEventModal;
