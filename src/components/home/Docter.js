import React from 'react'
import "../styles/Docter.css" 
import Button from 'react-bootstrap/Button'
function Docter() {
  return (
    <>
     <section className="container-fluid text-center mt-5">
      <div className="container container-s">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <img 
          src="https://www.holycityorthodontics.com/wp-content/uploads/2022/12/Dr.-Anderson-homepage-photo-980x1470.jpg"
          alt=""/>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 text-content-2">
          <h1>Meet</h1>
          <h1>Dr. Rebekah Anderson</h1>
          <p>Dr. Anderson, your Board Certified Orthodontist on Johns Island, is thrilled to help you discover just how stunning your smile can be!
With a focus on facial esthetics, Dr. Anderson and her team are committed to providing you with an exceptional experience from day one. They work with the most modern and innovative orthodontic technologies available, and deliver phenomenal treatment results alongside outstanding patient care.
Whether you’re interested in Invisalign, traditional braces, clear braces, or Botox, Holy City Orthodontics has a convenient treatment option for you.</p>
<h4 className="wait">We can’t wait to welcome you into our family!</h4>
<Button variant="info"className="but mt-5">About us</Button>{' '}
          </div>
        </div>
      </div>
    </section> 

    </>
  
  )
}

export default Docter;