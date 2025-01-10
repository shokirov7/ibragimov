import React from "react";
import "./Success.css";
import tick from "../../img/tick.svg";

function Success({ reached, setReached }) {
  return (
    <div onClick={() => setReached(false)} className={reached ? "success_wrapper active" : "success_wrapper"}>
      <div onClick={(e) => e.stopPropagation()} className="success">
        <span className="success_icon">
          <img src={tick} alt="" />
        </span>
        <h1 className="success_title">Заявка принята</h1>
        <button
          onClick={() => setReached(false)}
          className="form-button"
          type="submit"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
}

export default Success;
