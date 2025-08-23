import React from 'react'
import { MoveRight } from "lucide-react";
const About = () => {
  return (
  
      <section className="container pt-2 mt-2 mt-md-4 mt-lg-5">
        <div className="row pt-xl-3">
          <div className="col-md-5 text-center text-md-start pb-5">
           <h2 className="display-4 mb-0 text-center"><span className="text-gradient-primary">Urban Panel Shop</span></h2>
            <p className="fs-lg pb-lg-3 mb-4">We create diverse, complex, web and mobile solutions for any business need. With us you get quality software and perfect service every time.</p>
            <a href="about-v2.html" className="btn btn-primary shadow-primary btn-lg">More About Us</a>
            <div className="mt-3 mt-sm-0 pt-4 pt-sm-5 mt-xl-4">
              <h2 className="h6 mb-4">Some of our awards:</h2>
              <img src="assets/img/landing/software-agency-1/awards.svg" alt="Awards" />
            </div>
          </div>
          <div className="col-xl-6 col-md-7 offset-xl-1 pb-4 pb-sm-3 pb-lg-0 mb-4 mb-sm-5 mb-lg-0">
            <img src="assets/img/landing/software-agency-1/about-img.jpg" className="rounded-3 shadow-sm" alt="Image" />
          </div>
        </div>
      </section>
  )
}

export default About