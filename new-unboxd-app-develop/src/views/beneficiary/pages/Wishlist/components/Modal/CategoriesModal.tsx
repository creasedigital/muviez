import { connect } from 'react-redux';
import { List as ListLink, Modal } from '../../../../../../components';
import { Category } from '../../../../../../typings/appState';

interface ComponentProps {
  show: boolean;
  goBack: () => void;
  categories: Category[];
  select: (category: Category) => void;
}

const CategoriesModal = ({
  show = true,
  goBack,
  categories,
  select,
}: ComponentProps) => {
  const selectCategory = (category: Category) => {
    select(category);
  };

  return (
    <Modal show={show} onClose={goBack}>
      <Modal.Header goBack={goBack}>
        <h2>Headlines</h2>
        <p>Choose category</p>
      </Modal.Header>
      <Modal.Main>
        {categories?.map((cat) => (
          <ListLink
            text={cat.name}
            key={cat._id}
            onClick={() => selectCategory(cat)}
          />
        ))}
      </Modal.Main>
    </Modal>
  );
};

const mapStateToProps = (state: any) => ({
  categories: state.wishlist.categories,
});

export default connect(mapStateToProps)(CategoriesModal);
