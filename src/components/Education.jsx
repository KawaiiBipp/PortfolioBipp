import React from "react";
import "./styleeducation.css";
function Education() {
  return (
    <div className="stylebody">
      <div className="pd">
        <h1>EDUCATION</h1>
        <div className="sp"></div>
      </div>
      <div className=" sbox stylebody stylelogo">
        {/* เริ่ม */}
        {/* Mathematics */}
        <div className="box">
          <div><img src="/Pic/mt.png" alt="logo" className="img"/></div>
          <h4>Sarasit Phitayalai School</h4>
          <h4>Mathematics and Science</h4>
          <h4>GPA : 2.23</h4>
        </div>
        {/* Mathematics */}
        {/* ------------------- */}
        {/* Sripatum University */}
        <div className="box">
          <div><img src="/Pic/spus.png" alt="logo" className="img"/></div>
          <h4>Sripatum University</h4>
          <h4>Bachelor's degree</h4>
          <h4>Communication Arts in Advertising</h4>
          <h4>GPA : 2.72</h4>
        </div >
        {/* Sripatum University */}
        {/* ------------------- */}
        {/* Sripatum University */}
        <div className="box">
          <div><img src="/Pic/bu.png" alt="logo" className="img"/></div>
          <h4>Bangkok University</h4>
          <h4>Master's degree</h4>
          <h4>Communication Arts in Digital Marketing </h4>
          <h4>GPA : 3.30</h4>
        </div>
        {/* Sripatum University */}
      </div>
      {/* จบ */}
    </div>
  );
}
export default Education;
