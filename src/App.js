import liff from '@line/liff/dist/lib/liff';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [profile, setProfile] = useState({});
  const [isLogin, setisLogin] = useState(false);
  useEffect(() => {
    window.liff
      .init({
        liffId: '1655315643-O6DqdDE8',
      })
      .then(async () => {
        if (window.liff.isLoggedIn()) {
          const user = await window.liff.getProfile();
          setisLogin(true);
          setProfile(user);
        }
      });
  }, []);

  const loginHandler = async () => {
    window.liff
      .login()
      .then(() => setProfile(window.liff.getProfile()))
      .then(() => setisLogin(true));
  };

  return (
    <div className='App'>
      {!isLogin ? (
        <button onClick={loginHandler}>Login</button>
      ) : (
        <div>
          <h1>Hello {profile.displayName}</h1>
        </div>
      )}
    </div>
  );
};

export default App;
