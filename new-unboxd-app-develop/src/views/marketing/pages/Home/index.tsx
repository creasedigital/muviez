import React, { lazy, useState } from 'react';
import { PageHeading } from '../../../../commons/Heading';
import { HomeComponentProps } from './types';

import {SpaceBetween} from '../../../../commons/UtilityStyles/Flex';
import ChristmasBg from '../../../../assets/img/illustrations/christmasbg.svg'

import {
  Container,
  Paragraph,
  Banner,
  ReasonsHeader,
  ChristmasUIWrapper,
  ReasonsWrapper,
  XbuttonLink,
  DemoButton,
  ChristmasBanner,
} from './style';

import { BTNLink } from '../../../../components/Button/styles';

import BannerIllustration from '../../../../assets/img/illustrations/bannerphone.svg';
import ZulaitProfilePics from '../../../../assets/img/illustrations/zuliat.svg';
import { MarketingLayout } from '../../../../layout';
import { Avatar } from '../../../../commons';
import DemoWelcomeModal from './demoWelcomeModal';
import Header from './header';


const Layout = lazy(() => import('../../../../layout/Marketing'));

const Home: React.FC<HomeComponentProps> = () => {
  const [demoModal, setDemoModal] = useState(false);

  const toggleDemoModal = () => setDemoModal((prev) => !prev)
  const reasons = [
    {
      icon: "🛍️",
      title: "add any item",
      words: "There are no limits to any vendor. Whatever item you have in mind, you can add it to your wishlist with 3 simple fields, item image, name and price."
    },
    {
      icon: "💰",
      title: "contributions",
      words: "Not everyone can chip in the full sum that you need. With an unboxd wishlist, your loved one can choose to pay in full or in part, leaving room for someone else to top it up. Yaaay! "
    },
    {
      icon: "🚫",
      title: "no deductions",
      words: "The amount you set for any item on your wishlist is exactly what you get when your contributions are complete. Charges are covered by the contributor."
    },
    {
      icon: "🚀",
      title: "accessible wishlist",
      words: "It doesn’t matter where you create your wishlist, be it on a PC, Android or iOS device, with your unique link, anyone can access it and make contributions. "
    }
  ]

  return (
    <Layout>
      <ChristmasBanner>
        <img src={ChristmasBg} alt="banner"/>
      </ChristmasBanner>
      <Container column>
        <div className="christmasThemeBanner">
        <Header/>
        <Banner>
          <div className='content'>
            <PageHeading centered large>
            Part or full contributions for the things you need
            </PageHeading>
            <Paragraph className='text-center'>
            Create a wishlist and share it with loved ones to receive
              contributions to purchase the items you need.
            </Paragraph>
            <SpaceBetween>
              <XbuttonLink to='/register'>CREATE A WISHLIST</XbuttonLink>
              <DemoButton onClick={toggleDemoModal}>SEE A DEMO WISH lIST</DemoButton>
            </SpaceBetween>

          </div>
          <div className='banner-img d-flex-center'>
            <img src={BannerIllustration} alt='banner' />
          </div>
        </Banner>
        </div>
        <MarketingLayout>
          <div className="container">
          <ReasonsHeader>why use unboxd?</ReasonsHeader>
          <ReasonsWrapper>
            {
              reasons.map((item, index)=>(
                <div className="reasons" key={index}>
                  <div className="icon-wrapper"><span>{item.icon}</span></div>
                  <h3>{item.title}</h3>
                  <p>{item.words}</p>
                </div>
              ))
            }

          </ReasonsWrapper>
          </div>
        </MarketingLayout>
        <ChristmasUIWrapper>
          <h2 style={{textAlign: "center"}}>people love unboxd</h2>
          <p>For my birthday, unboxd helped me show my loved ones
            exactly what I wanted, and the love I received was amazing.
            I got the funds to buy most of the things I wanted.</p>
          <div className='profileWrapper'>
            <Avatar src={ZulaitProfilePics} alt='Zuliat' />
            <div>
              <span className='name'>Zuliat Ibrahim</span><br />
              <span className='handle'>@z.uliat</span>
            </div>
          </div>
        </ChristmasUIWrapper>
        <DemoWelcomeModal show={demoModal} onClose={toggleDemoModal}>
        <h2>hey there</h2>
          <Paragraph>Welcome to the demo wishlist for you to see how Unboxd wishlist looks. Please that all items and prices
            are all dummy data
          </Paragraph>
          <BTNLink to="/demo">Open demo</BTNLink>

        </DemoWelcomeModal>
      </Container>
    </Layout>
  );
};

export default Home;
