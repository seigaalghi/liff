import React, { useContext } from 'react';
import { AppContext } from '../context/context';

const Navbar = () => {
  const [state, dispatch] = useContext(AppContext);
  return (
    <div className='navbar-container'>
      <h1>Foody Ways</h1>
      <div className='action'>
        <div className='cart'>
          <h4>{state.profile.displayName}</h4>
        </div>
        <img src={state.profile.pictureUrl} alt='avatar' />
      </div>
    </div>
  );
};

export default Navbar;
