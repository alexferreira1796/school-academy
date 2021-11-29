import React from 'react';
import * as S from './styles';

interface ISelect extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: {
    value: string;
    label: string;
  }[];
}

const Select = ({ label, options, ...rest }: ISelect) => {
  return (
    <S.Label>
      {label}
      <S.Select {...rest}>
        <option disabled value="" selected>
          Selecionar
        </option>
        {options &&
          options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
      </S.Select>
    </S.Label>
  );
};

export default Select;
