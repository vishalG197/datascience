import React, { createContext, useContext, useReducer } from 'react';


const initialState = {
  darkMode: false,
  shoppingCart: [],
  
};


const actions = {
  TOGGLE_DARK_MODE: 'TOGGLE_DARK_MODE',
  ADD_TO_CART: 'ADD_TO_CART',
  
};


const dataReducer = (state, action) => {
  switch (action.type) {
    case actions.TOGGLE_DARK_MODE:
      return { ...state, darkMode: !state.darkMode };
    case actions.ADD_TO_CART:
      return { ...state, shoppingCart: [...state.shoppingCart, action.payload] };
    
    default:
      return state;
  }
};


const DataContext = createContext();


export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);


  const toggleDarkMode = () => dispatch({ type: actions.TOGGLE_DARK_MODE });
  const addToCart = (item) => dispatch({ type: actions.ADD_TO_CART, payload: item });
  

  return (
    <DataContext.Provider value={{ state, toggleDarkMode, addToCart  }}>
      {children}
    </DataContext.Provider>
  );
};


export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
};
