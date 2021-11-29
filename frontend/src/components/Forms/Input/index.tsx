import React from 'react';
import * as S from './styles';

// Tipo Input HTML os Elementos o HTML
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  ref?: React.RefObject<HTMLInputElement> | null | undefined;
}

const Input: React.FC<InputProps> = ({ ref, ...rest }) => {
  return <S.Input {...rest} ref={ref} />;
};

export default Input;
