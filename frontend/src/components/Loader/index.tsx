import React from 'react';
import * as S from './styles';

import Loader from 'react-loader-spinner';

interface ILoader {
  active: boolean;
}

const LoaderComponent = ({ active }: ILoader) => {
  return (
    <S.Container>
      {active && (
        <Loader type="Puff" color="#e16e0e" height={100} width={100} />
      )}
    </S.Container>
  );
};

export default LoaderComponent;
