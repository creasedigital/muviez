import { PageHeading, PageHeadingNormal } from '../../../../commons/Heading';
import { MarketingLayout } from '../../../../layout';
import { Clear, Text } from '../styles';

const Story = () => {
  return (
    <MarketingLayout>
      <div className="container pad-sides">
        <PageHeading centered large>
          Our Story
        </PageHeading>
        <Clear />
        <PageHeadingNormal>💍 A WEDDING WAS COMING UP</PageHeadingNormal>
        <Text>In 2020, Ridwan and Zuliat were getting married</Text>
        <Clear />

        <PageHeadingNormal>🎁 THEY NEEDED A WISHLIST</PageHeadingNormal>
        <Text>
          Their friends and family wanted to get them gifts and support in
          whatever way
        </Text>
        <Clear />

        <PageHeadingNormal>📱 RESEARCH FIRST</PageHeadingNormal>
        <Text>
          Ridwan and Zuliat researched a couple of platforms that they could use
          to list the things they need and share with loved ones
        </Text>
        <Clear />

        <PageHeadingNormal>🚫 VENDOR LIMIT</PageHeadingNormal>
        <Text>
          They found some apps but they were limited to listing only the items
          being sold by vendors on those platforms
        </Text>
        <Clear />

        <PageHeadingNormal>👎 NO PART CONTRIBUTION</PageHeadingNormal>
        <Text>
          Also, people won’t be able to contribute small amounts based on what
          they could afford
        </Text>
        <Clear />

        <PageHeadingNormal>👨🏾 BUILD A SOLUTION</PageHeadingNormal>
        <Text>Tech bro, Tolu decided to build an app to solve the problem</Text>
        <Clear />

        <PageHeadingNormal>💪🏽 LEVERAGE BACKGROUND</PageHeadingNormal>
        <Text>
          We leveraged our technical backgrounds to quickly do product
          documentation, map out user flow, iterate on the user experience,
          design wireframes and build the app
        </Text>
        <Clear />

        <PageHeadingNormal>🚀 MVP LAUNCH</PageHeadingNormal>
        <Text>
          In a few weeks, the app was ready. Ridwan and Zuliat created their
          wishlist and shared with their friends and family
        </Text>
        <Clear />

        <PageHeadingNormal>💰 MONEY RAIN</PageHeadingNormal>
        <Text>
          The loved ones saw the list and contributed what they could. Ridwan
          and Zuliat withdrew the money and used it to buy the things listed on
          their wishlist.
        </Text>
        <Clear />

        <PageHeadingNormal>😍 BUILD FOR PEOPLE</PageHeadingNormal>
        <Text>
          The people that contributed for Ridwan and Zuliat asked to be able to
          use the platform too.
          <br />
          <br />
          The requests increased for various occasions like birthdays,
          engagement, graduation etc. so we decided to build it further and make
          it open for other people to use.
        </Text>
        <Clear />
      </div>
    </MarketingLayout>
  );
};

export default Story;
