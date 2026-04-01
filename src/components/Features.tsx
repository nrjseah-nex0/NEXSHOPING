export default function Features() {
  const items = [
    "Marketing Automation",
    "AI Analytics",
    "Dropshipping System",
    "Customer Insights",
  ];

  return (
    <section style={{ padding: "60px", color: "white" }}>
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Features
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: "20px",
        }}
      >
        {items.map((f, i) => (
          <div key={i} style={card}>
            {f}
          </div>
        ))}
      </div>
    </section>
  );
}

const card = {
  padding: "20px",
  background: "rgba(255,255,255,0.05)",
  borderRadius: "12px",
  backdropFilter: "blur(10px)",
};
