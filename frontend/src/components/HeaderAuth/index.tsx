import React from 'react';
import * as S from './styles';
import { MdSchool } from 'react-icons/md';

const HeaderAuth: React.FC = () => {
  return (
    <S.Logo>
      <MdSchool size={40} color="#e16e0e" />
      <h2>School Academy</h2>
    </S.Logo>
  );
};

export default HeaderAuth;
