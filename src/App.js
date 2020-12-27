import React, { useEffect, useState, useContext, Fragment } from 'react';
import Landing from './components/Landing';
import { AppContext } from './context/context';
import './App.scss';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  const [state, dispatch] = useContext(AppContext);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const isReady = async () => {
      try {
        setReady(false);
        await window.liff.init({
          liffId: '1655315643-O6DqdDE8',
        });
        setReady(true);
      } catch (error) {
        console.log(error);
      }
    };
    if (window.liff) {
      isReady();
    }
  }, [window.liff]);

  return !ready ? null : <Fragment>{window.liff.isLoggedIn() ? <Home /> : <Landing />}</Fragment>;
};

export default App;
