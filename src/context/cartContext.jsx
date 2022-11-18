import { createContext, useReducer, useEffect } from 'react';

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];

    case 'REMOVE_PRODUCT':
      return { user: null };

    case 'INCREMENT_QUANTITY':
      return { user: null };

    case 'DECREMENT_QUANTITY':
      return { user: null };
    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
