import React from 'react'
import "../styles/Patients.css"
function Patients() {
  return (
    <>
    <div className="them text-center">Our Patients Smiles Speak for Themselves
      <div className="container-fluid">
        <div className="container">
          <div className="row imagep">
            <div className="col-md-4 col-lg-4 col-sm-4">
              <img src="https://t3.ftcdn.net/jpg/04/14/87/50/360_F_414875088_UAjVNIc4adgxyBClJDhBDnB731f3rjgC.jpg"
              alt="" className="img-fluid" />
            </div>
            <div className="col-md-4 col-lg-4 col-sm-4 ">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwLYXSJavvUTJggvs4Oyh2N1ElKoucaEVKAA&s"
              alt=""  className="img-fluid"/>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTle56Pkdm7SdCS8-Q2klNbmmOtAv74v-1qgw&s"
              alt=""  className="img-fluid"/>
            </div>
          </div>
        </div>

      </div>
    </div>

</>
    
  )
}

export default Patients