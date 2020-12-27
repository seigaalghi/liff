import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => {
  useEffect(() => {
    window.liff.init({
      liffId: '1655315643-O6DqdDE8',
    });
  }, []);
  return (
    <Route
      {...rest}
      render={(props) =>
        !window.liff.isLoggedIn() ? <Redirect to='/login' /> : <Component {...props} />
      }
    />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default PrivateRoute;
