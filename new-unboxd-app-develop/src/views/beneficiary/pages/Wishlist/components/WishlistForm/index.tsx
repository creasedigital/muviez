import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import slugify from 'slugify';

import { DashboardLayout } from '../../../../../../layout';
import { DashboardContainer } from '../../../../../../layout/Dashboard/styles';
import {
  ImageUploadModal,
  LogoLoader,
  PageBottom,
} from '../../../../../../commons';
import { SpaceBetween } from '../../../../../../commons/UtilityStyles/Flex';
import { Button, Select } from '../../../../../../components';
import { PlainButton } from '../../../../../../components/Button/styles';
import { Category } from '../../../../../../typings/appState';
import {
  WishlistFormProps,
  WishlistParamsType,
} from '../../../../../../typings/params';
import * as services from '../../../../services';
import {
  CoverImage,
  CoverImageWrapper,
  DatePickerWrapper,
  HeadlineInput,
  ImageHolder,
} from '../../styles';
import { CategoriesModal, HeadlinesModal } from '../Modal';
import { ReactComponent as LogoEmblem } from '../../../../../../assets/img/logo/logo_emblem.svg';
import {
  generateYears,
  months,
  getDaysInMonth,
  splitDate,
} from '../../../../../../utils/helpers/date';
import { GlobalStoreState } from '../../../../../../store/types';
import { generateCategoriesSelect } from '../../../../../../utils/helpers';
import { setGlobalButtonLink } from '../../../../redux/actions';
import toast from 'react-hot-toast';

enum ModalsIndex {
  NONE = 0,
  CATEGORY = 1,
  HEADLINES = 2,
  IMAGE = 3,
}

const wishlistParams = {
  create: { showBack: false, title: 'Setup Event' },
  edit: { showBack: true, title: 'Edit Event' },
};

interface CategoriesInterface {
  value: string;
  text: string;
}

