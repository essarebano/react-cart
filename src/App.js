import "./styles.css";
import { useEffect, useState } from "react";
import { generateDataArr } from "./utils/generateData";
import { CartContextProvider } from "./context/cart/CartContextProvider";
import Products from "./container/Products";
import Cart from "./container/Cart";

export default function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    function getData() {
      setIsLoading(true);
      const data = generateDataArr(10);
      setProducts(data);
      setIsLoading(false);
    }

    getData();
  }, []);

  return (
    <div className="App">
      {isLoading && (
        <div>
          <span>Loading...</span>
        </div>
      )}
      <CartContextProvider products={products}>
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <Products products={products} />
          <Cart />
        </div>
      </CartContextProvider>
    </div>
  );
}
