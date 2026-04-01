export default function Page() {
  return (
    <main>
      <h1>NEXRB is running 🚀</h1>
    </main>
  );
}
import Hero from "../Hero";
import Navbar from "../Navbar";
import Features from "../Features";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
    </>
  );
}
