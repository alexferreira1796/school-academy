import React from 'react';
import * as S from './styles';

interface IRadio extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Radio: React.FC<IRadio> = ({ label, ...rest }: IRadio) => {
  return (
    <S.Container>
      <S.Label>
        <S.Input type="radio" {...rest} />
        <span>{label}</span>
      </S.Label>
    </S.Container>
  );
};

export default Radio;
