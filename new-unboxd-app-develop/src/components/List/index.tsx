import { Link } from './style';

interface ComponentProps {
  url?: string;
  text: string;
  onClick?: () => void;
}

const ListLink = ({ url = '#0', text, onClick = () => {} }: ComponentProps) => {
  return (
    <Link href={url} onClick={onClick}>
      {text}
    </Link>
  );
};

export default ListLink;
