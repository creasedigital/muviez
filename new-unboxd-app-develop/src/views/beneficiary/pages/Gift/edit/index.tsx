import { useCallback, useEffect, useState } from 'react';
import { NumberFormatValues } from 'react-number-format';
import { connect, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { DashboardLayout } from '../../../../../layout';
import { DashboardContainer } from '../../../../../layout/Dashboard/styles';
import ImageUploadModal from '../../../../../commons/ImageUploadModal';
import PageBottom from '../../../../../commons/PageBottom';
import Button from '../../../../../components/Button';
import Input from '../../../../../components/Input';
import { getGiftItem } from '../redux/actions';
import { getWishlistBySlug } from '../../Wishlist/redux/actions';
import * as services from '../../../services';
import { CoverImage, CoverImageWrapper, ImageHolder } from '../styles';
import { ImageType, ComponentProps } from './types';
import GiftPriceInput from '../../../../../components/Input/GiftPriceInput';
import { addUnboxdFees } from '../../../../../utils/helpers';

const EditGift = ({ gifts, getGift }: ComponentProps) => {
  const { slug, id } = useParams<{ slug: string; id: string }>();
  const history = useHistory();
  const dispatch = useDispatch();
  const [isEdited, setIsEdited] = useState<{ wishlistId: string }>();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    price: '',
    title: '',
    link: '',
    unboxdPrice: '',
  });
  const [showImageModal, setImageModal] = useState(false);
  const [image, setImage] = useState<ImageType>({ file: '', url: '' });

  useEffect(() => {
    const gift = gifts[id!];

    if (gift) {
      setData({
        price: gift?.cost!.toString(),
        unboxdPrice: gift?.totalCost!.toString(),
        title: gift.name,
        link: gift.url!,
      });

      setImage({
        file: gift.imageURL,
        url: gift.imageURL,
      });
    } else {
      getGift(id!);
    }
  }, [id, gifts, getGift]);

  const changePrice = ({ value }: NumberFormatValues) => {
    let uFees = addUnboxdFees(value);
    setData({ ...data, price: value, unboxdPrice: uFees });
  };

  const fromGallery = useCallback((file: File) => {
    setImage({ file, url: URL.createObjectURL(file) });
    setImageModal(false);
  }, []);

  const fromUnsplash = useCallback((imageUrl: string) => {
    setImage({ file: imageUrl, url: imageUrl });
    setImageModal(false);
  }, []);

  const toggleImageModal = useCallback(
    () => setImageModal((prev) => !prev),
    []
  );

  const editGift = async () => {
    setLoading(true);
    const payload = new FormData();

    payload.append('name', data.title);
    payload.append('url', data.link);
    payload.append('cost', data.price);
    payload.append('image', image.file!);

    const [err, result] = await services.updateGift({ data: payload, id: id! });

    dispatch(getWishlistBySlug(slug));

    if (err) {
      return err;
    }

    if (result) {
      setIsEdited(result);
    }
  };

  useEffect(() => {
    if (isEdited) {
      const nextUrl = `/wishlist/${slug}`;
      history.push(nextUrl);
      setLoading(false);
    }
  }, [history, isEdited, slug]);

  return (
    <DashboardLayout pageTitle="Edit item" showBack hideWalletSection>
      <DashboardContainer noMinHeight>
        {image.url ? (
          <CoverImageWrapper>
            <CoverImage src={image.url as string} alt="Cover Image" />
            <span className="change-image" onClick={toggleImageModal}>
              Change Image
            </span>
          </CoverImageWrapper>
        ) : (
          <ImageHolder />
        )}

        <Input
          label="What do you need?"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        {/* <Input
          label="Do you have a link to the item? enter here"
          value={data.link}
          onChange={(e) => setData({ ...data, link: e.target.value })}
        /> */}
        <GiftPriceInput
          label="Price"
          value={data.price}
          unboxdValue={data.unboxdPrice}
          onChange={changePrice}
        />
      </DashboardContainer>
      <PageBottom>
        <Button onClick={editGift} loading={loading} disabled={loading}>
          Save
        </Button>
      </PageBottom>
      <ImageUploadModal
        show={showImageModal}
        fromGallery={fromGallery}
        fromUnsplash={fromUnsplash}
        close={toggleImageModal}
      />
    </DashboardLayout>
  );
};

const mapStateToProps = (state: any) => ({
  gifts: state.gifts.data,
});

const mapDispatchToProps = (dispatch: any) => ({
  getGift: (id: string) => dispatch(getGiftItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditGift);
