import React from 'react'
import "../styles/Invis.css"

function Invis() {
  return (
    <div className="Invis">
      <div className="second text-center">See your Invisalign smile in seconds!</div>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="code">
            Scan the QR code to see your smile transformation.</div>
            <div className="col-md-8 col-lg-8 col-sm-8 phone transf">
            <h4>Get your phone</h4>
           <h4> Open your camera</h4>
            <h4>Point at QR code</h4>
            <h4>Snap your selfie</h4>
          <h4>See your new smile</h4>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-4 scanner">
            <img 
            src="https://cdn-icons-png.flaticon.com/128/14021/14021433.png"
            alt=""height="90%" width="40%"/>
          </div>
        </div>
      </div>
      </div>
</div>
    
  )
}

export default Invis