const WishlistForm = ({
  list,
  getCategories,
  getWishlist,
  type,
}: WishlistFormProps) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState('');
  const [file, setFile] = useState<File | string>('');
  const [category, setCategory] = useState<Category>({ _id: '', name: '' });
  const [categoriesArr, setCategoriesArr] = useState<CategoriesInterface[]>([]);
  const [modal, setModal] = useState(ModalsIndex.NONE);
  const [data, setData] = useState({
    headline: '',
    date: '',
    note: '',
  });
  const [isAdded, setIsAdded] = useState<{ slug: string; _id: string }>();
  const [date, setDate] = useState({
    day: new Date().getDay(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });
  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const { slug } = useParams<WishlistParamsType>();
  const history = useHistory();
  const dispatch = useDispatch();

  const { categories } = useSelector(
    (state: GlobalStoreState) => state.wishlist
  );

  useEffect(() => {
    const data = generateCategoriesSelect(categories);
    setCategoriesArr(data);
  }, [categories]);

  useEffect(() => {
    if (slug && type === 'edit') {
      if (!list || list.slug !== slug) {
        getWishlist && getWishlist(slug);
      } else {
        setImage(list.coverImage);
        setFile(list.coverImage);
        setData({
          headline: list.title,
          date: list.date,
          note: list.description || '',
        });

        const dateObj = splitDate(new Date(list.date));
        setDate(dateObj);
        setCategory(list.categoryID);
      }
    }
  }, [type, slug, list, getWishlist]);

  const selectCategory = useCallback((cat: Category) => {
    setCategory(cat);
    setModal(ModalsIndex.HEADLINES);
  }, []);

  const selectHeadline = useCallback(
    (headline: string) => {
      setData({ ...data, headline });
      setModal(ModalsIndex.NONE);
    },
    [data]
  );

  const fromGallery = useCallback((file: File) => {
    setFile(file);
    setImage(URL.createObjectURL(file));
    setModal(ModalsIndex.NONE);
  }, []);

  const fromUnsplash = useCallback((imageUrl: string) => {
    setImage(imageUrl);
    setFile(imageUrl);
    setModal(ModalsIndex.NONE);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const closeModals = () => setModal(ModalsIndex.NONE);

  const enteredValidHeadline = data.headline.trim() !== '';

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    if (!enteredValidHeadline) {
      const message = 'Headline cannot be empty';
      setLoading(false);
      toast(message);
      return;
    }

    const submitData = {
      date: `${date.year}-${date.month}-${date.day}`,
      slug: slugify(data.headline, {
        replacement: '-',
        lower: true,
        strict: true,
        locale: 'en',
      }),
    };

    const payload = new FormData();

    payload.append('title', data.headline);
    payload.append('categoryID', category && category._id);
    payload.append('coverImage', file);
    payload.append('description', data.note);
    payload.append('date', submitData.date);
    payload.append('slug', submitData.slug);

    const [err, result] = await services.createOrEditWishlist(
      payload,
      type,
      list?._id
    );
    setLoading(false);

    if (err) {
      return err;
    }

    if (result) {
      setIsAdded(result);
    }

    if (type === 'edit' && slug && getWishlist) {
      getWishlist(result.slug);
    }
  };

  useEffect(() => {
    if (isAdded) {
      const nextUrl =
        type === 'create'
          ? `/wishlist/${isAdded?.slug}/add-gift?new=true`
          : `/wishlist/${isAdded?.slug}`;
      dispatch(
        setGlobalButtonLink(
          `/wishlist/${isAdded?.slug}/add-gift`,
          isAdded?._id!
        )
      );
      history.push(nextUrl);
    }
  }, [dispatch, history, slug, isAdded, type]);

  const handleCategorySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory((prev) => ({
      ...prev,
      _id: e.target.value,
      name: e.target[e.target.selectedIndex].innerText,
    }));
  };
  const handleYearSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDate((prev) => ({ ...prev, year: parseInt(e.target.value) }));
  };
  const handleMonthSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDate((prev) => ({ ...prev, month: parseInt(e.target.value) }));
  };
  const handleDaySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDate((prev) => ({ ...prev, day: parseInt(e.target.value) }));
  };

  return (
    <>
      <DashboardLayout
        pageTitle={wishlistParams[type]['title']}
        showBack={wishlistParams[type]['showBack']}
        hideWalletSection={type === 'edit'}
      >
        {categories?.length > 0 ? (
          <>
            <DashboardContainer noMinHeight>
              {image ? (
                <CoverImageWrapper>
                  <CoverImage src={image} alt="cover photo" />
                  <span
                    className="change-image"
                    onClick={() => setModal(ModalsIndex.IMAGE)}
                  >
                    Change cover image
                  </span>
                </CoverImageWrapper>
              ) : (
                <ImageHolder onClick={() => setModal(ModalsIndex.IMAGE)}>
                  <LogoEmblem />
                  Choose cover image
                </ImageHolder>
              )}

              <SpaceBetween>
                <HeadlineInput
                  placeholder="Name your wishlist"
                  value={data.headline}
                  name="headline"
                  onChange={handleChange}
                  autoFocus
                />
                {!data.headline && (
                  <PlainButton
                    onClick={() => setModal(ModalsIndex.CATEGORY)}
                    style={{ padding: 0, paddingTop: '5px' }}
                  >
                    See examples
                  </PlainButton>
                )}
              </SpaceBetween>
              <p className="tiny-section-header">
                What type of event are you creating a wishlist for?
              </p>
              <Select
                id="categories"
                items={categoriesArr}
                label="Event type"
                defaultValue={category?._id}
                handleChange={handleCategorySelect}
                required
              />
              <p className="tiny-section-header">When is it happening?</p>
              <DatePickerWrapper>
                <Select
                  id="year"
                  items={generateYears(new Date(), 10)}
                  label="Year"
                  handleChange={handleYearSelect}
                  required
                  defaultValue={date.year}
                />
                <Select
                  id="months"
                  items={months}
                  label="Month"
                  handleChange={handleMonthSelect}
                  required
                  defaultValue={date.month}
                  className="month"
                />
                <Select
                  id="day"
                  items={getDaysInMonth(
                    date.month - 1,
                    new Date().getFullYear()
                  )}
                  label="Day"
                  handleChange={handleDaySelect}
                  required
                  defaultValue={date.day}
                />
              </DatePickerWrapper>
            </DashboardContainer>
            <PageBottom>
              <Button
                onClick={handleSubmit}
                loading={loading}
                disabled={loading}
              >
                Save
              </Button>
            </PageBottom>
          </>
        ) : (
          <LogoLoader />
        )}
      </DashboardLayout>

      <CategoriesModal
        show={modal === ModalsIndex.CATEGORY}
        goBack={() => setModal(ModalsIndex.NONE)}
        select={selectCategory}
      />

      {category && (
        <HeadlinesModal
          show={modal === ModalsIndex.HEADLINES}
          goBack={() => setModal(ModalsIndex.CATEGORY)}
          category={category}
          select={selectHeadline}
        />
      )}

      <ImageUploadModal
        show={modal === ModalsIndex.IMAGE}
        fromGallery={fromGallery}
        fromUnsplash={fromUnsplash}
        close={closeModals}
      />
    </>
  );
};

export default WishlistForm;
