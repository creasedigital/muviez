import { useCallback, useEffect, useState } from 'react';
import { NumberFormatValues } from 'react-number-format';
import { connect, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { DashboardLayout } from '../../../../../layout';
import { DashboardContainer } from '../../../../../layout/Dashboard/styles';
import { ImageUploadModal, PricingModal } from '../../../../../commons';
import Button from '../../../../../components/Button';
import Input from '../../../../../components/Input';
import GiftPriceInput from '../../../../../components/Input/GiftPriceInput';
import { getWishlistBySlug } from '../../Wishlist/redux/actions';
import * as services from '../../../services';
import { CoverImage, ImageHolder } from '../styles';
import { SlugParams } from '../../../../../typings/params';
import { GlobalStoreState } from '../../../../../store/types';
import { CoverImageWrapper } from '../../Wishlist/styles';
import { addUnboxdFees } from '../../../../../utils/helpers';

interface ImageType {
  file: File | string;
  url?: string;
}

interface ComponentProps {
  getWishlist: (id: string) => void;
}

const AddGift = ({ getWishlist }: ComponentProps) => {
  const [loading, setLoading] = useState(false);
  const { id } = useSelector((state: GlobalStoreState) => state.beneficiary);
  const { slug } = useParams<SlugParams>();
  const history = useHistory();
  const [isAdded, setIsAdded] = useState<{ slug: string }>();
  const [data, setData] = useState({ price: '', title: '', unboxdPrice: '', link: '' });
  const [showImageModal, setImageModal] = useState(false);
  const [pricingModal, setPricingModal] = useState(false);
  const [image, setImage] = useState<ImageType>({ file: '', url: '' });

  const changePrice = ({ value }: NumberFormatValues) => {
    let uFees = addUnboxdFees(value);
    setData({ ...data, price: value, unboxdPrice: uFees });
  };

  const togglePricingModal = () => setPricingModal((prev) => !prev);

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

  const createGift = async () => {
    setLoading(true);
    const payload = new FormData();

    payload.append('name', data.title);
    payload.append('url', data.link);
    payload.append('cost', data.price);
    payload.append('image', image.file);

    const [err, result] = await services.addGift({ data: payload, id: id! });

    if (err) {
      return [err];
    }

    getWishlist(slug);

    if (result) {
      setIsAdded({ slug: slug! });
    }

    setLoading(false);
  };

  useEffect(() => {
    if (isAdded) {
      const nextUrl = `/wishlist/${isAdded?.slug}`;
      history.push(nextUrl);
    }
  }, [history, isAdded]);

  return (
    <DashboardLayout pageTitle="Add item" showBack hideWalletSection>
      <DashboardContainer>
        {image.url ? (
          <CoverImageWrapper>
            <CoverImage src={image.url as string} alt="Cover Image" />
            <span className="change-image" onClick={toggleImageModal}>
              Change Image
            </span>
          </CoverImageWrapper>
        ) : (
          <ImageHolder onClick={toggleImageModal}>
            Upload Item Image
          </ImageHolder>
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
        <Button onClick={createGift} loading={loading} disabled={loading}>
          Add Item
        </Button>
        <div className="add-gift-modal-info">
          <p>
            We add a 5% markup on the price to cover transaction fees.{' '}
            <span onClick={togglePricingModal}>Learn more</span>
          </p>
        </div>
      </DashboardContainer>
      <ImageUploadModal
        show={showImageModal}
        fromGallery={fromGallery}
        fromUnsplash={fromUnsplash}
        close={toggleImageModal}
      />
      <PricingModal
        show={pricingModal}
        close={togglePricingModal}
      />
    </DashboardLayout>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  getWishlist: (slug: string) => dispatch(getWishlistBySlug(slug)),
});

export default connect(null, mapDispatchToProps)(AddGift);
