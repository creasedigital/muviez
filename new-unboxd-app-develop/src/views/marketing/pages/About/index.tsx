import { Wrapper, Header } from './style';
import { ContributorLayout } from '../../../../layout';
import { UnorderedList } from '../Home-OLD/styles';
import { BTNLink } from '../../../../components/Button/styles';

const About = () => {
  const steps = [
    'Create a list with pictures of items you want',
    'Share with loved ones',
    'Receive part or full contributions',
  ];

  return (
    <ContributorLayout>
      <Wrapper>
        <Header>
          Unboxd helps you gather funds for the things you need in 3 simple
          steps.
        </Header>
        <UnorderedList>
          {steps.map((step, index) => (
            <li key={index + 1}>
              <span>{index + 1}</span>
              {step}
            </li>
          ))}
        </UnorderedList>
        <BTNLink to="/register">Create your wishlist now</BTNLink>
      </Wrapper>
    </ContributorLayout>
  );
};

export default About;
