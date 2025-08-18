import Header from "./components/Header";
import Hero from "./components/Hero";


import About from "./components/About";
import Blog from "./components/Blog";

import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Casestudies from "./components/Casestudies";
import Steps from "./components/Steps";

export default function Home() {
  return (
  <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Steps/>
      <Casestudies/>
      <Testimonials />
     
      <Blog />
    
    </>
  );
}