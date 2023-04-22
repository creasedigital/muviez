import { List as ListLink, Modal } from '../../../../../../components';
import { Category } from '../../../../../../typings/appState';

interface ComponentProps {
  show: boolean;
  goBack: () => void;
  category: Category;
  select: (headline: string) => void;
}

const HeadlinesModal: React.FC<ComponentProps> = ({
  show,
  goBack,
  category,
  select,
}) => {
  return (
    <Modal show={show} onClose={goBack}>
      <Modal.Header goBack={goBack}>
        <h2>{category.name}</h2>
      </Modal.Header>
      <Modal.Main>
        <ListLink
          text="A new beginning with the LOML😍"
          onClick={() => select('A new beginning with the LOML😍')}
        />
        <ListLink
          text="A new beginning with the LOML😍"
          onClick={() => select('A new beginning with the LOML😍')}
        />
        <ListLink
          text="A new beginning with the LOML😍"
          onClick={() => select('A new beginning with the LOML😍')}
        />
        <ListLink
          text="A new beginning with the LOML😍"
          onClick={() => select('A new beginning with the LOML😍')}
        />
      </Modal.Main>
    </Modal>
  );
};

export default HeadlinesModal;
