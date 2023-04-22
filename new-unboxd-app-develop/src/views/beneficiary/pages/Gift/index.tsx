import { useCallback, useEffect, useState } from 'react';
import { NumberFormatValues } from 'react-number-format';
import { connect, useSelector } from 'react-redux';
// import { useParams } from 'react-router';
import { DashboardLayout } from '../../../../layout';
import { DashboardContainer } from '../../../../layout/Dashboard/styles';
import { ImageUploadModal } from '../../../../commons';
import { PageBottom, Transaction } from '../../../../commons';
import { Button, Input, Tab } from '../../../../components';
import PriceInput from '../../../../components/Input/price';
import { getGiftItem } from './redux/actions';
import {
  CoverImage,
  ImageHolder,
  ImageWrapper,
  UploadButton,
  Total,
  TotalAmount,
} from './styles';
import { ComponentProps, ImageState } from './types';
import { GlobalStoreState } from '../../../../store/types';
// import { SlugParams } from '../../../../typings/params';

const tabs = ['Edit details', 'Contributors'];
enum tabIndex {
  edit,
  contibutors,
}

const TotalContribution = () => {
  return (
    <Total>
      <TotalAmount>
        <span>Amount raised</span>
        <p>₦ 84,000.00</p>
      </TotalAmount>
    </Total>
  );
};

const Gift = ({ gifts, getGift }: ComponentProps) => {
  const { id } = useSelector((state: GlobalStoreState) => state.beneficiary);
  // const { slug } = useParams<SlugParams>();
  const [image, setImage] = useState<ImageState>({
    modal: false,
    file: '',
    url: '',
  });
  const [data, setData] = useState({ price: '', title: '' });
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const gift = gifts[id!];

    if (gift) {
      setData({
        price: gift?.cost!.toString(),
        title: gift.name,
      });

      setImage((prev) => ({
        modal: prev.modal,
        file: gift.coverImage,
        url: gift.coverImage,
      }));
    } else {
      getGift(id!);
    }
  }, [id, gifts, getGift]);

  const fromGallery = useCallback((file: File) => {
    setImage({ file, url: URL.createObjectURL(file), modal: false });
  }, []);

  const fromUnsplash = useCallback((imageUrl: string) => {
    setImage({ file: imageUrl, url: imageUrl, modal: false });
  }, []);

  const toggleImageModal = useCallback(
    () => setImage((prev) => ({ ...prev, modal: !prev.modal })),
    []
  );

  const changePrice = ({ value }: NumberFormatValues) =>
    setData({ ...data, price: value });

  const changeActive = useCallback((tab: number) => setActiveTab(tab), []);

  return (
    <DashboardLayout pageTitle="Add Item" showBack hideWalletSection>
      <DashboardContainer>
        {image.url ? (
          <ImageWrapper>
            <CoverImage src={image.url} alt="Cover Image" />
            <UploadButton color="white" onClick={toggleImageModal}>
              Upload new
            </UploadButton>
          </ImageWrapper>
        ) : (
          <ImageHolder />
        )}
        <Tab active={activeTab} tabs={tabs} change={changeActive} />
        {activeTab === tabIndex.edit && (
          <>
            <Input
              label="What do you need?"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />

            <PriceInput
              label="Price"
              value={data.price}
              onChange={changePrice}
            />
          </>
        )}

        {activeTab === tabIndex.contibutors && (
          <>
            <Transaction />
            <Transaction />
            <Transaction />
          </>
        )}
      </DashboardContainer>
      <ImageUploadModal
        show={image.modal}
        fromGallery={fromGallery}
        fromUnsplash={fromUnsplash}
        close={toggleImageModal}
      />

      <PageBottom>
        {activeTab === tabIndex.edit && <Button>Save</Button>}
        {activeTab === tabIndex.contibutors && <TotalContribution />}
      </PageBottom>
    </DashboardLayout>
  );
};

const mapStateToProps = (state: any) => ({
  gifts: state.gifts.data,
});

const mapDispatchToProps = (dispatch: any) => ({
  getGift: (id: string) => dispatch(getGiftItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gift);
