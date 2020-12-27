import { createContext, useReducer } from 'react';
import data from './data.json';

const initialState = {
  ...data,
  isLogin: false,
  profile: {},
  drink: [],
  food: [],
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
      const checkFood = state.drink.find((drnk) => drnk.id === payload.id);
      const newFood = checkFood ? { ...checkFood, count: checkFood.count + 1 } : payload;
      return {
        ...state,
        dood: [...state.dood, newFood],
      };
    case 'ADD_DRINK':
      const checkDrink = state.drink.find((drnk) => drnk.id === payload.id);
      const newDrink = checkDrink ? { ...checkDrink, count: checkDrink.count + 1 } : payload;
      return {
        ...state,
        drink: [...state.drink, newDrink],
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
