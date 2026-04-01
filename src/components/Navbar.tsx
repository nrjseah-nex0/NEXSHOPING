export default function Navbar() {
  return (
    <nav
      style={{
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        color: "white",
        backdropFilter: "blur(10px)",
      }}
    >
      <h2>NEXRB</h2>
      <div>
        <button style={btn}>Login</button>
        <button style={btnPrimary}>Start</button>
      </div>
    </nav>
  );
}

const btn = {
  marginRight: "10px",
  padding: "8px 16px",
  background: "transparent",
  color: "white",
  border: "1px solid #444",
};

const btnPrimary = {
  padding: "8px 16px",
  background: "#6366f1",
  color: "white",
  border: "none",
};
