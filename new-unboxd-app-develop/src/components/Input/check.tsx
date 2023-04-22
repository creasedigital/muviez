import { InputField } from './styles';
import { InputComponentProps } from './types';

const CheckInput: React.FC<InputComponentProps> = ({ register, onChange, ...props }) => {
  return (
    <InputField row>
      <p>{props.label}</p>
      <input className="styled-checkbox" id={props.id} onChange={onChange} {...props} ref={register} />
      <label htmlFor={props.id}>{props.label}</label>
    </InputField>
  );
};

export default CheckInput;
