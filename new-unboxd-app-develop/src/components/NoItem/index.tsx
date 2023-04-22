import { NoItemWrap, NoItemCard } from './styles';

const NoItem = () => {
  return (
    <NoItemWrap>
      <NoItemCard></NoItemCard>
      <NoItemCard right></NoItemCard>
      <NoItemCard big></NoItemCard>
      <NoItemCard big right></NoItemCard>
    </NoItemWrap>
  );
};

export default NoItem;
