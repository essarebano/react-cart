import React, { useEffect, useMemo, useState, useCallback } from "react";
import { CartContext } from "./CartContext";
import { faker } from "@faker-js/faker";

function computeItemTotalPrice(price, quantity) {
  return parseFloat(Math.floor(price) * quantity).toFixed(2);
}

function CartContextProvider({ children, products }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems([]);
  }, [products]);

  const onAddItemToCart = useCallback(
    (productId, productName, productPrice, productMaxCount) => {
      const cartItemProductIds = cartItems.map((data) => data.productId);
      if (cartItemProductIds.includes(productId)) return;
      setCartItems((currentCartItems) => [
        ...currentCartItems,
        {
          id: Number(faker.string.numeric({ length: 5 })),
          productId,
          name: productName,
          price: productPrice,
          maxCount: productMaxCount,
          count: 1
        }
      ]);
    },
    [cartItems]
  );

  const onIncreaseItemCount = useCallback(
    (cartItemId, count) => {
      const cartItemIds = cartItems.map((data) => data.id);
      if (!cartItemIds.includes(cartItemId)) return;
      setCartItems((currentCartItems) =>
        currentCartItems.map((data) => {
          if (data.id === cartItemId) {
            const newCount = count + 1;
            return {
              ...data,
              count: newCount,
              price: computeItemTotalPrice(data.price, newCount)
            };
          }
          return data;
        })
      );
    },
    [cartItems]
  );

  const onDecreaseItemCount = useCallback(
    (cartItemId, count) => {
      const cartItemIds = cartItems.map((data) => data.id);
      if (!cartItemIds.includes(cartItemId)) return;
      setCartItems((currentCartItems) =>
        currentCartItems.map((data) => {
          if (data.id === cartItemId) {
            const newCount = count - 1;
            return {
              ...data,
              count: newCount,
              price: computeItemTotalPrice(data.price, newCount)
            };
          }
          return data;
        })
      );
    },
    [cartItems]
  );

  const onRemoveItemFromCart = useCallback(
    (cartItemId) => {
      const cartItemIds = cartItems.map((data) => data.id);
      if (!cartItemIds.includes(cartItemId)) return;
      setCartItems((currentCartItems) =>
        currentCartItems.filter((data) => data.id !== cartItemId)
      );
    },
    [cartItems]
  );

  const contextValue = useMemo(
    () => ({
      cartItems,
      cartItemsCount: cartItems.length,
      subTotalPrice: cartItems.reduce((totalCheckoutAmount, data) => {
        return (totalCheckoutAmount += Math.floor(data.price));
      }, 0),
      onAddItemToCart,
      onIncreaseItemCount,
      onDecreaseItemCount,
      onRemoveItemFromCart
    }),
    [
      cartItems,
      onAddItemToCart,
      onIncreaseItemCount,
      onDecreaseItemCount,
      onRemoveItemFromCart
    ]
  );

  console.log({ cartItems, products, contextValue });

  // Wrap the app with the CartContextProvider, passing the context value
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export { CartContextProvider };
