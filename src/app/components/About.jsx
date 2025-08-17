import React from 'react'
import { MoveRight } from "lucide-react";
const About = () => {
  return (
       <section className="container pt-5 mt-2 mt-md-4 mt-lg-5">
        <div className="row pt-xl-3">
          <div className="col-md-5 text-center text-md-start pb-5">
            <h1 className="mb-4">About Urban Club</h1>
            <p className="fs-lg pb-lg-3 mb-4">We create diverse, complex, web and mobile solutions for any business need. With us you get quality software and perfect service every time.</p>
            <a href="about-v2.html" className="btn btn-primary shadow-primary btn-lg">More About Us &nbsp;<MoveRight /></a>
         
          </div>
          <div className="col-xl-6 col-md-7 offset-xl-1 pb-4 pb-sm-3 pb-lg-0 mb-4 mb-sm-5 mb-lg-0">
            <img src="assets/img/landing/software-agency-1/bg-image.jpg" className="rounded-3 shadow-sm" alt="Image" />
          </div>
        </div>
      </section>
  )
}

export default About