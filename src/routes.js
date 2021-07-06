import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from './Context/AuthContext';

import Home from './logged_out/Main';
import Logged from './logged_in/Main';

// eslint-disable-next-line react/prop-types
function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
    return <h1>LOADING...</h1>;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} />;
}

export default function Routes() {
  return (
    <Switch>
      <CustomRoute
        exact
        path="/"
        component={Home}
      />
      <CustomRoute
        isPrivate
        exact
        path="/users"
        component={Logged}
      />
    </Switch>
  );
}
