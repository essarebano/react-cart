import React from "react";

function ItemQuantity({
  itemId,
  productId,
  productName,
  productPrice,
  count = 0,
  isOnItemCart = false,
  maxCount = 5,
  onAdd,
  onIncrease,
  onDecrease,
  onRemove
}) {
  function handleOnAddItem() {
    onAdd(productId, productName, productPrice, maxCount);
  }

  function handleOnIncreaseItemCount() {
    onIncrease(itemId, count);
  }

  function handleOnDecreaseItemCount() {
    onDecrease(itemId, count);
  }

  function handleOnRemoveItem() {
    onRemove(itemId);
  }

  const hasReachedMaxCount = count === maxCount;

  if (!isOnItemCart) {
    return <button onClick={handleOnAddItem}>Add</button>;
  }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {count <= 1 ? (
        <button onClick={handleOnRemoveItem}>Remove</button>
      ) : (
        <button onClick={handleOnDecreaseItemCount}>-</button>
      )}
      <div style={{ margin: "0 4px" }}>
        <p>{!count ? 1 : count}</p>
      </div>
      <button onClick={handleOnIncreaseItemCount} disabled={hasReachedMaxCount}>
        +
      </button>
    </div>
  );
}

export default React.memo(ItemQuantity);
