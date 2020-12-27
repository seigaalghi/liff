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
    if (window.liff) {
      window.liff
        .init({
          liffId: '1655315643-O6DqdDE8',
        })
        .then(() => {
          if (window.liff.isLoggedIn()) {
            return <Redirect to='/' />;
          }
        });
    }
  }, [window.liff]);

  return (
    <div className='landing-container'>
      <button className='btn btn-primary' onClick={loginHandler}>
        Login
      </button>
      <button className='btn btn-success'>Close App</button>
    </div>
  );
};

export default Landing;
