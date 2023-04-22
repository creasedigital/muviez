import React, { lazy } from 'react';
import { PageHeading } from '../../../../commons/Heading';
import { HomeComponentProps } from './types';

import {
  Paragraph,
  UnboxdCarousel,
  GetStarted,
  UnorderedList,
  StatsArea,
  HowItWorks,
  StepTitle,
  StepContent,
} from './styles';
import { BTNLink } from '../../../../components/Button/styles';

const Layout = lazy(() => import('../../../../layout/Marketing'));

const Home: React.FC<HomeComponentProps> = () => {
  const steps = [
    {title: 'Create Wishlist', content: 'With unboxd, you can do more than a bland list on notes. You can add image, price and description'},
    {title: 'Share Around', content: 'You get a customized link to share your wish on any social platform of choice'},
    {title: 'Request Payout', content: 'Whether you have raised all that you need or part of it, your money is sent to your local account when you request for it'},
  ];

  const tabs = [
    { name: 'new home', active: false, icon: '🏛' },
    { name: 'social cause', active: false },
    { name: 'birthday', active: false },
    { name: 'graduation', active: true, icon: '🎉' },
    { name: 'anniversary', active: false },
    { name: 'wedding', active: false },
    { name: 'new business', active: false },
  ];

  const stats = [
    { number: '500k', text: 'naira, raised so far', icon: '🎉' },
    {
      number: '40+',
      text: 'successfully onboarded users and counting',
      icon: '🥳',
    },
    { number: '50+', text: 'wishlists created monthly', icon: '❤️' },
  ];

  return (
    <Layout>
      <div className="container">
        <PageHeading centered large>
          Gather funds for the things you need
        </PageHeading>

        <Paragraph className="text-center">
          List it, share it, and receive cash contributions from your loved
          ones.
        </Paragraph>

        <UnboxdCarousel>
          <div className="carousel"></div>
          <div className="bottom-overlay"></div>
          <GetStarted>
            <BTNLink to="/register">Try Unboxd</BTNLink>
          </GetStarted>
        </UnboxdCarousel>

        <HowItWorks>
          <div className="contentContainer">
            <PageHeading centered>How it works</PageHeading>
            <UnorderedList>
              {steps.map((step, index) => (
                <li key={index + 1}>
                  <span>{index + 1}</span>
                  <div>
                    <StepTitle>{step.title}</StepTitle>
                    <StepContent>{step.content}</StepContent>
                  </div>
                </li>
              ))}
            </UnorderedList>
          </div>
        </HowItWorks>

        <StatsArea>
          <div className="contentContainer">
            <div className="content-stat">
              <PageHeading centered>Unboxd is growing</PageHeading>
              <Paragraph className="text-center-left">
                We are dedicated to making sure you can gather funds easily
              </Paragraph>
              <ul>
                {stats.map((stat, index) => (
                  <li key={index}>
                    <h1>{stat.number}</h1>
                    <p>
                      {stat.text} {stat.icon}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="image-stat"></div>
          </div>
        </StatsArea>

        <UnboxdCarousel>
          <div className="carousel-tab">
            <ul>
              {tabs.map((item, index) => (
                <li
                  key={index}
                  className={item.active ? 'active list-item' : 'list-item'}
                >
                  {item.name} {item.active ? item.icon : null}
                </li>
              ))}
            </ul>
          </div>
        </UnboxdCarousel>
      </div>
    </Layout>
  );
};

export default Home;
