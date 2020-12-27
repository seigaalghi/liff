import React, { useContext } from 'react';
import { AppContext } from '../context/context';

const Cart = () => {
  const [state, dispatch] = useContext(AppContext);
  return (
    <div>
      {state.food.map((fod) => (
        <div className='card' key={fod.id}>
          <img src={fod.img} alt='img' />

          <h3>{fod.name}</h3>
          <h4>
            <NumberFormat
              value={fod.price}
              prefix='Rp.'
              suffix=',-'
              thousandSeparator='.'
              decimalSeparator=','
              displayType={'text'}
            />
          </h4>

          <div className='action'>
            <div className='add' onClick={() => addFood(fod)}>
              Add to Cart
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
