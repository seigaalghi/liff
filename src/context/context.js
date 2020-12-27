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
      const check = state.drink.find((drnk) => drnk.id === payload.id);
      const newFood = check ? { ...check, count: check.count + 1 } : payload;
      return {
        ...state,
        dood: [...state.dood, newFood],
      };
    case 'ADD_DRINK':
      const check = state.drink.find((drnk) => drnk.id === payload.id);
      const newDrink = check ? { ...check, count: check.count + 1 } : payload;
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
