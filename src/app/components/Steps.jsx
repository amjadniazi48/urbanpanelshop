import React from 'react'

const Steps = () => {
  return (
 
<div className="steps " style={{paddingLeft:"5rem",paddingRight:"5rem",paddingTop:"5rem", paddingBottom:"5rem"}}>

<h2 className="display-4 mb-0 text-center"><span className="text-gradient-primary">Repair Workflow</span></h2>
  {/* Step*/}
  <div className="step">
    <div className="step-number">
      <div className="step-number-inner">1</div>
    </div>
    <div className="step-body">
      <h5 className="mb-2">Contact Us</h5>
      <p className="fs-sm mb-0">Nulla faucibus mauris pellentesque blandit faucibus non. Sit ut et at suspendisse gravida hendrerit tempus placerat ac nunc dapibus.</p>
    </div>
  </div>

  {/* Step*/}
  <div className="step">
    <div className="step-number">
      <div className="step-number-inner">2</div>
    </div>
    <div className="step-body">
      <h5 className="mb-2">Drop Off or Pick Up</h5>
      <p className="fs-sm mb-0">Tristique sed pharetra feugiat tempor sagittis. Ultricies eu bibendum adipiscing lacinia. Quisque praesent aliquam tempus phasellus ut integer.</p>
    </div>
  </div>

  {/* Step*/}
  <div className="step">
    <div className="step-number">
      <div className="step-number-inner">3</div>
    </div>
    <div className="step-body">
      <h5 className="mb-2">Repairs begin</h5>
      <p className="fs-sm mb-0">Duis euismod enim, facilisis risus tellus pharetra lectus diam neque. Nec ultrices mi faucibus est. Magna ullamcorper potenti elementum.</p>
    </div>
  </div>
    {/* Step*/}
  <div className="step">
    <div className="step-number">
      <div className="step-number-inner">4</div>
    </div>
    <div className="step-body">
      <h5 className="mb-2">Pick up</h5>
      <p className="fs-sm mb-0">Duis euismod enim, facilisis risus tellus pharetra lectus diam neque. Nec ultrices mi faucibus est. Magna ullamcorper potenti elementum.</p>
    </div>
  </div>
</div>
  )
}

export default Steps