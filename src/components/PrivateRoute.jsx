import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AppContext } from '../context/context';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [state] = useContext(AppContext);

  return (
    <Route
      {...rest}
      render={(props) => (!state.isLogin ? <Redirect to='/login' /> : <Component {...props} />)}
    />
  );
};

export default PrivateRoute;
