import React from 'react';
import { useParams } from 'react-router-dom';
import * as S from './styles';

import api from 'api';
import { toast } from 'react-toastify';

import Loader from '../../../components/Loader';
import TableGeneric from '../../../components/TableGeneric';
import { useContextUpdate } from '../../../hooks/UpdateContext';

import { maskHours } from '../../../utils/formatHours';

const User: React.FC = () => {
  const { update, setUpdate } = useContextUpdate();

  let { id } = useParams<{ id: string }>();
  const [student, setStudent] = React.useState([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    (async () => {
      await api
        .get(`/documents/${id}`)
        .then((response) => {
          if (response && response.data) {
            let { data } = response;
            let formatted = data.map((item: any) => {
              return {
                ...item,
                hours: maskHours(item.hours),
              };
            });
            setStudent(formatted);
          }
        })
        .catch((error) => {
          toast.error('Falha ao carregar o estudante!');
          console.log(error);
        });

      setLoading(false);
      setUpdate(false);
    })();
  }, [id, update, setUpdate]);

  return (
    <S.Container>
      <Loader active={loading} />
      {!loading && (
        <TableGeneric
          columns={['Aquivo', 'Status', 'Horas Contabilizadas', 'Ações']}
          section="user"
          list={student}
        />
      )}
    </S.Container>
  );
};

export default User;
