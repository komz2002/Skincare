import React from 'react'
import "../styles/Logos.css"
import Button from 'react-bootstrap/Button';
function Logos() {
  return (
    <div className="container-fluid logos mt-5">
      <div className="container"> 
        <div className="row">
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
    <center><div><Button variant="danger"className="button-s">Follow us</Button>{' '}</div></center>
    </div>
  )
}

export default Logos
