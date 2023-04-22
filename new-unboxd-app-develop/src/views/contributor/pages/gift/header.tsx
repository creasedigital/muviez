import { useHistory } from 'react-router';
import {
  Head,
  HeaderTitle,
  Nav,
} from '../../../../layout/Dashboard/styles';

interface ComponentProps {
  title: string;
}

const GiftHeader = ({ title }: ComponentProps) => {
  const history = useHistory();
  const goBack = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <Head>
      <a href="/" onClick={goBack} className="back-arrow">
        ←
      </a>
      <HeaderTitle>{title}</HeaderTitle>
      <Nav></Nav>
    </Head>
  );
};

export default GiftHeader;
