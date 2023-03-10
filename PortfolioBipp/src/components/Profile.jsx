import "./styleprofile.css";
import React from "react";
function Profile() {
  return (
    <div className="padding">
      <div className="indentity">
        <div>
          <div className="fontbig">
            <h1>PROFILE</h1>
            <h1>THOSSAPOL KEMPAO</h1>
            <h1>NICKNAME : BIPP</h1>
          </div>

          <div className=".iconStyle">
            <div className="fontsmall">
              <img src="/Pic/iconphone.png" alt="MyPhone" className="myIcon" />

              <img src="/Pic/iconmail.png" alt="MyEmail" className="myIcon" />

              <img src="/Pic/iconmap.png" alt="MyMap" className="myIcon" />
            </div>

            <div>
              <img
                src="/Pic/iconfacebook.png"
                alt="MyFacebook"
                className="myIcon"
              />

              <img
                src="/Pic/iconlinkedin.png"
                alt="Mylinkedin"
                className="myIcon"
              />

              <img
                src="/Pic/icongithub.png"
                alt="MyGithub"
                className="myIcon"
              />

              <div>
                <img src="/Pic/Qr.jpg" alt="MyQr" className="qrSize" />
              </div>
            </div>
          </div>
        </div>
        <img src="/Pic/bipp.jpg" alt="MyPhoto" className="myPhoto" />
      </div>
    </div>
  );
}
export default Profile;
