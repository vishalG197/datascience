import React, { createContext, useContext, useReducer } from 'react';

// Action types
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';

// Initial state
const initialState = {
  items: [],
  total: 0,
};

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price,
      };
    case REMOVE_FROM_CART:
      const updatedItems = state.items.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        items: updatedItems,
        total: state.total - action.payload.price,
      };
    case CLEAR_CART:
      return {
        ...state,
        items: [],
        total: 0,
      };
    default:
      return state;
  }
};

// Create context
const ShoppingCartContext = createContext();


const ShoppingCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const removeFromCart = (item) => {
    dispatch({ type: REMOVE_FROM_CART, payload: item });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <ShoppingCartContext.Provider value={{ state, addToCart, removeFromCart, clearCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};


const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error('useShoppingCart must be used within a ShoppingCartProvider');
  }
  return context;
};

export { ShoppingCartProvider, useShoppingCart };
