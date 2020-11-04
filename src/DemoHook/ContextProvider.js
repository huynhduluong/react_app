import React, { createContext, useReducer } from "react";

export const context = React.createContext();
const initialCart = [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "addCart":
      let cartUpdate = [...state];
      let index = cartUpdate.findIndex((itemCart) => {
        return itemCart.id === action.item.id;
      });
      if (index !== -1) {
        cartUpdate[index].quantity += 1;
      } else {
        const itemCart = { ...action.item, quantity: 1 };
        cartUpdate.push(itemCart);
      }
      return cartUpdate;

    default:
      break;
  }
  return [...state];
};

export default function ContextProvider(props) {
  let [cart, dispatch] = useReducer(cartReducer, initialCart);
  const store = {
    cartReducer: [cart, dispatch],
  };
  return <context.Provider value={store}>{props.children}</context.Provider>;
}
