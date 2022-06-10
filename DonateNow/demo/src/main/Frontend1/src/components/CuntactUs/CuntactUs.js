import React from "react";
import NavbarA from "../Navbar/NavbarA";


import "./CuntactUs.css";
function CuntactUs() {

 

  return (
    <div>
      <NavbarA/>
      <div className="div-Countact">
  <div className="wrapper">
  <div className="title">
    <h1>contact us</h1>
  </div>
  <div className="contact-form">
    <div className="input-fields">
      <input type="text" className="input" placeholder="Name" />
      <input type="text" className="input" placeholder="Email Address" />
      <input type="text" className="input" placeholder="Phone" />
      <input type="text" className="input" placeholder="Subject" />
    </div>
    <div className="msg">
      <textarea placeholder="Message" defaultValue={""} />
      <div className="btn">send</div>
    </div>
  </div>
</div>
</div>
    </div>
  );
}

export default CuntactUs;
