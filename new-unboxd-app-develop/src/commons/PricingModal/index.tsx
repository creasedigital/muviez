import { SpaceBetweenHeader } from '../UtilityStyles/Flex';
import { PlainButton } from '../../components/Button/styles';
import Modal from '../../components/Modal/ImageModal';
import { ColText, ShareWrapper, TextHeading, Paragraph, Container, Text, Clear } from './styles';

interface ComponentProps {
  show: boolean;
  close: () => void;
}

const PricingModal = ({ show, close }: ComponentProps) => {
  return (
    <Modal show={show} onClose={close}>
      <Container>
        <ShareWrapper>
          <SpaceBetweenHeader align="center">
            <ColText>
            <h2>Understanding our pricing</h2>
            <Paragraph small>
              Last updated <span>Aug 9, 2021</span>
            </Paragraph>
            </ColText>
            <PlainButton underlined onClick={close}>
              Close
            </PlainButton>
          </SpaceBetweenHeader>
          <Clear />
        <TextHeading>Setup wishlist for free</TextHeading>
          <Text>
          We do not charge you any amount to setup a wishlist for birthdays, weddings, christmas, charity, new born, etc. 
          </Text>
          <Clear />
        <TextHeading>5% charge for contributors</TextHeading>
          <Text>
          If you view your wishlist from the shareable link, you will notice a slight increase in the amount you set. The slight increase is as a result of an addition of 5% to all of your items. This covers the transaction fees and is paid for by people who contribute to your wishlist. This addition helps you get the exact amount you set for each item without any deductions from unboxd. 
          </Text>
          <Text>For example, if you add an item to your wishlist and set the price at N1,000. When you share your wishlist, what your loved ones will see is N1,050. The N50.00 is the 5% addition and it is paid for by your loved ones. 
          </Text>
          <Clear />
        <TextHeading>N100.00 for payout</TextHeading>
          <Text>The first payout from your wallet is free. But subsequent payouts to your local bank account attracts an N100.00 fee. 
          </Text>
          <Clear />
          <Clear />
          <Text>
          If you have any other questions, please us send an email, send a DM on Twitter or call +234 813 4766 1606.
          </Text>
        </ShareWrapper>
      </Container>
    </Modal>
  );
};

export default PricingModal;
