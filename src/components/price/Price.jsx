import React from "react";
import "./Price.css";

function Price() {
  return (
    <div className="price">
      <div className="price_container">
        <span className="price_title1">Окей</span>
        <h1 className="price_title2">Сколько это всё стоит</h1>
        <p className="price_title3">
          Ну смотри, если бы ты все это покупал по отдельности, тебе бы обошлось
        </p>
        <h2 className="price_title4">минимум в 126.000 рублей</h2>
        <p className="price_title5">
          И это при том, что большинство этих продуктов не продаются
        </p>
        <p className="price_title6">а даже если кто-то продаёт…</p>
        <h3 className="price_title7">
          То это{" "}
          <span>дядя Чингиз снимает ролики, которые никому не нужны</span>
        </h3>
        <h4 className="price_title8">
          но про настоящий секрет мобилографии знают <span>только единицы))</span>
        </h4>
      </div>
      <div className="price_bg"></div>
    </div>
  );
}

export default Price;
