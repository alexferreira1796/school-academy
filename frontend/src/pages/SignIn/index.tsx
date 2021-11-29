import React from 'react';
import * as S from './styles';
import { toast } from 'react-toastify';

import { Link } from 'react-router-dom';

import Input from '../../components/Forms/Input';
import Radio from '../../components/Forms/Radio';
import Button from '../../components/Forms/Button';

import HeaderAuth from 'components/HeaderAuth';

import { useContextAuth } from '../../hooks/AuthContext';

const SignIn: React.FC = () => {
  const { signIn, loading } = useContextAuth();
  const [username, setUserName] = React.useState<string>('');
  const [registration, setRegistration] = React.useState<string>('');
  const [pass, setPass] = React.useState<string>('');
  const [type, setType] = React.useState<string>('aluno');

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    let validate = false;
    if (type === 'aluno' && registration !== '' && pass !== '') {
      validate = true;
    } else if (type === 'professor' && username !== '' && pass !== '') {
      validate = true;
    } else {
      toast.error('Por favor, preencha todos os dados');
    }

    if (validate) {
      let res = await signIn({
        username,
        isAdmin: type === 'aluno' ? false : true,
        pass,
        registration,
      });
      if (res) {
        setUserName('');
        setRegistration('');
        setPass('');
      }
    }
  }

  function handleChangeRadio(value: any) {
    setType(value);
  }

  return (
    <S.Container>
      <HeaderAuth />
      <S.Form onSubmit={handleSubmit}>
        <S.FormTitle>Entrar</S.FormTitle>

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
          {type === 'professor' && (
            <Input
              type="text"
              placeholder="Nome de usuário"
              value={username}
              onChange={({ target }) => setUserName(target.value)}
            />
          )}
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
            placeholder="****"
            value={pass}
            onChange={({ target }) => setPass(target.value)}
          />
        </S.ContainerInput>

        <Button type="submit" disabled={loading}>
          {loading ? 'Aguarde...' : 'Acessar'}
        </Button>

        <S.Paragraph>
          <Link to="/create-account">Criar conta</Link>
        </S.Paragraph>
      </S.Form>
    </S.Container>
  );
};

export default SignIn;
