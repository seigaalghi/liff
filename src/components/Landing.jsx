import React, { useContext, useEffect } from 'react';
import { useLiff } from 'react-liff';
import { Redirect } from 'react-router-dom';
import { AppContext } from '../context/context';

const Landing = () => {
  const [state, dispatch] = useContext(AppContext);
  const loginHandler = async () => {
    window.liff.login();
  };

  return (
    <div className='landing-container'>
      <h3>Hello... Selamat datang di Food Ways</h3>
      <h4>Disini kami menyediakan makanan dan minuman yang enak enak loh</h4>
      <h4>Untuk memesan silahkan login terlebih dahulu</h4>
      <button className='btn btn-primary' onClick={loginHandler}>
        Login
      </button>
      {window.liff.isInClient() ? (
        <button className='btn btn-danger' onClick={() => window.liff.closeWindow()}>
          Close App
        </button>
      ) : null}
    </div>
  );
};

export default Landing;
