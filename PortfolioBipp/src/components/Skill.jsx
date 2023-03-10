import React, { useState } from "react";
import "./styleskill.css";

function Skill() {
  const [showProgramming, setShowProgramming] = useState(false);
  const [showFrameworks, setShowFrameworks] = useState(false);
  const [showDatabase, setShowDatabase] = useState(false);
  const [showOrther, setShowOrther] = useState(false);

  const ProgrammingClick = () => {
    setShowProgramming(!showProgramming);
  };

  // const Programmingicon = () => {
  //   return (
  //     <div className="icomImg">
  //       <img src="/Pic/iconshtml.png" alt="" className="icimg" />
  //       <img src="/Pic/iconscss.png" alt="" className="icimg" />
  //       <img src="/Pic/iconsdart.png" alt="" className="icimg" />
  //       <img src="/Pic/iconsflutter.png" alt="" className="icimg" />
  //       <img src="/Pic/iconsjava.png" alt="" className="icimg" />
  //       <img src="/Pic/iconsjavascript.png" alt="" className="icimg" />
  //       <img src="/Pic/iconspython.png" alt="" className="icimg" />
  //     </div>
  //   );
  // };

  const FramworksClick = () => {
    setShowFrameworks(!showFrameworks);
  };
  // const Framworks = () => {
  //   return (
  //     <div className="icomImg">
  //       <img src="/Pic/iconsreact.png" alt="" className="icimg" />
  //       <img src="/Pic/iconsvue-js.png" alt="" className="icimg" />
  //       <img src="/Pic/iconsflutter.png" alt="" className="icimg" />
  //       <img src="/Pic/iconsnode-js.png" alt="" className="icimg" />
  //     </div>
  //   );
  // };
  const DatabaseClick = () => {
    setShowDatabase(!showDatabase);
  };
  // const Database = () => {
  //   return (
  //     <div className="icomImg">
  //       <img src="/Pic/icongithub.png" alt="" className="icimg" />
  //     </div>
  //   );
  // };
  const OrtherClick = () => {
    setShowOrther(!showOrther);
  };

  // const Orther = () => {
  //   return (
  //     <div className="icomImg">
  //       <img src="/Pic/iconsmysql.png" alt="" className="icimg" />
  //     </div>
  //   );
  // };

  return (
    <div className="color">
      <div className="spt"></div>
      <div className="ProgrammingLanguages">
        <div className="head2">
          <h1>SKILLS</h1>
        </div>
      </div>
      <div className="spg"></div>
      <div className="sty">
        <h1> Programming Languages</h1>
        <button className="buttom" onClick={ProgrammingClick}>
          <h2> Click </h2>
        </button>
      </div>
      <div>
        {showProgramming ? (
          <div className="icomImg">
            <img src="/Pic/iconshtml.png" alt="" className="icimg" />
            <img src="/Pic/iconscss.png" alt="" className="icimg" />
            <img src="/Pic/iconsdart.png" alt="" className="icimg" />
            <img src="/Pic/iconsflutter.png" alt="" className="icimg" />
            <img src="/Pic/iconsjava.png" alt="" className="icimg" />
            <img src="/Pic/iconsjavascript.png" alt="" className="icimg" />
            <img src="/Pic/iconspython.png" alt="" className="icimg" />
          </div>
        ) : (
          ""
        )}
      </div>

      {/*  */}

      <div className="sty">
        <h1>Framworks</h1>
        <button className="buttom" onClick={FramworksClick}>
          <h2> Click </h2>
        </button>
      </div>
      <div>
        {showFrameworks ? (
          <div className="icomImg">
            <img src="/Pic/iconsreact.png" alt="" className="icimg" />
            <img src="/Pic/iconsvue-js.png" alt="" className="icimg" />
            <img src="/Pic/iconsflutter.png" alt="" className="icimg" />
            <img src="/Pic/iconsnode-js.png" alt="" className="icimg" />
          </div>
        ) : (
          " "
        )}
      </div>

      {/*  */}

      <div className="sty">
        <h1>Database</h1>
        <button className="buttom" onClick={DatabaseClick}>
          <h2> Click </h2>
        </button>
      </div>
      {showDatabase ? (
        <div className="icomImg">
          <img src="/Pic/icongithub.png" alt="" className="icimg" />
        </div>
      ) : (
        " "
      )}

      {/*  */}

      <div className="sty">
        <h1>Orther Tool</h1>
        <button className="buttom" onClick={OrtherClick}>
          <h2> Click</h2>
        </button>
      </div>
      {showOrther ? (
        <div className="icomImg">
          <img src="/Pic/iconsmysql.png" alt="" className="icimg" />
        </div>
      ) : (
        " "
      )}

      <div className="spt"></div>
      <div className="texth">
        <div className="textm">
          <h1>Marketing Skills</h1>
          <div className="spt"></div>
          <ul className="f">
            <li className="boxull">
              <h2>Facebook & Instagram Ads Manager</h2>
            </li>
            <li>
              <h2>Tiktok Ads Manager</h2>
            </li>
            <li>
              <h2>Line OA</h2>
            </li>
            <li>
              <h2>Line Shop</h2>
            </li>
            <li>
              <h2>Google Ads</h2>
            </li>
            <li>
              <h2>Google Analytics</h2>
            </li>
            <li>
              <h2>Google Search Console</h2>
            </li>
            <li>
              <h2>Chatbot</h2>
            </li>
            <li>
              <h2>Ecommerce</h2>
            </li>
          </ul>
        </div>
      </div>
      <div className="spt"></div>
      <div className="texth">
        <div className="textm">
          <h1>Other Skills</h1>
          <div className="spt"></div>
          <ul className="f">
            <li className="boxull">
              <h2>MS Word</h2>
            </li>
            <li>
              <h2>MS Excel</h2>
            </li>
            <li>
              <h2>MS Power Point</h2>
            </li>
            <li>
              <h2>Adobe Photoshop</h2>
            </li>
            <li>
              <h2>Illustrator</h2>
            </li>
            <li>
              <h2>CANVA</h2>
            </li>
            <li>
              <h2>Pixma</h2>
            </li>
            <li>
              <h2>Premiere Pro </h2>
            </li>
          </ul>
        </div>
      </div>
      <div className="dl">
        <div>
          <h2>
            Please consider and give me the opportunity to show in your company.
          </h2>
        </div>
        <button className="budl">
          <h2>Dowload</h2>
        </button>
      </div>
    </div>
  );
}

export default Skill;
