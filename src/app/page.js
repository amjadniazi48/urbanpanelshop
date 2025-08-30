import Header from "./components/Header";
import Hero from "./components/Hero";

import About from "./components/About";

import Testimonials from "./components/Testimonials";

import Steps from "./components/Steps";
import Carcomparsion from "./components/Carcomparsion";
import Urbanservices from "./components/Urbanservices";
import Smashupload from "./components/Smashupload";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Smashupload />
      <Steps />
      <Urbanservices />
      <Testimonials />
      <Carcomparsion />
      <Footer />
    </>
  );
}
