import React, { useContext } from 'react';
import { AppContext } from '../context/context';

const Navbar = () => {
  const [state, dispatch] = useContext(AppContext);
  return !state.profile ? null : (
    <div className='navbar-container'>
      <h1>Foody Ways</h1>
      <div className='action'>
        <div className='cart'>
          <h3>Hai {state.profile.displayName}</h3>
          <h4>Cart : {state.food.length + state.drink.length}</h4>
        </div>
        <img src={state.profile.pictureUrl} alt='avatar' />
      </div>
    </div>
  );
};

export default Navbar;
