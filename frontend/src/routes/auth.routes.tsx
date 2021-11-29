import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Register from '../pages/Register';

const AuthRoutes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/create-account" exact component={Register} />
  </Switch>
);

export default AuthRoutes;
