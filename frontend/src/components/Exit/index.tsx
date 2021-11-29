import React from 'react';

import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../hooks/AuthContext';

const Exit = () => {
  const { signOut } = React.useContext(AuthContext);
  return (
    <>
      {signOut()}
      <Redirect to="/" />
    </>
  );
};

export default Exit;
