import { createContext, useState, useReducer } from "react";

const CartContext = createContext([]);

import React from "react";

const cartReducer = (cart, action) => {
  switch (action.type) {
    case "addItem": {
      let newCart;

      // Checar se o item já existe no carrinho
      const existisInCart = cart?.some(
        (productItem) => productItem.id === action.item.id
      );

      // if (!existisInCart) {
      //   newCart = [...cart, action.item];
      // }
      // if (existisInCart) {
      //   // Licao de casa! Alterar a quantidade de items do carrinho adicionando a quantidade vinda do action.item
      // }

      newCart = [...cart, action.item];

      console.log({ existisInCart });

      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    }

    case "removeItem": {
      const filteredCart = cart.filter(
        (product) => product.id !== action.productId
      );
      localStorage.setItem("cart", JSON.stringify(filteredCart));
      return filteredCart;
    }

    case "changeItemQuantity": {
      const mapperCart = cart.map((product) => {
        if (product.id !== action.product.id) {
          return product;
        }
        if (product.id === action.product.id) {
          return {
            ...product,
            quantity: action.product.newQuantity,
          };
        }
      });

      localStorage.setItem("cart", JSON.stringify(mapperCart));
      return mapperCart;
    }

    case "resetCart": {
      localStorage.setItem("cart", JSON.stringify([]));
      return [];
    }

    default:
      break;
  }
};

const initiliazeState = () => {
  return JSON.parse(localStorage.getItem("cart"));
};

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initiliazeState() || []);

  return (
    <CartContext.Provider
      value={{
        cart,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
