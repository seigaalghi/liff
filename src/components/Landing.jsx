import React, { useContext, useEffect } from 'react';
import { useLiff } from 'react-liff';
import { Redirect } from 'react-router-dom';
import { AppContext } from '../context/context';

const Landing = () => {
  const [state, dispatch] = useContext(AppContext);
  const loginHandler = async () => {
    window.liff.login();
  };

  if (window.liff.isLoggedIn()) {
    return <Redirect to='/' />;
  }

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
