import { BTN, Spinner } from './styles';
import { ButtonComponentProps } from './types';

const Button: React.FC<ButtonComponentProps> = (props) => {
  return (
    <BTN {...props}>
      {props.loading ? (
        <Spinner>
          <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>
        </Spinner>
      ) : (
        props.children
      )}
    </BTN>
  );
};

export default Button;
