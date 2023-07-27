import { useContext } from "react";
import ListItem from "../../components/ListItem";
import ItemQuantity from "../../components/ItemQuantity";
import ItemPrice from "../../components/ItemPrice";
import { CartContext } from "../../context/cart/CartContext";
import List from "../../components/List";

export default function Cart() {
  const {
    cartItems,
    onIncreaseItemCount,
    onDecreaseItemCount,
    onRemoveItemFromCart
  } = useContext(CartContext);

  return (
    <div
      tyle={{
        display: "flex",
        width: "50%",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <div>
        <h3>Cart</h3>
      </div>
      <List isEmpty={cartItems.length === 0} emptyMessage={"No items on cart"}>
        {cartItems.map((data) => {
          const key = `${data.id}-cart-item`;
          console.log({ data });
          return (
            <ListItem key={key} name={data.name}>
              <ItemPrice price={data.price} />
              <ItemQuantity
                productId={data.productId}
                itemId={data.id}
                count={data.count}
                onIncrease={onIncreaseItemCount}
                onDecrease={onDecreaseItemCount}
                onRemove={onRemoveItemFromCart}
                maxCount={data.maxCount}
                isOnItemCart
              />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
