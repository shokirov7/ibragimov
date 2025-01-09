import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import Speaker from "../../components/speaker/Speaker";
import Ways from "../../components/ways/Ways";
import Courses from "../../components/courses/Courses";
import Modules from "../../components/modules/Modules";
import Price from "../../components/price/Price";
import Plans from "../../components/plans/Plans";

function Home() {
  return (
    <div className="Home">
      <Header />
      <div className="glow_line"></div>
      <Courses />
      <div className="glow_line"></div>
      <Speaker />
      <div className="glow_line glow_line_mod"></div>
      <Ways />
      <div className="glow_line glow_line_mod"></div>
      <Modules />
      <div className="glow_line"></div>
      <Price />
      <div className="glow_line glow_line_mod"></div>
      <Plans />
    </div>
  );
}

export default Home;
