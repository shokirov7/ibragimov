import React from "react";
import "./Speaker.css";

function Speaker() {
  return (
    <div className="speaker">
      <h1 className="speaker_title">Спикер курса</h1>
      <h2 className="speaker_name">Жалолиддин Ибрагимов</h2>
      <span className="merits_container">
        <span className="merit1">
          3+ <span>года</span> опыта
        </span>
        <span className="merit2">30+ <span>проектов &nbsp;</span></span>
        <span className="merit3">
          Более <span>15 млн</span> просмотров в <span>Reels</span>
        </span>
      </span>
    </div>
  );
}

export default Speaker;
