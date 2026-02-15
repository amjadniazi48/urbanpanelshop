import React from 'react'
import PropTypes from 'prop-types'

function ServicesDetailsSidebar({serviceData}) {
  return (
    <div className="service-sidebar">
      {/* All Services List */}
      <div className="sidebar-section services-menu">
        <h3 className="sidebar-heading">
          <i className="bx bx-list-ul"></i>
          Our Services
        </h3>
        <ul className="services-list">
          <li className="service-item active">
            <a href={`/services/${serviceData.slug}`}>
              <span className="service-icon">
                {serviceData?.serviceIcon?.url ? (
                  <img src={serviceData.serviceIcon.url} alt="" />
                ) : (
                  <i className="bx bx-check-circle"></i>
                )}
              </span>
              <span className="service-name">{serviceData.title}</span>
              <i className="bx bx-chevron-right arrow"></i>
            </a>
          </li>
          {/* Add links to other services */}
          <li className="service-item">
            <a href="/services">
              <span className="service-icon">
                <i className="bx bx-grid-alt"></i>
              </span>
              <span className="service-name">View All Services</span>
              <i className="bx bx-chevron-right arrow"></i>
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Card */}
      <div className="sidebar-section contact-card">
        <div className="contact-icon">
          <i className="bx bx-phone-call"></i>
        </div>
        <h4 className="contact-heading">Need Help?</h4>
        <p className="contact-text">Get in touch with our experts</p>
        <a href="tel:+61383519771" className="contact-phone">
          <i className="bx bx-phone"></i>
          03 8351 9771
        </a>
        <a href="/smash" className="contact-btn">
          <i className="bx bx-message-square-detail"></i>
          Get a Quote
        </a>
      </div>

      {/* Opening Hours */}
      <div className="sidebar-section hours-card">
        <h4 className="hours-heading">
          <i className="bx bx-time-five"></i>
          Opening Hours
        </h4>
        <ul className="hours-list">
          <li>
            <span className="day">Monday - Friday</span>
            <strong className="time">8:00 AM - 5:00 PM</strong>
          </li>
      
          <li className="closed">
            <span className="day">Sunday-Saturday</span>
            <strong className="time">Closed</strong>
          </li>
        </ul>
      </div>

      {/* Download Brochure */}
      <div className="sidebar-section download-card">
        <h4 className="download-heading">
          <i className="bx bx-download"></i>
          Download
        </h4>
        <a href="#" className="download-link">
          <i className="bx bxs-file-pdf"></i>
          <div className="download-info">
            <span className="download-name">Service Brochure</span>
            <span className="download-size">PDF, 2.5 MB</span>
          </div>
          <i className="bx bx-download download-icon"></i>
        </a>
      </div>
    </div>
  )
}


export default ServicesDetailsSidebar