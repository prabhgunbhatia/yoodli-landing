import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Platform from "./components/Platform";
import Approach from "./components/Approach";
import Industries from "./components/Industries";
import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <Stats />
        <Platform />
        <Approach />
        <Industries />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
