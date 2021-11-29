import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useContextAuth } from '../hooks/AuthContext';

import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import ListUsers from '../pages/admin/ListUsers';
import SaveTypes from '../pages/admin/SaveTypes';

import SaveDocuments from '../pages/user/SaveDocuments';

import User from '../pages/admin/User';
import Exit from '../components/Exit';

const AppRoutes: React.FC = () => {
  const { user } = useContextAuth();

  if (user && user.isAdmin) {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact={true} component={Dashboard} />
          <Route path="/dashboard" exact={true} component={Dashboard} />
          <Route path="/admin/users-list" exact={true} component={ListUsers} />
          <Route path="/admin/user/:id" exact={true} component={User} />
          <Route path="/admin/save-types" exact={true} component={SaveTypes} />
          <Route path="/exit" exact={true} component={Exit} />
        </Switch>
      </Layout>
    );
  }

  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true} component={Dashboard} />
        <Route path="/dashboard" exact={true} component={Dashboard} />
        <Route
          path="/user/save-documents"
          exact={true}
          component={SaveDocuments}
        />
        <Route path="/exit" exact={true} component={Exit} />
      </Switch>
    </Layout>
  );
};

export default AppRoutes;
