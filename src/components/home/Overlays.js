import React from 'react'
import "../styles/Overlays.css"
function Overlays() {
  return (
    <>
    <div className="more text-center mt-5">You have got more options</div>
    <div className="container-fluid d-flex p-3 gap-3">
    <div class="container-n">
      <img src="https://tse2.mm.bing.net/th?id=OIP.ImZ4e8YVLsPdB6RWOFXJqAHaEj&pid=Api&P=0&h=220" alt="Avatar" className="image"/>
      <div className="overlay">
        <div className="text">INVISALIGN
      </div>
      </div>
    </div>
    <div className="container-n">
      <img src="https://tse4.mm.bing.net/th?id=OIP.Y6rvkhDlygP6MraHRF9RIwHaE8&pid=Api&P=0&h=220" alt="Avatar" className="image"/>
      <div className="overlay">
        <div className="text">INVISALIGN</div>
      </div>
    </div>
    <div className="container-n">
      <img src="http://www.vaibhavstores.in/storage/blog/51/featured-image.jpg" alt="Avatar" className="image"/>
      <div className="overlay">
        <div className="text">INVISALIGN</div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Overlays;