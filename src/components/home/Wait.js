import React from 'react'
import "../styles/wait.css"
import { FaPhone } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";


function wait() {
  return (
    <>
    <div className="wait text-center mt-5">
      <div className="row  commons">
      <div className="col-lg-6">
      <h1> We can’t wait to meet you!</h1>
      <h6>Schedule a free consultation</h6>
      <h6><CiLocationOn />1807 Crowne Commons Way Suite F10
Johns Island, SC 29455</h6>
<h6> Our Charleston orthodontic office is located in the Live Oak Square Shopping Center, on the second floor.</h6>

<FaPhone />(843) 823-3533
<h6><FaPhone />(843) 890-0499</h6>
<h6>Monday-Thursday 8-12/1-5
Friday by appointment only.</h6>
</div>
    <div className="col-lg-6">
    <div style={{ width: '100%', height: '450px' }}>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.5778150393717!2d76.68041250954874!3d30.70215258700682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef8c87691c2b%3A0x1e625b93fab0a93a!2sMitisha%20Softech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1727278893394!5m2!1sen!2sin"
        width="50%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default wait
