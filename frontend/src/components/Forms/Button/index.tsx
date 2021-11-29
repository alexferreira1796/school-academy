import React from 'react';
import * as S from './styles';

// Tipo Input HTML os Elementos o HTML
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ color, children, ...rest }) => {
  return (
    <S.Button {...rest} color={color}>
      {children}
    </S.Button>
  );
};

export default Button;
