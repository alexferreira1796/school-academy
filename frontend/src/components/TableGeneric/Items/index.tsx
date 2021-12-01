import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

import { toast } from 'react-toastify';
import api, { baseURL } from '../../../api';
import { useContextUpdate } from '../../../hooks/UpdateContext';

import { removeSpecialCharacters } from '../../../utils/formatHours';
import HoursInput from 'components/HoursInput';

interface IItems {
  data: {
    id: string;
    namePath?: string;
    name?: string;
    nameFile?: string;
    status: boolean;
    hours?: string;
  };
  section?: string;
}

const Items = ({ data, section, ...rest }: IItems) => {
  const { setUpdate } = useContextUpdate();
  const [hours, setHours] = React.useState<string | undefined>(data.hours);

  function openNewTab(link: string) {
    window.open(link);
  }

  async function handleUpdate(id: string, status: boolean = false) {
    await api
      .put('/documents', {
        id,
        hours: removeSpecialCharacters(hours),
        status,
      })
      .then((response) => {
        if (response && response.data) {
          let { message } = response.data;
          toast.success(message);
          setUpdate(true);
        }
      })
      .catch((error) => {
        if (error && error.data) {
          let { message } = error.response.data;
          toast.error(message);
        }
      });
  }

  return (
    <>
      <S.Tr {...rest}>
        <S.Td data-label="Nome">
          {data.namePath && (
            <Link
              to="#"
              onClick={() =>
                openNewTab(`${baseURL}/documents/tmp/${data.nameFile}`)
              }
            >
              {data.namePath}
            </Link>
          )}
          {data.name && data.name}
        </S.Td>
        {section === 'types' && <S.Td>{data.hours}</S.Td>}
        {section === 'list' && (
          <>
            <S.Td data-label="#">
              <Link to={`/admin/user/${data.id}`}>
                <S.Button>Ver certificados</S.Button>
              </Link>
            </S.Td>
          </>
        )}
        {section === 'user' && (
          <>
            <S.Td data-label="Status">
              <S.Status status={data.status}>
                {data.status ? 'Homologado' : 'Não homologado'}
              </S.Status>
            </S.Td>

            <S.Td data-label="#">
              <HoursInput
                value={hours}
                onChange={({ target }: any) => setHours(target.value)}
                placeholder="00:00"
              />
              <S.Button onClick={() => handleUpdate(data.id, data.status)}>
                Salvar
              </S.Button>
            </S.Td>

            <S.Td data-label="#">
              <S.ContainerActions>
                <Link to="#" onClick={() => handleUpdate(data.id, true)}>
                  <S.Button color="green">Homologar</S.Button>
                </Link>
                <Link to="#">
                  <S.Button
                    color="tomato"
                    onClick={() => handleUpdate(data.id)}
                  >
                    Não homologar
                  </S.Button>
                </Link>
              </S.ContainerActions>
            </S.Td>
          </>
        )}
      </S.Tr>
    </>
  );
};

export default Items;
