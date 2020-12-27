import React, { useEffect, useState, useContext, Fragment } from 'react';
import Landing from './components/Landing';
import { AppContext } from './context/context';
import './App.scss';
import Home from './components/Home';

const App = () => {
  const [state] = useContext(AppContext);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    console.log(state);
  }, [state]);

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
    setTimeout(() => isReady(), 1500);
  }, []);
  return !ready ? (
    <h3>Loading</h3>
  ) : (
    <Fragment>{window.liff.isLoggedIn() ? <Home /> : <Landing />}</Fragment>
  );
};

export default App;
