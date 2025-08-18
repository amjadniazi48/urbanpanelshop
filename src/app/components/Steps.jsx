import React from 'react'

const Steps = () => {
  return (
 
<div className="steps  p-5 ">
 <h2 className="h1 text-center pt-1 pb-4 mb-1 mb-lg-3">Repair Workflow</h2>
  {/* Step*/}
  <div className="step">
    <div className="step-number">
      <div className="step-number-inner">1</div>
    </div>
    <div className="step-body">
      <h5 className="mb-2">Choose your course</h5>
      <p className="fs-sm mb-0">Nulla faucibus mauris pellentesque blandit faucibus non. Sit ut et at suspendisse gravida hendrerit tempus placerat ac nunc dapibus.</p>
    </div>
  </div>

  {/* Step*/}
  <div className="step">
    <div className="step-number">
      <div className="step-number-inner">2</div>
    </div>
    <div className="step-body">
      <h5 className="mb-2">Learn by doing</h5>
      <p className="fs-sm mb-0">Tristique sed pharetra feugiat tempor sagittis. Ultricies eu bibendum adipiscing lacinia. Quisque praesent aliquam tempus phasellus ut integer.</p>
    </div>
  </div>

  {/* Step*/}
  <div className="step">
    <div className="step-number">
      <div className="step-number-inner">3</div>
    </div>
    <div className="step-body">
      <h5 className="mb-2">Get instant expert feedback</h5>
      <p className="fs-sm mb-0">Duis euismod enim, facilisis risus tellus pharetra lectus diam neque. Nec ultrices mi faucibus est. Magna ullamcorper potenti elementum.</p>
    </div>
  </div>
</div>
  )
}

export default Steps