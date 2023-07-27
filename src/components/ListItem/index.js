export default function ListItem({ name, children }) {
  return (
    <li>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "28px" }}
      >
        <div>
          <p>{name}</p>
        </div>
        <div style={{ margin: "0 8px" }}>
          <span> - </span>
        </div>
        {children}
      </div>
    </li>
  );
}
