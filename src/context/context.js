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
      return {
        ...state,
        food: [...state.food, payload],
      };
    case 'ADD_DRINK':
      return {
        ...state,
        drink: [...state.drink, payload],
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
