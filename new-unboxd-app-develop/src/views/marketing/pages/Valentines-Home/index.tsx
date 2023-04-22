import React, { lazy, useEffect, useState } from 'react';
import { PageHeading } from '../../../../commons/Heading';
import { HomeComponentProps } from './types';

import {
  Container,
  Paragraph,
  Banner,
  ReasonsHeader,
  TestimonialWrapper,
  ReasonsWrapper,
  GetStarted,
} from './style';

import { BTNLink } from '../../../../components/Button/styles';

import Testimonials00 from '../../../../assets/img/testimony-00.png';
import Testimonials01 from '../../../../assets/img/testimony-01.png';
import { MarketingLayout } from '../../../../layout';

const Layout = lazy(() => import('../../../../layout/Marketing'));

const Home: React.FC<HomeComponentProps> = () => {
  const reasons = [
    {
      icon: '🛍️',
      title: 'add any item',
      words:
        'There are no limits to any vendor. Whatever item you have in mind, you can add it to your wishlist with 3 simple fields, item image, name and price.',
    },
    {
      icon: '💰',
      title: 'contributions',
      words:
        'Not everyone can chip in the full sum that you need. With an unboxd wishlist, your loved one can choose to pay in full or in part, leaving room for someone else to top it up. Yaaay! ',
    },
    {
      icon: '🚫',
      title: 'no deductions',
      words:
        'The amount you set for any item on your wishlist is exactly what you get when your contributions are complete. Charges are covered by the contributor.',
    },
    {
      icon: '🚀',
      title: 'accessible wishlist',
      words:
        'It doesn’t matter where you create your wishlist, be it on a PC, Android or iOS device, with your unique link, anyone can access it and make contributions. ',
    },
  ];

  const wants = ["shoe", "phone", "bag", "laptop"];

  const [wantState, setWantState] = useState({ id: 0 }); 

  useEffect(() => {
    const timeout = setInterval(() => {
      let currentState = wantState.id;
      setWantState({ id: currentState + 1 })
    }, 2000)
    return () => clearInterval(timeout);
  }, [wantState.id])

  let textChange = wants[wantState.id % wants.length];

  return (
    <Layout>
      <Container column>
        <Banner>
          <div className="content">
            <PageHeading centered large>
              that <span>{textChange}</span> you want
            </PageHeading>
            <Paragraph className="text-center">
              Put it in a wishlist, share it with your loved ones and collect
              contributions from all of them to buy it.
            </Paragraph>
            <GetStarted>
              <BTNLink roundRadius to="/register">
                create your wish list - it’s free
              </BTNLink>
            </GetStarted>
          </div>
          <div className="banner-img d-flex-center">
            <img src="https://res.cloudinary.com/unboxd/image/upload/v1643933112/unboxd_landing_mockup_1_1_nejujb.gif" alt="banner" />
          </div>
        </Banner>
        <MarketingLayout>
          <div className="container">
            <ReasonsHeader>why use unboxd?</ReasonsHeader>
            <ReasonsWrapper>
              {reasons.map((item, index) => (
                <div className="reasons" key={index}>
                  <div className="icon-wrapper">
                    <span>{item.icon}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.words}</p>
                </div>
              ))}
            </ReasonsWrapper>
          </div>
        </MarketingLayout>
        <TestimonialWrapper>
          <div className="heading">
            <h2 style={{ textAlign: 'center' }}>people love unboxd</h2>
          </div>

          <div className="testimonials">
            <img src={Testimonials00} alt="Testimonials 00" />
            <img src={Testimonials01} alt="Testimonials 01" />
          </div>
        </TestimonialWrapper>
      </Container>
    </Layout>
  );
};

export default Home;
