import { createContext } from "react";

export const CartContext = createContext({
  cartItems: [],
  cartItemsCount: 0,
  subTotalPrice: 0,
  onAddItemToCart: () => {},
  onIncreaseItemCount: () => {},
  onDecreaseItemCount: () => {},
  onRemoveItemFromCart: () => {}
});
