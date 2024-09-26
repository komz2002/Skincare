import React from 'react'
import { Link } from 'react-router-dom';
import "./styles/Footer.css"


function Footer() {
  return (
    <div className="container-fluid">
    <div className="bg-footer ">
    <div className="text-center text-white">
      <Link to="/" className="text-center text-white text-decoration-none">
        <h1>Skin Care</h1>
      </Link>
    </div>
    <div className="foot">
      <div className="first">
        <img 
          style={{ height: "30px", width: "30px", marginRight: "10px" }} 
          src="https://cdn-icons-png.flaticon.com/128/3293/3293303.png" 
          alt=""
        />1807 Crowne Commons<br/>Way-Suite F10 Johns<br/>Island, Sc 29455<br/>
        <a href="https://www.holycityorthodontics.com" className='nav'>www.holycityorthodontics</a><br/>
        <img  
          style={{ height: "30px", width: "30px", marginRight: "10PX" }} 
          src="https://cdn-icons-png.flaticon.com/128/1151/1151429.png"
          alt=""
        />(843)823-3533
      </div>
      <div className="second">
        <Link to="/" className='nav'>HOME</Link><br/>
        <Link to="/About" className='nav'>ABOUT</Link><br/>
        <Link to="/button" className='nav'>BOOK FREE CONSULT</Link><br/>
        <Link to="/referPatients" className='nav'>REFER A PATIENT</Link><br/>
      </div>
      <div className="third">
        <Link to="/Services" className='nav'>SERVICES</Link><br/>
        <Link to="/NewPatients" className='nav'>NEW PATIENTS</Link><br/>
        <Link to="/Contact" className='nav'>CONTACT US</Link><br/>
      </div>
      <div className="fourth">
        <img 
          style={{ height: "30px", width: "30px", marginRight: "10px" }} 
          src="https://cdn-icons-png.flaticon.com/128/145/145802.png"
          alt=""
        />
        <img 
          style={{ height: "30px", width: "30px" }} 
          src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"
          alt=""
        /><br/>
        <h5>2022 Holy City</h5><br/>
        Skin care
        <h5>
          <Link to="/Privacy" className='nav'>Privacy Policy</Link>|Accessibility Statement
        </h5><br/>
      </div>
    </div>
  </div>
  </div>
  
);
}
export default Footer