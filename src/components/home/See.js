import React from 'react';
import '../styles/See.css';

const See = () => {
  return (
    <div className="container-fluid mt-3 parallax-container">
  
      <div className="see-img d-none d-lg-block"></div>
      <div className="container see-head">
        <h2 className="text-center text-white fw-bold">
          We Do Things Differently
        </h2>
        <div className="see-content">
          <h4>We treat you like family.</h4>
          <p className=''>
            From the moment you walk through the door, our skilled and compassionate team will make you feel right at home.
          </p>
          <hr />

          <h4>Goopy impressions? No way!</h4>
          <p>
            We work with the latest technology to make your experience as seamless, efficient, and comfortable as can be.
          </p>
          <hr />

          <h4>Put your money where your mouth is.</h4>
          <p>
            We believe in making orthodontic treatments as easy and affordable as possible. We accept all orthodontic insurance and offer in-house interest-free financing!
          </p>
          <hr />

          <h4>We fit into YOUR schedule.</h4>
          <p>
            We offer same-day treatment at your consultation if you’re ready to get started. We know life is busy with work and school, so we’ll be as efficient and accommodating as possible with your appointments!
          </p>
          <hr />
        </div>
        <div className="d-flex justify-content-center pb-4">
          <button className="btn btn-primary p-3 mx-auto">
            Book Free Consult
          </button>
        </div>
      </div>
    </div>
  );
};

export default See;