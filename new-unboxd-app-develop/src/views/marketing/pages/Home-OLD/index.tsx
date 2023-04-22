import React, { lazy } from 'react';
import { PageHeading } from '../../../../commons/Heading';
import { HomeComponentProps } from './types';

import {
  Container,
  Paragraph,
  GetStarted,
  Banner,
  StepWrapper,
  Step,
  PillsSection,
  Pill,
  StorySection,
  ProductHunt,
} from './style';

import { BTNLink } from '../../../../components/Button/styles';

import BannerIllustration from '../../../../assets/img/illustrations/banner.svg';
import mockup1 from '../../../../assets/img/illustrations/mockup1.svg';
import mockup2 from '../../../../assets/img/illustrations/mockup2.svg';
import mockup3 from '../../../../assets/img/illustrations/mockup3.svg';
import mockup4 from '../../../../assets/img/illustrations/mockup4.svg';
import { Link } from 'react-router-dom';

const Layout = lazy(() => import('../../../../layout/Marketing'));

const Home: React.FC<HomeComponentProps> = () => {
  const steps = [
    {
      title: 'Create Wishlist',
      content: 'List your wishes with pictures and prices',
    },
    {
      title: 'Receive Contributions',
      content: 'Your loved ones can contribute part or full amount you need',
    },
    {
      title: 'Personalised Greetings',
      content: 'Customise a welcome note for your loved ones',
    },
    {
      title: 'Withdraw Money',
      content: 'Monitor contributions and withdraw from your wallet',
    },
  ];

  const pills = [
    { icon: '🎂', name: 'Birthdays' },
    { icon: '👰🏼', name: 'Wedding' },
    { icon: '👶🏽', name: 'New Baby' },
    { icon: '🎓', name: 'Graduation' },
    { icon: '🎁', name: 'Others' },
    { icon: '🏠', name: 'New Home' },
    { icon: '💍', name: 'Engagement' },
    { icon: '🎊', name: 'Anniversary' },
  ];

  return (
    <Layout>
      <Container column>
        <Banner>
          <div className="content">
            <PageHeading centered large>
              Part or full contributions for the things you need
            </PageHeading>
            <Paragraph className="text-center">
              Create a wishlist and share it with loved ones to receive
              contributions to purchase the items you need.
            </Paragraph>
            <GetStarted>
              <BTNLink to="/register">Try Unboxd</BTNLink>
            </GetStarted>
          </div>
          <div className="banner-img d-flex-center">
            <img src={BannerIllustration} alt="banner" />
          </div>
        </Banner>

        <StepWrapper>
          {steps.map((step, index) => (
            <Step bg={index + 1} key={index}>
              <h4>{step.title}</h4>
              <p>{step.content}</p>
              <img
                src={
                  index === 0
                    ? mockup1
                    : index === 1
                    ? mockup2
                    : index === 2
                    ? mockup3
                    : mockup4
                }
                alt={step.title}
              />
            </Step>
          ))}
        </StepWrapper>

        <PillsSection>
          <h2>list your needs for any ocassion</h2>
          <div className="wrapper">
            {pills.map((item, index) => (
              <Pill key={index}>
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Pill>
            ))}
          </div>
        </PillsSection>

        <StorySection>
          <p>
            Unboxd was created to solve the unique need of a couple and is now
            being used by others
            <Link to="/story">Read our story ➝</Link>
          </p>
        </StorySection>

        <ProductHunt
          href="https://www.producthunt.com/posts/unboxd?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-unboxd"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=314357&theme=light"
            alt="Unboxd - Get loved ones to buy the things on your wish list  | Product Hunt"
            width="250"
            height="54"
          />
        </ProductHunt>
      </Container>
    </Layout>
  );
};

export default Home;
