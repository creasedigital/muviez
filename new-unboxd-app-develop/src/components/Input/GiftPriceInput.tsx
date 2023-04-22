import React from 'react';
import PriceInput from './price';
import NumberInput from 'react-number-format';
import { InputComponentProps } from './types';

interface IGiftInput extends InputComponentProps {
  unboxdValue?: string;
}

const GiftPriceInput: React.FC<IGiftInput> = ({ register, ...props }) => {
  return (
    <div className="add-gift-section">
      <PriceInput
        label={props.label}
        value={props.value}
        onChange={props.onChange}
      />
      <div className="calc-unboxd">
        <span>(+) Unboxd fee @ 5%</span>
        <NumberInput
          thousandSeparator
          prefix="₦ "
          value={props.unboxdValue}
          decimalScale={2}
          defaultValue="0.00"
          allowNegative={false}
          placeholder="0.00"
          disabled
        />
      </div>
    </div>
  );
};

export default GiftPriceInput;
