import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { AppContext } from '../context/context';

const Landing = () => {
  const [state, dispatch] = useContext(AppContext);
  const loginHandler = async () => {
    window.liff
      .init({
        liffId: '1655315643-O6DqdDE8',
      })
      .then(() => {
        window.liff.login();
      });
  };

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
          return <Redirect to='/' />;
        }
      });
  }, [window.liff]);

  return (
    <div className='landing-container'>
      <button className='btn btn-primary' onClick={loginHandler}>
        Login
      </button>
      <button className='btn btn-success' onClick={() => window.liff.closeWindow()}>
        Close App
      </button>
    </div>
  );
};

export default Landing;
