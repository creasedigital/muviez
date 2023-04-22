import { useState } from 'react';
import { InputField, Label } from './styles';
import { InputComponentProps } from './types';

const CTAText = {
  edit: {
    show: 'Edit',
    hide: 'Close',
  },
  password: {
    show: 'Show',
    hide: 'Hide',
  },
};

const Input: React.FC<InputComponentProps> = ({
  register,
  showCallToAction,
  isPassword,
  isEdit,
  isPhone,
  ctaClick,
  ...props
}) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow((prev) => !prev);
  };
  // const [edit, setEdit] = useState(false);
  // const enableEdit = () => {
  //   setEdit((prev) => !prev);
  // }

  //This should probably be a switch
  const CTAType = isEdit ? 'edit' : 'password';
  return (
    <InputField>
      <Label htmlFor={props.id}>{props.label}</Label>
      <div className="input-icon">
        <input
          {...props}
          type={isPassword ? (show ? 'text' : 'password') : props.type}
          inputMode={isPhone ? 'numeric' : 'text'}
          ref={register}
          disabled={isEdit && !show}
          autoComplete="off"
          onBlur={() => setShow(false)}
        />
        {showCallToAction && (
          <span
            className="icon-area"
            onClick={isPassword || isEdit ? handleShow : ctaClick}
          >
            {CTAText[CTAType][show ? 'hide' : 'show']}
          </span>
        )}
      </div>
    </InputField>
  );
};

export default Input;
