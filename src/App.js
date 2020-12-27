import React, { useEffect, useState, useContext } from 'react';
import Landing from './components/Landing';
import { AppContext } from './context/context';
import './App.scss';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  const [state, dispatch] = useContext(AppContext);
  useEffect(() => {
    if (window.liff) {
      window.liff
        .init({
          liffId: '1655315643-O6DqdDE8',
        })
        .then(async () => {
          if (window.liff.isLoggedIn()) {
            const profile = await window.liff.getProfile();
            dispatch({
              type: 'LOGIN',
            });
            dispatch({
              type: 'LOAD_PROFILE',
              payload: profile,
            });
          }
        });
    }
  }, [window, window.liff]);

  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Landing} exact path='/login' />
        <PrivateRoute component={Home} exact path='/' />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
