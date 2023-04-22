import React from 'react';
import styled from 'styled-components';
import Colors from '../../constants/Colors';

interface SelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  items: Array<{ text: string | number; value: any }>;
  id: string;
  label?: string;
  required?: boolean;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({
  items,
  id,
  label,
  required,
  defaultValue = '',
  handleChange,
  className,
}) => {
  return (
    <SelectWrapper className={className}>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        defaultValue={defaultValue}
        required={required}
        onChange={handleChange}
      >
        <option></option>
        {Array.isArray(items) &&
          items?.map((item) => (
            <option
              key={item.value}
              value={item.value}
              selected={defaultValue === item.value}
            >
              {item.text}
            </option>
          ))}
      </select>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  background: ${(props) => props.theme.appPrimaryColor};
  border-radius: 18px;
  color: ${Colors.yellow};
  flex: 1;
  margin: 5px 5px 5px 0;
  select {
    background: none;
    color: #ffffff;
    font-size: 16px;
    font-family: Averta-CY;
    margin-top: 0.5rem;
    font-weight: 300;
    width: 100%;
    option {
      font-weight: 300;
      color: #000000;
    }
  }
  label {
    font-size: 12px;
  }
`;

export default Select;
