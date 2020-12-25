import React, { useEffect, useState, useContext } from 'react';
import Landing from './components/Landing';
import { AppContext } from './context/context';
import './App.scss';

const App = () => {
  const [state, dispatch] = useContext(AppContext);
  useEffect(() => {
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
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);
  return <div>{!state.isLogin ? <Landing /> : 'Home'}</div>;
};

export default App;
