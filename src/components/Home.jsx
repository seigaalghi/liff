import React, { Fragment, useContext } from 'react';
import NumberFormat from 'react-number-format';
import { AppContext } from '../context/context';
import Navbar from './Navbar';

const Home = () => {
  const [state, dispatch] = useContext(AppContext);
  return (
    <Fragment>
      <Navbar />
      <div className='home-container'>
        <h1>Food List</h1>
        {state.foods.map((food) => (
          <div className='card' key={food.id}>
            <img src={food.img} alt='img' />

            <h3>{food.name}</h3>
            <h4>
              <NumberFormat
                value={food.price}
                prefix='Rp.'
                suffix=',-'
                thousandSeparator='.'
                decimalSeparator=','
                displayType={'text'}
              />
            </h4>

            <div className='action'>
              <div className='add'>Add to Cart</div>
            </div>
          </div>
        ))}
        <h1>Drink List</h1>
        {state.drinks.map((drink) => (
          <div className='card' key={drink.id}>
            <img src={drink.img} alt='img' />

            <h3>{drink.name}</h3>
            <h4>
              <NumberFormat
                value={drink.price}
                prefix='Rp.'
                suffix=',-'
                thousandSeparator='.'
                decimalSeparator=','
                displayType={'text'}
              />
            </h4>

            <div className='action'>
              <div className='add'>Add to Cart</div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Home;
