import React from 'react';
import api from '../api';
import { toast } from 'react-toastify';

interface IsignIn {
  username: string;
  isAdmin: boolean;
  pass?: string;
  registration: string;
}

type AuthContextProps = {
  logged: boolean;
  signIn({ username, isAdmin, pass, registration }: IsignIn): any;
  signOut(): any;
  loading: boolean;
  user: any;
};

const AuthContext = React.createContext<AuthContextProps>(
  {} as AuthContextProps,
);

const AuthProvider: React.FC = ({ children }) => {
  const [logged, setLogged] = React.useState(false);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [user, setUser] = React.useState<IsignIn>();

  React.useEffect(() => {
    const token = localStorage.getItem('@school-academy:token');
    const user = localStorage.getItem('@school-academy:user');
    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(
        token,
      )}`;
      setUser(JSON.parse(user));
      setLogged(true);
    }
    setLoading(false);
  }, []);

  async function signIn({
    username,
    isAdmin,
    pass,
    registration,
  }: IsignIn): Promise<any> {
    setLoading(true);
    await api
      .post('/sessions', {
        username,
        isAdmin,
        password: pass,
        registration,
      })
      .then((response) => {
        if (response && response.data) {
          let { token, user } = response.data;
          localStorage.setItem('@school-academy:token', JSON.stringify(token));
          localStorage.setItem('@school-academy:user', JSON.stringify(user));
          api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          setLogged(true);
          setUser(user);
          setLoading(false);
          return true;
        }
      })
      .catch((error) => {
        if (error && error.response) {
          let { message } = error.response.data;
          toast.error(message);
          setLoading(false);
        }
      });
    return false;
  }

  function signOut(): any {
    localStorage.removeItem('@school-academy:token');
    localStorage.removeItem('@school-academy:user');
    setLogged(false);
  }

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut, loading, user }}>
      {children}
    </AuthContext.Provider>
  );
};

const useContextAuth = () => {
  const context = React.useContext(AuthContext);
  return context;
};

export { AuthContext, AuthProvider, useContextAuth };
