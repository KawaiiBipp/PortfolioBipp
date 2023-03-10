import React from "react";
import "./stylewhyhirme.css";
function Whyhireme() {
  return (
    <div className="boxwhyhireme">
      <h1 className="h1">MHY HIRE ME?</h1>

      <div className="row">
        <div>
          <div className="boxme">
            <img src="/Pic/DM.png" alt="DigitalMarketing"className="iconimg" />
            <h3 className="h3">Digital Marketing Expert </h3>
          </div>

          <div className="boxme">
            <img src="/Pic/MM.png" alt="GoodManament" className="iconimg" />
            <h3 className="h3">Good Management </h3>
          </div>
        </div>



        <div>
          <div className="boxme">
            <img src="/Pic/BB.png" alt="BuildBusiness" className="iconimg"/>
            <h3 className="h3">Bulid Business Experiend </h3>
          </div>

          <div className="boxme">
            <img src="/Pic/SD.png" alt="SoftwareDev" className="iconimg"/>
            <h3 className="h3">Software Developer Knowledge</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Whyhireme;
