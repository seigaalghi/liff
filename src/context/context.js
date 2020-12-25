import { createContext, useReducer } from 'react';
export const AppContext = createContext();

const initialState = {
  isLogin: false,
  profile: {},
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
    default:
      return state;
  }
};

export const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <AppContext.Provider value={[state, dispatch]}>{props.children}</AppContext.Provider>;
};
