import { useEffect, useState } from 'react';
import { ContributorLayout } from '../../../../layout';
import {
  AvatarThing,
  Name,
  Profile,
  ProfileWrapper,
  // SocialsWrapper,
  UserWishlist,
} from './styles';
// import { ReactComponent as WhatsappIcon } from '../../../../assets/img/icons/color-whatsapp.svg';
// import { ReactComponent as FacebookIcon } from '../../../../assets/img/icons/color-facebook.svg';
// import { ReactComponent as TwitterIcon } from '../../../../assets/img/icons/color-twitter.svg';
import { TabPane } from '../../../../components/Tabs';
import {
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
} from '../../../beneficiary/pages/Wallet/styles';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStoreState } from '../../../../store/types';
import { getUserProfile } from './redux/actions';
import { useParams } from 'react-router-dom';
import { PageLoader, WishCard } from '../../../../components';
import { NotFound } from '../../../marketing/pages';
import { WishlistGrid } from '../../../beneficiary/pages/Wishlist/styles';
import { WishList } from '../../../../typings/appState';
import {
  removeArchivedGiftsInWishList,
  removeDeletedGifts,
} from '../../../../utils/helpers';

const fallbackImage = '/assets/birthday.jpg';

type UsernameParams = {
  username: string;
};

const User = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [wishlistData, setWishlistData] = useState<WishList[]>([]);

  const dispatch = useDispatch();
  const { username } = useParams<UsernameParams>();

  const {
    data: { wishlist, user },
    isLoading,
  } = useSelector((state: GlobalStoreState) => state.userProfile);

  useEffect(() => {
    dispatch(getUserProfile(username));
  }, [dispatch, username]);

  useEffect(() => {
    if (wishlist) {
      removeArchivedGiftsInWishList(wishlist);
      removeDeletedGifts(wishlist);
    }
    setWishlistData(wishlist);
  }, [wishlist]);

  const handleChangeTab = (index: number) => {
    setCurrentTab(index);
    // OTHER ACTIONS HERE
  };

  return isLoading ? (
    <PageLoader />
  ) : user ? (
    <ContributorLayout>
      <div className="container noBottom-padding">
        <ProfileWrapper>
          <AvatarThing>
            <div className="img-holder">
              <img src={user.avatar || '/assets/avatar.png'} alt="avatar" />
            </div>
          </AvatarThing>
          <Profile>
            <Name>
              <p className="name">
                {user.firstname} {user.lastname}
              </p>
              <p className="username">@{user.username}</p>
            </Name>
            {/* <SocialsWrapper>
              <p>SOCIALS</p>
              <div className="socials">
                <a
                  href="https://instagram.com/unboxdgifts"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://whatsapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsappIcon />
                </a>
                <a
                  href="https://twitter.com/unboxdgifts"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon />
                </a>
              </div>
            </SocialsWrapper> */}
          </Profile>
        </ProfileWrapper>
        <UserWishlist>
          <Tabs className="tabs">
            <TabList>
              <TabPane
                title="Events"
                isActive={currentTab === 0}
                onChangeTab={() => handleChangeTab(0)}
              />
              <TabPane
                title="Items"
                isActive={currentTab === 1}
                onChangeTab={() => handleChangeTab(1)}
              />
            </TabList>

            <TabPanels>
              {currentTab === 0 ? (
                <TabPanel>
                  {wishlistData ? (
                    <WishlistGrid>
                      {wishlistData?.map((wish: WishList) => (
                        <WishCard
                          key={wish._id}
                          title={wish.title}
                          wishCount={wish.gifts.length}
                          imgSrc={wish.coverImage || fallbackImage}
                          eventUrl={`/@${username}/${wish.slug}`}
                        />
                      ))}
                    </WishlistGrid>
                  ) : (
                    <p>This User has no wishlist</p>
                  )}
                </TabPanel>
              ) : (
                <TabPanel>
                  <p>This User has no wishlist</p>
                  {/* {data && data.wishlist ? (
                    <WishlistGrid>
                      {data.wishlist?.map((wish: WishList) => (
                        <WishCard
                          key={wish._id}
                          title={wish.title}
                          wishCount={wish.gifts.length}
                          imgSrc={wish.coverImage || fallbackImage}
                          click={() => openList(wish.slug)}
                        />
                      ))}
                    </WishlistGrid>
                  ) : (
                    'This User has no wishlists'
                  )} */}
                </TabPanel>
              )}
            </TabPanels>
          </Tabs>
        </UserWishlist>
      </div>
    </ContributorLayout>
  ) : (
    <NotFound />
  );
};

export default User;
