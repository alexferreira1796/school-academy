import React from 'react';
import * as S from './styles';
import ContentHeader from '../../../components/ContentHeader';
import Input from '../../../components/Forms/Input';
import Select from '../../../components/Forms/Select';
import Button from '../../../components/Forms/Button';

import api from 'api';
import { toast } from 'react-toastify';
import { useContextAuth } from 'hooks/AuthContext';

interface ITypes {
  value: string;
  label: string;
}

interface IResponse {
  id: string;
  name: string;
}

interface IDataObject {
  name_file: string;
  userName: string;
  idType: string;
}

const SaveDocuments: React.FC = () => {
  const formRef = React.useRef<any>(null);
  const { user } = useContextAuth();
  const [types, setTypes] = React.useState<ITypes[] | null>(null);
  const [valueType, setValueType] = React.useState('');

  const [file, setFile] = React.useState<string | Blob>('');
  const [fileName, setFileName] = React.useState('');

  const [loading, setLoading] = React.useState(false);
  const [loadingSave, setLoadingSave] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      await api
        .get('/types')
        .then((response) => {
          if (response && response.data) {
            let { data } = response;
            data = data.map(({ id, name }: IResponse) => {
              return {
                value: id,
                label: name,
              };
            });
            setTypes(data);
            setLoading(false);
          }
        })
        .catch((error) => {
          if (error && error.data) {
            toast.error('Falha ao carregar os tipos de pesquisa');
            console.log(error);
          }
        });
    })();
  }, []);

  const saveFile = (e: any) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async (dataObject: any) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', fileName);
    Object.keys(dataObject).forEach((object_info) => {
      formData.append(object_info, dataObject[object_info]);
    });
    await api
      .post('/documents', formData)
      .then((response) => {
        if (response && response.data) {
          let { message } = response.data;
          setFile('');
          setFileName('');
          setValueType('');
          toast.success(message);
        }
      })
      .catch((error) => {
        if (error && error.data) {
          let { message } = error.response.data;
          toast.error(message);
          console.log(error);
        }
      });
    if (formRef !== null) {
      formRef!.current.reset();
    }
    setLoadingSave(false);
  };

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (user) {
      if (
        valueType &&
        valueType.trim() !== '' &&
        fileName &&
        fileName.trim() !== ''
      ) {
        setLoadingSave(true);
        const dataObject: IDataObject = {
          name_file: fileName,
          userName: user.name,
          idType: valueType,
        };
        await uploadFile(dataObject);
      } else {
        toast.error('Por favor, preencha todos os dados!');
      }
    }
  }

  return (
    <S.Container>
      <ContentHeader title="Cadastrar Documentos" lineColor="#e16e0e" />

      <S.Form onSubmit={handleSubmit} ref={formRef}>
        <S.FormField>
          <Input type="file" onChange={saveFile} />
          {types && (
            <Select
              options={types}
              label="Tipo de pesquisa"
              disabled={loading}
              value={valueType}
              onChange={({ target }) => setValueType(target.value)}
            />
          )}
        </S.FormField>

        <S.FormField>
          <Button type="submit">{loadingSave ? 'Aguarde...' : 'Salvar'}</Button>
        </S.FormField>
      </S.Form>
    </S.Container>
  );
};

export default SaveDocuments;
