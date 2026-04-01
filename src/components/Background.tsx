export default function Background() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        background: "radial-gradient(circle at 20% 20%, #0ea5e9, transparent 40%), radial-gradient(circle at 80% 80%, #6366f1, transparent 40%), #020617"
      }}
    />
  );
}
