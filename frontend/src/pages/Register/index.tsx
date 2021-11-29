import React from 'react';
import * as S from './styles';
import api from '../../api';
import { toast } from 'react-toastify';

import { useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';

import Input from '../../components/Forms/Input';
import Button from '../../components/Forms/Button';
import HeaderAuth from 'components/HeaderAuth';
import Radio from 'components/Forms/Radio';

const Register: React.FC = () => {
  const history = useHistory();
  const [name, setName] = React.useState<string>('');
  const [username, setUserName] = React.useState<string>('');
  const [registration, setRegistration] = React.useState<string>('');
  const [pass, setPass] = React.useState<string>('');
  const [type, setType] = React.useState<string>('aluno');
  const [loading, setLoading] = React.useState<boolean>(false);

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    let validate = false;
    if (
      type === 'aluno' &&
      name !== '' &&
      username !== '' &&
      registration !== '' &&
      pass !== ''
    ) {
      validate = true;
    } else if (
      type === 'professor' &&
      name !== '' &&
      username !== '' &&
      pass !== ''
    ) {
      validate = true;
    } else {
      toast.error('Por favor, preencha todos os dados');
    }

    if (validate) {
      setLoading(true);
      await api
        .post('/users', {
          name,
          username,
          isAdmin: type === 'aluno' ? false : true,
          registration,
          password: pass,
        })
        .then((response) => {
          if (response && response.data) {
            if (response.data && response.data) {
              let { message } = response.data;
              toast.success(message);

              setName('');
              setUserName('');
              setRegistration('');
              setPass('');

              history.push('/');
            }
          }
        })
        .catch((error) => {
          toast.error('Esse usuário já existe!');
          if (error && error.data) {
            let { message } = error.response.data;
            toast.error(message);
          }
        });
      setLoading(false);
    }
  }

  function handleChangeRadio(value: any) {
    setType(value);
  }

  return (
    <S.Container>
      <HeaderAuth />

      <S.Form onSubmit={handleSubmit}>
        <S.FormTitle>Registrar</S.FormTitle>

        <S.ContainerRadios>
          <S.Paragraph>Eu sou</S.Paragraph>
          <Radio
            label="Aluno"
            name="options"
            value="aluno"
            checked={type === 'aluno'}
            onChange={({ target }: any) => handleChangeRadio(target.value)}
          />
          <Radio
            label="Professor"
            name="options"
            value="professor"
            checked={type === 'professor'}
            onChange={({ target }: any) => handleChangeRadio(target.value)}
          />
        </S.ContainerRadios>

        <S.ContainerInput>
          <Input
            type="text"
            placeholder="Nome Completo"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <Input
            type="text"
            placeholder="Nome de usuário"
            value={username}
            onChange={({ target }) => setUserName(target.value)}
          />
          {type === 'aluno' && (
            <Input
              type="text"
              placeholder="Número do Registro"
              value={registration}
              onChange={({ target }) => setRegistration(target.value)}
            />
          )}
          <Input
            type="password"
            placeholder="Senha"
            value={pass}
            onChange={({ target }) => setPass(target.value)}
          />
        </S.ContainerInput>

        <Button type="submit" disabled={loading}>
          {loading ? 'Aguarde...' : 'Criar Conta'}
        </Button>

        <S.Paragraph>
          <Link to="/">Já tem uma conta? Clique aqui</Link>
        </S.Paragraph>
      </S.Form>
    </S.Container>
  );
};

export default Register;
