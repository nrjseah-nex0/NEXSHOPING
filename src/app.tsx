import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Background from "./components/Background";

export default function App() {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <Background />
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}
