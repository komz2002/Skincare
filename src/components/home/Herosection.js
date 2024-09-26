import React from 'react'
import "../styles/Herosection.css";
import { FaPhone } from "react-icons/fa6";
import { AiOutlineMessage } from "react-icons/ai";
import Button from 'react-bootstrap/Button';

function Herosection() {
  return (
    <>
   <div className="video-container">
  <div className="overlay"></div>
  <div className="text-content">
    <h1 className="ortho">Your Charleston Orthodontist</h1>
    <h4 className="start">Your Smile Starts Here</h4>
    <div><FaPhone /> (843) 823-3533</div>
    <div><AiOutlineMessage /> (843) 890-0499</div>
    <Button variant="danger" className="buttond">Book for consult</Button>{' '}
  </div>
  <video className="overlay-video" autoPlay loop muted>
    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
  </video>
</div>

      </>
  )
}
export default Herosection;
