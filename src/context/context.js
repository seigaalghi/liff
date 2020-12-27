import { createContext, useReducer } from 'react';
import data from './data.json';

const initialState = {
  ...data,
  isLogin: false,
  profile: {},
  drink: [],
  food: [],
  cart: false,
};

const reducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        isLogin: true,
      };
    case 'LOAD_PROFILE':
      return {
        ...state,
        profile: payload,
      };
    case 'ADD_FOOD':
      const checkFood = state.food.find((fod) => fod.id === payload.id);
      const newFood = checkFood ? { ...checkFood, count: checkFood.count + 1 } : null;
      return {
        ...state,
        food: newFood
          ? state.food.map((fod) => (fod.id === payload.id ? newFood : fod))
          : [...state.food, payload],
      };
    case 'ADD_DRINK':
      const checkDrink = state.drink.find((drnk) => drnk.id === payload.id);
      const newDrink = checkDrink ? { ...checkDrink, count: checkDrink.count + 1 } : null;
      return {
        ...state,
        drink: newDrink
          ? state.drink.map((drnk) => (drnk.id === payload.id ? newDrink : drnk))
          : [...state.drink, payload],
      };
    case 'REMOVE_FOOD':
      return {
        ...state,
        food: state.food
          .map((fod) =>
            fod.id == payload.id ? (fod.count !== 1 ? { ...fod, count: fod.count - 1 } : null) : fod
          )
          .filter((fod) => fod !== null),
      };
    case 'REMOVE_DRINK':
      return {
        ...state,
        drink: state.drink
          .map((fod) =>
            fod.id == payload.id ? (fod.count !== 1 ? { ...fod, count: fod.count - 1 } : null) : fod
          )
          .filter((fod) => fod !== null),
      };
    case 'CART_OPEN':
      return {
        ...state,
        cart: !state.cart,
      };
    default:
      return state;
  }
};

export const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <AppContext.Provider value={[state, dispatch]}>{props.children}</AppContext.Provider>;
};

export const AppContext = createContext();
