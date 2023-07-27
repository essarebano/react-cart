import { useContext } from "react";
import ListItem from "../../components/ListItem";
import ItemQuantity from "../../components/ItemQuantity";
import ItemPrice from "../../components/ItemPrice";
import { CartContext } from "../../context/cart/CartContext";
import List from "../../components/List";

export default function Products({ products, isLoading }) {
  const { onAddItemToCart } = useContext(CartContext);

  return (
    <div
      style={{
        display: "flex",
        width: "50%",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <div>
        <h3>Products</h3>
      </div>
      {!isLoading && (
        <List
          isEmpty={products.length === 0}
          emptyMessage={"No products found"}
        >
          {products.map((data) => {
            const key = `${data.id}-product`;
            return (
              <ListItem key={key} name={data.name}>
                <ItemPrice price={data.price} />
                <ItemQuantity
                  productId={data.id}
                  productName={data.name}
                  productPrice={data.price}
                  maxCount={data.maxCount}
                  onAdd={onAddItemToCart}
                />
              </ListItem>
            );
          })}
        </List>
      )}
    </div>
  );
}
