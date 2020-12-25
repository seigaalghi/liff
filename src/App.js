import React, { useEffect, useState } from 'react';

const App = () => {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    window.liff
      .init({
        liffId: '1655315643-O6DqdDE8',
      })
      .then(async () => {
        window.liff.login();
      })
      .then(async () => {
        const user = await window.liff.getProfile();
        setProfile(user);
      });
  }, []);
  return (
    <div className='App'>
      <h1>Hello {profile.displayName}</h1>
    </div>
  );
};

export default App;
