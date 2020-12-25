import React, { useContext } from 'react';
import { AppContext } from '../context/context';

const Landing = () => {
  const [state, dispatch] = useContext(AppContext);
  const loginHandler = async () => {
    window.liff.login().then(async () => {
      const profile = await window.liff.getProfile();
      dispatch({
        type: 'LOGIN',
      });
      dispatch({
        type: 'LOAD_PROFILE',
        payload: profile,
      });
    });
  };
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
