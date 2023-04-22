import React from 'react';
import NumberInput from 'react-number-format';
import { InputField, Label } from './styles';
import { InputComponentProps } from './types';

const PriceInput: React.FC<InputComponentProps> = ({ register, ...props }) => {
  return (
    <InputField>
      <Label>{props.label}</Label>
      <div className="input-icon">
        <NumberInput
          thousandSeparator
          prefix="₦ "
          value={props.value}
          onValueChange={props.onChange}
          decimalScale={2}
          defaultValue="0.00"
          allowNegative={false}
        />
      </div>
    </InputField>
  );
};

export default PriceInput;
