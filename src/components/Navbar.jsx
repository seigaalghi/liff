import React, { useContext } from 'react';
import { AppContext } from '../context/context';

const Navbar = () => {
  const [state, dispatch] = useContext(AppContext);

  const logoutHandler = () => {
    window.liff.logout().then(() => {
      window.location.reload();
    });
  };

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return !state.profile ? null : (
    <div className='navbar-container'>
      <h3>Foody Ways</h3>
      <div className='action'>
        <div className='btn' onClick={logoutHandler}>
          Logout
        </div>
        <div className='btn' onClick={() => dispatch({ type: 'CART_OPEN' })}>
          Cart :{' '}
          {(state.food.length > 0 ? state.food.map((fod) => fod.count).reduce(reducer) : 0) +
            (state.drink.length > 0 ? state.drink.map((drnk) => drnk.count).reduce(reducer) : 0)}
        </div>
        <img src={state.profile.pictureUrl} alt='avatar' />
      </div>
    </div>
  );
};

export default Navbar;
