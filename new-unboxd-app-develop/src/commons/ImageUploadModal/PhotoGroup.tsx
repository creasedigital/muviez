import { PhotoAuthor, PhotoCardImage, PhotoGrid, PhotoThumb } from './styles';
import { Photo, SelectImage } from './types';

const PhotoCard = ({
  photo,
  selectImage,
}: {
  photo: Photo;
  selectImage: SelectImage;
}) => {
  return (
    <PhotoThumb href="#0" onClick={() => selectImage(photo.urls.small)}>
      <PhotoCardImage src={photo.urls.small} alt={photo.description || ''} />
      <PhotoAuthor>
        by{' '}
        <a
          href={photo.user.links.html}
          target="_blank"
          rel="noreferrer noopener"
        >
          @{photo.user.username}
        </a>
      </PhotoAuthor>
    </PhotoThumb>
  );
};

const PhotoGroup = ({
  photos,
  selectImage,
}: {
  photos: Photo[];
  selectImage: SelectImage;
}) => {
  return (
    <PhotoGrid>
      {photos.map((photo) => (
        <PhotoCard photo={photo} selectImage={selectImage} key={photo.id} />
      ))}
    </PhotoGrid>
  );
};

export default PhotoGroup;
