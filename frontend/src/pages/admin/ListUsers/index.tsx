import React from 'react';
import * as S from './styles';
import api from 'api';

import ContentHeader from '../../../components/ContentHeader';
import List from '../../../components/List';
import Loader from '../../../components/Loader';
import { toast } from 'react-toastify';

const ListUsers: React.FC = () => {
  const [listStudents, setListStudents] = React.useState([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    (async () => {
      await api
        .get('/users/students')
        .then((response) => {
          if (response && response.data) {
            let { data } = response;
            setListStudents(data);
            setLoading(false);
          }
        })
        .catch((error) => {
          toast.error('Falha ao carregar a lista de usuários');
          console.log(error);
        });
    })();
  }, []);

  return (
    <S.Container>
      <ContentHeader title="Lista de Alunos" />
      <S.ContainerList>
        <Loader active={loading} />
        {!loading && <List list={listStudents} />}
      </S.ContainerList>
    </S.Container>
  );
};

export default ListUsers;
