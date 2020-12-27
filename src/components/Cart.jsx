import React, { useContext } from 'react';
import { AppContext } from '../context/context';
import NumberFormat from 'react-number-format';

const Cart = () => {
  const [state, dispatch] = useContext(AppContext);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const price =
    (state.food.length > 0 ? state.food.map((fod) => fod.price * fod.count).reduce(reducer) : 0) +
    (state.drink.length > 0 ? state.drink.map((fod) => fod.price * fod.count).reduce(reducer) : 0);
  const checkoutHandler = () => {
    // const food = JSON.stringify(
    //   state.food.map((fod) => ({ Pesanan: fod.name, Jumlah: fod.count }))
    // );
    // const drink = JSON.stringify(
    //   state.drink.map((fod) => ({ Pesanan: fod.name, Jumlah: fod.count }))
    // );
    window.liff.sendMessages([
      {
        type: 'text',
        text: `Hai ${state.profile.displayName}
      Terimakasih telah memesan makanan di Food Ways 
      Berikut rincian pesanannya :
      
      Makanan :
      ${state.food.map((fod) => `${fod.name} Jumlah : ${fod.count}`)}
      minuman :
      ${state.drink.map((fod) => `${fod.name} Jumlah : ${fod.count}`)}

      Pesanan kakak sedang diantar, mohon ditunggu ya..
      Total Pembayaran : ${price}`,
      },
    ]);
  };

  return !state.cart ? null : (
    <div className='cart-container'>
      <div
        className='close'
        onClick={() =>
          dispatch({
            type: 'CART_OPEN',
          })
        }>
        Close
      </div>
      <div className='checkout' onClick={checkoutHandler}>
        Checkout Total : {price}
      </div>
      <h1>Food</h1>
      {state.food.length === 0 ? (
        <h3>No Food in the cart</h3>
      ) : (
        state.food.map((fod) => (
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
              <div
                className='add'
                onClick={() =>
                  dispatch({
                    type: 'ADD_FOOD',
                    payload: fod,
                  })
                }>
                +
              </div>
              <div
                className='remove'
                onClick={() =>
                  dispatch({
                    type: 'REMOVE_FOOD',
                    payload: fod,
                  })
                }>
                -
              </div>
              <div className='count'>Sum : {fod.count}</div>
            </div>
          </div>
        ))
      )}
      <h1>Drink</h1>
      {state.drink.length === 0 ? (
        <h3>No Drink in the cart</h3>
      ) : (
        state.drink.map((fod) => (
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
              <div
                className='add'
                onClick={() =>
                  dispatch({
                    type: 'ADD_DRINK',
                    payload: fod,
                  })
                }>
                +
              </div>
              <div
                className='remove'
                onClick={() =>
                  dispatch({
                    type: 'REMOVE_DRINK',
                    payload: fod,
                  })
                }>
                -
              </div>
              <div className='count'>Sum : {fod.count}</div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
