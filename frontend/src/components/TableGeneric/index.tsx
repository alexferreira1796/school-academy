import React from 'react';
import * as S from './styles';

import Items from './Items';

interface ITableGeneric {
  list: any[];
  columns: string[];
  section?: string;
}

const TableGeneric = ({ list, columns, section }: ITableGeneric) => {
  if (list.length <= 0) {
    return <S.H1>Lista vazia</S.H1>;
  }

  return (
    <>
      <S.Table>
        <S.Thead>
          <S.Tr>
            {columns.map((col, index) => (
              <S.Th scope="col" key={index}>
                {col}
              </S.Th>
            ))}
          </S.Tr>
        </S.Thead>
        <tbody>
          {list &&
            list.length > 0 &&
            list.map((item: any) => {
              return <Items key={item.id} data={item} section={section} />;
            })}
        </tbody>
      </S.Table>
    </>
  );
};

export default TableGeneric;
