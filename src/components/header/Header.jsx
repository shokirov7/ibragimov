import React from "react";
import "./Header.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
  return (
    <div className="header">
      <div className="header_content">
        <div className="header_left">
          <span className="header_name">ibragimov.prodd</span>
          <h1 className="header_title">
            Преврати <span>свои</span> видео в <span>шедевры</span>
          </h1>
          <p className="header_title2">
            Мобильные видео в инструмент для привлечения аудитории.
          </p>
          <div className="header_button left">
            <Link to="plansSection" smooth={true} duration={500}>
              Я хочу занять свое место
            </Link>
          </div>
        </div>
        <div className="header_right">
          <div
            className="header_right_video"
            style={{
              position: "relative",
              width: "340px",
              height: "592px",
            }}
          >
            <iframe
              src="https://kinescope.io/embed/amj4d5LQWJa9mxfgAeQ1MZ"
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write"
              frameBorder="0"
              allowFullScreen
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
              }}
            />
          </div>
          <div className="header_button right">
            <Link to="plansSection" smooth={true} duration={500}>Я хочу занять свое место</Link>
          </div>
        </div>
      </div>
      <div className="bg"></div>
    </div>
  );
}

export default Header;
