import Header from "./components/Header";
import Hero from "./components/Hero";


import Testimonials from "./components/Testimonials";


import Carcomparsion from "./components/Carcomparsion";
import Urbanservices from "./components/Urbanservices";
import Smashupload from "./components/Smashupload";
import Footer from "./components/Footer";
import  Workflow from "./components/Workflow";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* <About /> */}
      <Smashupload />
      <Workflow />
      <Urbanservices />
      <Testimonials />
      <Carcomparsion />
      <Footer />
    </>
  );
}
