import React from "react";
import Profile from "../components/Profile";
import Education from "../components/Education";
import Whyhireme from "../components/Whyhireme";
import Backgroundexperiend from "../components/Backgroundexperiend";
import Skill from "../components/Skill";
import "./stylemain.css";

function Main() {
  return (
    <div className="background">
      <div className="page">
        <Profile />
        <Education />
        <Whyhireme />
        <Backgroundexperiend />
        <Skill />
      </div>
    </div>
  );
}

export default Main;
