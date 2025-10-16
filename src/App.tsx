import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const CTA = lazy(() => import("./components/CTA"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        {" "}
        <About />
        <Services />
        <CTA />
        <Testimonials />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
