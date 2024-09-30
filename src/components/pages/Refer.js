
import "../styles/Refer.css";
import React, { useState } from 'react';
import { FaPhone } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import Button from 'react-bootstrap/Button';
function Refer() {

   const [patientName, setPatientName] = useState('');
    const [parentName, setParentName] = useState('');
    const [dob, setDOB] = useState('');
    const [patientPhone, setPatientPhone] = useState('');
    const [patientEmail, setPatientEmail] = useState('');
    const [doctorName, setDoctorName] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      
      if (!patientName || !dob || !patientPhone || !patientEmail || !doctorName || !contactName || !contactPhone) {
        alert('Please fill in all required fields.');
        return;
      }
  
  
      setPatientName('');
      setParentName('');
      setDOB('');
      setPatientPhone('');
      setPatientEmail('');
      setDoctorName('');
      setContactName('');
      setContactPhone('');
      setAdditionalInfo('');
  
      
    console.log(`Patient name : ${patientName}`)
    console.log(`Parent name : ${parentName}`)
    console.log(`dob : ${dob}`)
    console.log(`Email : ${patientEmail}`)
    console.log(`Doctor name : ${doctorName}`)
    console.log(`Contact name : ${contactName}`)
    alert("booking done")
  
    };
  return (
    <>
      <div className="About">
        <h2 className="parl text-center">Refer a patient</h2>
        <h3 className="par">Help Your Patients Get the Smile They Deserve!</h3>
      </div>
      <div className="container-fluid">
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 mt-3 thrill">
              We’re thrilled that you’re considering referring your patient to
              Holy City Orthodontics! Our goal is to provide top-notch
              orthodontic care in a welcoming and friendly environment.
              Referring a patient to us is a breeze and ensures they receive the
              best care possible.
              <h1 className="consider">Why Choose Us?</h1>
              <ul>
                <li>Dr. Anderson and our awesome team use the latest techniques to
                create beautiful smile</li>
                <li>Every patient is unique,so we design
                personalized treatment plans just for them.</li>
               From braces to clear
                aligners, <li>we’ve got all the options to fit your patients’ needs
                We’ll keep you in the loop about your patient’s</li> progress every
                step of the way. Our office is easy to get to, and we offer
                flexible hours to fit busy schedules.
              </ul>
              <img src="https://www.holycityorthodontics.com/wp-content/uploads/2024/06/patient-referrals-holy-city-ortho.jpg"
              alt=""className="holy"/>
            
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 ">
          
              <h1 className="consider">Get Started</h1>
              <h6 className="thrill">Referring a patient is simple. Just fill out the form below!</h6>
              <form className="thrill" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="patientName">Patient Name</label>
                  <input
                    type="text"
                    id="patientName"
                    className="form-control"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="parentName">Parent/Guardian Name (if applicable)</label>
                  <input
                    type="text"
                    id="parentName"
                    className="form-control"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="dob">Patient's Date of Birth</label>
                  <input
                    type="date"
                    id="dob"
                    className="form-control"
                    value={dob}
                    onChange={(e) => setDOB(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="patientPhone">Patient Phone</label>
                  <input
                    type="tel"
                    id="patientPhone"
                    className="form-control"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    pattern="^\d{10}$"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="patientEmail">Patient Email</label>
                  <input
                    type="email"
                    id="patientEmail"
                    className="form-control"
                    value={patientEmail}
                    onChange={(e) => setPatientEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="doctorName">Referring Doctor Name</label>
                  <input
                    type="text"
                    id="doctorName"
                    className="form-control"
                    value={doctorName}
                    onChange={(e) => setDoctorName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contactName">Referring Contact Name</label>
                  <input
                    type="text"
                    id="contactName"
                    className="form-control"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contactPhone">Referring Contact Phone</label>
                  <input
                    type="tel"
                    id="contactPhone"
                    className="form-control"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    pattern="^\d{10}$"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="additionalInfo">Additional Information</label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    rows="4"
                    cols="50"
                    className="form-control"
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary mt-5">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
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
    <div className="col-lg-6 col-sm-12 col-md-12">
    <div style={{ width: '100%', height: '450px' }} >
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.5778150393717!2d76.68041250954874!3d30.70215258700682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef8c87691c2b%3A0x1e625b93fab0a93a!2sMitisha%20Softech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1727278893394!5m2!1sen!2sin"
        width="70%"
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
    <div className="container-fluid logos mt-5">
      <div className="container"> 
        <div className="row text-center">
        <div className="col-lg-2 imr">
          <img src="https://www.holycityorthodontics.com/wp-content/uploads/2022/10/holycity-aao-logo.png"
          alt=""/>
          </div>  
          <div className="col-lg-2 imr">
            <img src="https://www.holycityorthodontics.com/wp-content/uploads/2022/10/holycity-abo-logo.jpg"
            alt=""/>
          </div>
          <div className="col-lg-2 imr">
          <img src="https://www.holycityorthodontics.com/wp-content/uploads/2022/10/holycity-sao-logo.png"alt=""/>
          </div>
          <div className="col-lg-2 imr">
          <img src="https://www.holycityorthodontics.com/wp-content/uploads/2022/10/holycity-ada-logo.png"alt=""/>
          </div>
          <div className="col-lg-2 imr">
          <img src="https://www.holycityorthodontics.com/wp-content/uploads/2022/10/holycity-aafe-logo.png"alt=""/>
          </div>
          <div className="col-lg-2 imr">
          <img src="https://www.holycityorthodontics.com/wp-content/uploads/2023/08/Invisalign-Provider-Logo-1.png"alt=""/>
          </div>
    </div>
    </div>
  
    </div>
    <div className="container-fluid">
      <div className=" container follow">
        <h1 className="text-center us">Follow us</h1>
        <h5 className="text-center">@holycityorthodontics</h5>
        </div>
        <div className="multiple-images">
          <div className="row text-center">
            <div className="col-lg-2">
            <img src="http://www.vaibhavstores.in/storage/blog/51/featured-image.jpg"
              alt=""/>
            </div>
            <div className="col-lg-2">
              <img src="https://www.wth.org/wp-content/uploads/2020/12/Good-Skin-Care2.jpg"
              alt=""/>
            </div>
            <div className="col-lg-2">
              <img src="https://tse2.mm.bing.net/th?id=OIP.9zrrvOEGcn8-snMSwvKTpwHaFj&pid=Api&P=0&h=220"alt=""/>

            </div>
            <div className="col-lg-2">
              <img src="https://tse4.mm.bing.net/th?id=OIP.Uk10GFly-g80s1RFxXFezwHaE8&pid=Api&P=0&h=220"alt=""/>

            </div>
            <div className="col-lg-2">
              <img src="https://tse4.mm.bing.net/th?id=OIP.N16uZP1R2wnsxxvIMU-qqwHaE7&pid=Api&P=0&h=220"alt=""/>

            </div>
            <div className="col-lg-2">
              <img src="https://tse2.mm.bing.net/th?id=OIP.YvJpGb6uIzZ4VIih8-rp7AHaGr&pid=Api&P=0&h=220"alt=""/>

            </div>
          </div>
          <center><div><Button variant="danger"className="button-s">Follow us</Button>{' '}</div></center>
          </div>
        </div>
        

    
    </>
  );
}

export default Refer;
