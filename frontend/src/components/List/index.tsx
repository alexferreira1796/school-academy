import React from 'react';
import * as S from './styles';

import TableGeneric from '../TableGeneric';

interface IList {
  list: any;
}

const List = ({ list }: IList) => {
  return (
    <S.Container>
      <S.ContainerList>
        <TableGeneric
          columns={['Nome', 'Certificados']}
          section="list"
          list={list}
        />
      </S.ContainerList>
    </S.Container>
  );
};

export default List;
