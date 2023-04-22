import { useEffect, useState } from 'react';
import { createApi } from 'unsplash-js';
import { Input } from '../../components';
import { ModalComponentProps } from './types';
import { PageHeadingSmall } from '../Heading';
import { Photo } from './types';
import PhotoGroup from './PhotoGroup';
import ImageModal from '../../components/Modal/ImageModal';
import { Container } from './styles';
import LogoLoader from '../LogoLoader';
import toast from 'react-hot-toast';

const unsplashApi = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY as string,
});

const UnsplashModal = ({ show, selectImage, close }: ModalComponentProps) => {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getImages = () => {
      setLoading(true);
      unsplashApi.search
        .getPhotos({
          query,
          orientation: 'landscape',
          perPage: +process.env.REACT_APP_UNSPLASH_PER_PAGE! as number,
        })
        .then((result) => {
          if (result.response) {
            setPhotos(result.response!.results);
            setLoading(false);
          } else if (result.status === 401) {
            toast.success('An error occured. Kindly try again later');
          }
        })
        .catch((err) => {
          toast.error(err.message);
        });
    };

    if (query) {
      const debounce = setTimeout(getImages, 1000);

      setLoading(false);
      return () => clearTimeout(debounce);
    }
  }, [query]);

  return (
    <ImageModal show={show} onClose={close} unsplash>
      <Container className="container">
        <PageHeadingSmall centered color="white">
          Unsplash
        </PageHeadingSmall>
        <Input
          label="Search for an image"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="unsplash-input"
        />
        {!loading ? (
          <PhotoGroup photos={photos} selectImage={selectImage} />
        ) : (
          <LogoLoader />
        )}
      </Container>
    </ImageModal>
  );
};

export default UnsplashModal;
