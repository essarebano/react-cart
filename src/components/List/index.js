export default function List({
  children,
  isEmpty = false,
  emptyMessage = "No Data"
}) {
  if (isEmpty) {
    return (
      <div>
        <p>{emptyMessage}</p>
      </div>
    );
  }
  return (
    <div>
      <ul>{children}</ul>
    </div>
  );
}
