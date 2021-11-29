import React from 'react';
import * as S from './styles';
import ContentHeader from '../../components/ContentHeader';

import { FiClock } from 'react-icons/fi';
import api from 'api';

import { useContextAuth } from '../../hooks/AuthContext';
import { maskHours } from '../../utils/formatHours';

const Dashboard: React.FC = () => {
  const { user } = useContextAuth();
  const [hours, setHours] = React.useState<number>(0);
  const [message, setMessage] = React.useState<string>('');

  React.useEffect(() => {
    (async () => {
      await api
        .get('/documents/hours')
        .then((response) => {
          if (response && response.data) {
            if (response.data && response.data.message) {
              let { message } = response.data;
              setMessage(message);
            } else {
              setHours(response.data);
              setMessage('');
            }
          }
        })
        .catch((error) => {
          if (error && error.data) {
            let { message } = error.response.data;
            setMessage(message);
          }
        });
    })();
  }, []);

  if (user && user.isAdmin) {
    return (
      <S.Container>
        <ContentHeader title="School Academy" lineColor="#e16e0e" />
        <S.Content>
          <S.Paragraph>
            <FiClock />
            Horas homologadas:{' '}
            <S.Hours>
              {message !== '' ? message : `${maskHours(hours)} hrs`}{' '}
            </S.Hours>
          </S.Paragraph>
        </S.Content>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <ContentHeader title="School Academy" lineColor="#e16e0e" />
      <S.Content></S.Content>
    </S.Container>
  );
};

export default Dashboard;
