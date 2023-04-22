import { useCallback, useState } from 'react';
import ImageModal from '../../components/Modal/ImageModal';
import { Button, Container, FileInput, FileLabel } from './styles';
import UnsplashModal from './unsplash';

interface ComponentProps {
  show: boolean;
  fromGallery: (file: File) => void;
  fromUnsplash: (imageUrl: string) => void;
  close: () => void;
}

const ImageUploadModal = ({
  show,
  fromGallery,
  fromUnsplash,
  close,
}: ComponentProps) => {
  const [unsplashModal, setUnsplashModal] = useState(false);

  const changeFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target && e.target.files) {
        fromGallery(e.target.files[0]);
      }
    },
    [fromGallery]
  );

  const selectImage = useCallback(
    (url: string) => {
      setUnsplashModal(false);
      fromUnsplash(url);
    },
    [fromUnsplash]
  );

  const closeModals = useCallback(() => {
    setUnsplashModal(false);
    close();
  }, [close]);

  return (
    <>
      <ImageModal show={show} onClose={close}>
        <Container className="container">
          <FileLabel htmlFor="file">
            Choose from gallery
            <FileInput
              name="file"
              type="file"
              id="file"
              accept="image/png, image/jpeg"
              onChange={changeFile}
            />
          </FileLabel>
          <Button onClick={() => setUnsplashModal(true)}>
            Search on Unsplash
          </Button>
        </Container>
      </ImageModal>

      <UnsplashModal
        show={unsplashModal}
        selectImage={selectImage}
        close={closeModals}
      />
    </>
  );
};

export default ImageUploadModal;
