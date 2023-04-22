import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
// import { Link, useLocation } from 'react-router-dom';
// import shortid from 'shortid';
import * as V from '../../../../utils/veem';
import { DashboardLayout } from '../../../../layout';
import { DashboardContainer } from '../../../../layout/Dashboard/styles';
import AppState, { WishList } from '../../../../typings/appState';
import * as actions from './redux/actions';
import { Explainer, Hold, NeedText, WishItemsWrapper } from './styles';
import { HoldModal } from './components/Modal';
import ShareEventModal from '../../../../commons/ShareModal';
import { setGlobalButtonLink } from '../../redux/actions';
import { differenceInDays } from 'date-fns';
import { useQuery } from '../../../../hooks';
import { WishlistHeader } from './components';
import { DashboardFilm } from '../Dashboard/styles';
import { GiftList, NoItem } from '../../../../components';
import { useCallback } from 'react';
import { deleteWishlist } from '../../services';

type ParamTypes = {
  id: string;
  slug: string;
};

type ComponentProps = {
  list: WishList | null;
  isLoading: boolean;
  getWishlist: (slug: string) => void;
  new?: boolean;
};

const explainerTextTitle = [
  '',
  'One item added',
  'Two items added',
  'Three items added',
];

// type LocationState = {
//   showIntro?: boolean;
// };

const Wishlist = ({ list, isLoading, getWishlist }: ComponentProps) => {
  const { slug } = useParams<ParamTypes>();
  const query = useQuery();
  const newWishlist = query.get('new');
  // const { state } = useLocation<LocationState>();
  // const [explainer, setExplainer] = useState({
  //   show: state && state.showIntro,
  //   active: 0,
  // });
  const history = useHistory();
  const username = localStorage.getItem('username');
  const dispatch = useDispatch();
  const [shareModal, setShareModal] = useState(false);
  const [holdModal, setHoldModal] = useState(false);

  // const finish = () => setHoldModal(true);

  const toggleShareModal = () => setShareModal((prev) => !prev);
  const toggleHoldModal = () => setHoldModal((prev) => !prev);

  useEffect(() => {
    async function getListDetails() {
      if (!list || list!.slug !== slug) {
        await getWishlist(slug);
      }
    }
    getListDetails();
  }, [list, slug, getWishlist]);

  useEffect(() => {
    if (holdModal) {
      const timer = setTimeout(() => {
        toggleHoldModal();
        toggleShareModal();
        // history.push({
        //   pathname: `/wishlist/${slug}`,
        //   state: { showIntro: true },
        // });
        history.push(`/wishlist/${slug}`);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [holdModal, history, slug]);

  // const navItems = [
  //   newWishlist
  //     ? () => (
  //         <a href="#0" key={shortid.generate()} onClick={finish}>
  //           Finish
  //         </a>
  //       )
  //     : () => <Link to={`/archive/${list!._id}`}>Archive</Link>,
  //   () => <Link to={`/event/edit/${list!._id}`}>Edit</Link>,
  //   () => (
  //     <Link to="#0" onClick={toggleShareModal}>
  //       Share
  //     </Link>
  //   ),
  //   () => <Link to={`/event/wallet/${list!._id}`}>Wallet</Link>,
  // ];

  // const incrementExplainerIndex = () =>
  //   setExplainer(({ active, show }) => ({ active: active + 1, show }));

  // const closeExplainer = () => setExplainer({ active: 0, show: false });

  const renderExplainer = (giftLength: number) => {
    if (giftLength < explainerTextTitle.length) {
      return (
        <Explainer>
          <h3>{explainerTextTitle[giftLength]}</h3>
          <p>
            If you need more things, add to the list by clicking on the plus
            button
          </p>
        </Explainer>
      );
    }

    return null;
  };

  const daysLeft = list ? differenceInDays(new Date(list.date), new Date()) : 1;

  useEffect(() => {
    if (list) {
      dispatch(
        setGlobalButtonLink(`/wishlist/${list.slug}/add-gift`, list._id)
      );
    }
  }, [dispatch, list]);

  const deleteList = useCallback(
    async (id: string) => {
      const [err] = await deleteWishlist(id);
      if (err) {
        return err;
      }

      history.replace('/dashboard');
    },
    [history]
  );

  return list ? (
    <>
      <DashboardLayout
        pageTitle={newWishlist ? 'Add your needs' : ''}
        showBack
        loading={isLoading}
        hideWalletSection
      >
        <DashboardContainer>
          <WishlistHeader
            username={username}
            daysLeft={daysLeft}
            list={list}
            toggleShareModal={toggleHoldModal}
            deleteList={deleteList}
          />
          {newWishlist ? (
            ''
          ) : (
            <NeedText>
              Your wishes <span>{list?.gifts?.length}</span>
            </NeedText>
          )}
          <WishItemsWrapper>
            {newWishlist ? (
              V.isEmpty(list?.gifts!) ? (
                <NoItem />
              ) : (
                <GiftList gifts={list?.gifts!} wishlistId={list?._id!} />
              )
            ) : (
              <GiftList gifts={list?.gifts!} wishlistId={list?._id!} />
            )}
            {list.gifts.length < 6 && <DashboardFilm />}
          </WishItemsWrapper>
        </DashboardContainer>
        {V.isEmpty(list?.gifts!) ? (
          <Explainer>
            <p>
              Populate your list with all that you need. Click plus button to
              add item
            </p>
          </Explainer>
        ) : newWishlist ? (
          renderExplainer(list?.gifts?.length!)
        ) : (
          ''
        )}
        <HoldModal show={holdModal} onClose={toggleHoldModal}>
          <Hold>
            <h2>Please hold on</h2>
            <p>We are setting up your visual list</p>
          </Hold>
        </HoldModal>
      </DashboardLayout>
      {/* {explainer.show && (
        <ExplainerModal
          active={explainer.active}
          goToNext={incrementExplainerIndex}
          finish={closeExplainer}
        />
      )} */}

      {list && (
        <ShareEventModal
          show={shareModal}
          close={toggleShareModal}
          wishlist={list}
        />
      )}
    </>
  ) : null;
};

const mapStateToProps = (state: AppState) => {
  return {
    list: state.wishlist.data,
    isLoading: state.wishlist.isLoading,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getWishlist: (slug: string) => dispatch(actions.getWishlistBySlug(slug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
