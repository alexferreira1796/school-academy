import React from 'react';
import * as S from './styles';
import ContentHeader from '../../../components/ContentHeader';
import Input from '../../../components/Forms/Input';
import Button from '../../../components/Forms/Button';

import api from 'api';
import { toast } from 'react-toastify';
import TableGeneric from 'components/TableGeneric';
import Loader from 'components/Loader';

import {
  removeSpecialCharacters,
  formatHours,
} from '../../../utils/formatHours';
import HoursInput from 'components/HoursInput';

interface IResponse {
  id: string;
  name: string;
  hours: string;
}

const SaveTypes: React.FC = () => {
  const [type, setType] = React.useState<string>('');
  const [hours, setHours] = React.useState<string>();
  const [dataTypes, setDataTypes] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [loadingList, setLoadingList] = React.useState(true);

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    if (type && type.trim() !== '' && hours && hours.trim() !== '') {
      await api
        .post('/types', {
          name: type,
          hours: removeSpecialCharacters(hours),
        })
        .then((response) => {
          if (response && response.data) {
            toast.success(response.data.message);
            setLoading(false);
            setType('');
            loadTypes();
          }
        })
        .catch((error) => {
          toast.error('Falha ao salvar o tipo de pesquisa');
          console.log(error);
        });
    }
  }

  React.useEffect(() => {
    loadTypes();
  }, []);

  async function loadTypes() {
    await api
      .get('/types')
      .then((response) => {
        if (response && response.data) {
          let { data } = response;
          data = data.map(({ id, name, hours }: IResponse) => {
            return {
              id,
              name,
              hours: formatHours(hours),
            };
          });
          setDataTypes(data);
          setLoadingList(false);
          setHours('');
        }
      })
      .catch((error) => {
        toast.error('Falha ao carregar os tipos de pesquisa');
        console.log(error);
      });
  }

  return (
    <S.Container>
      <ContentHeader title="Cadastrar Tipos" lineColor="#e16e0e" />

      <S.Form onSubmit={handleSubmit}>
        <S.FormField>
          <label>
            Nome do tipo
            <Input
              placeholder="Ex: Ensino"
              value={type}
              onChange={({ target }) => setType(target.value)}
            />
          </label>
          <label>
            Horas padronizadas
            <HoursInput
              type="text"
              value={hours}
              onChange={({ target }: any) => setHours(target.value)}
            />
          </label>
        </S.FormField>

        <S.FormField>
          <Button type="submit" disabled={loading}>
            {' '}
            {loading ? 'Aguarde...' : 'Cadastrar'}
          </Button>
        </S.FormField>
      </S.Form>
      <ContentHeader title="Lista de tipos" lineColor="#e16e0e" />
      <Loader active={loadingList} />
      {!loadingList && dataTypes.length > 0 && (
        <>
          <TableGeneric
            columns={['Nome', 'Horas']}
            section="types"
            list={dataTypes}
          />
        </>
      )}
      {!loadingList && dataTypes.length <= 0 && <p>Lista vazia</p>}
    </S.Container>
  );
};

export default SaveTypes;
