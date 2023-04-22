import shortid from 'shortid';
import { SpaceBetween } from '../../../../../../commons/UtilityStyles/Flex';
import {
  ExplainerNav,
  ExplainerContent,
  ExplainerHeader,
  ExplainerWrapper,
  ExplainerButton,
} from '../../styles';

interface ComponentProps {
  active: number;
  goToNext: () => void;
  finish: () => void;
}

const explainers = [
  {
    title: 'Archive',
    text: 'You can edit the details of an item or delete it.',
  },
  {
    title: 'Edit',
    text: 'You can edit the details of an item or delete it.',
  },
  {
    title: 'Share',
    text: 'Get your loved ones to see what you need with a link.',
  },
  {
    title: 'Wallet',
    text: 'See how much your loved ones has contributed.',
  },
];

const ExplainerModal = ({ active, goToNext, finish }: ComponentProps) => {
  const activeExplainer = explainers[active];
  return (
    <ExplainerWrapper>
      <ExplainerHeader>
        {explainers.map((exp, index) => (
          <ExplainerNav key={shortid.generate()} active={active === index}>
            {exp.title}
          </ExplainerNav>
        ))}
      </ExplainerHeader>
      <ExplainerContent>
        <SpaceBetween>
          <h3>{activeExplainer.title}</h3>
          <span>
            {active + 1} of {explainers.length}
          </span>
        </SpaceBetween>
        <p>{activeExplainer.text}</p>
        {active < explainers.length - 1 ? (
          <ExplainerButton onClick={goToNext}>Next</ExplainerButton>
        ) : (
          <ExplainerButton onClick={finish}>Okay, got it!</ExplainerButton>
        )}
      </ExplainerContent>
    </ExplainerWrapper>
  );
};

export default ExplainerModal;
