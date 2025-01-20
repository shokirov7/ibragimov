import React, { useState } from "react";
import "./Plans.css";
import icon1 from "../../img/icon1.svg";
import icon2 from "../../img/icon2.svg";
import Modal from "../modal/Modal";
import Success from "../modal/Success";

function Plans() {
  const [active, setActive] = useState(false);
  const [planName, setPlanName] = useState("");
  const [reached, setReached] = useState(false);
  return (
    <div id="plansSection" className="plans">
      <div className="plans_wrapper">
        <h1 className="plans_title">Выбери свой тариф</h1>
        <div className="plans_container">
          {/* ------------------------------------------------------------- */}
          <div className="plan plan_silver">
            <span className="plan_name">Сильвер</span>
            <h3 className="plan_subtitle">Курс без обратной связи</h3>
            <div className="plan_desc">
              <h1 className="plan_desc_title">Содержание</h1>
              <ul className="plan_modules">
                <li>
                  Модуль 1 <br /> <span>Психология</span>
                </li>
                <li>
                  Модуль 2 <br /> <span>Настройка техники</span>
                </li>
                <li>
                  Модуль 3 <br /> <span>Практика</span>
                </li>
                <li>
                  Модуль 4 <br /> <span>Монтаж</span>
                </li>
                <li className="plan_module_out">
                  <span>Модуль 5</span> <br /> <span>Эффекты</span>
                </li>
                <li className="plan_module_out">
                  <span>Модуль 6</span> <br /> <span>Цветокоррекция</span>
                </li>
                <li className="plan_module_out">
                  <span>Модуль 7</span> <br />{" "}
                  <span>Как продвигать себя как мобилографа</span>
                </li>
                <li className="plan_module_out">
                  <span>Модуль 8</span> <br /> <span>Как найти клиентов</span>
                </li>
              </ul>
              <span className="plan_bonus plan_bonus_out">Бонусы</span>
            </div>
            <div className="plan_inside">
              <h1 className="plan_inside_title">Что внутри</h1>
              <ul className="plan_inside_wrapper">
                <li>Доступ к материалам курса 6 месяцев после покупки</li>
                <li className="plan_inside_out">Общий чат участников</li>
                <li className="plan_inside_out">Консультация от спикера</li>
              </ul>
            </div>
            <div className="plan_price">
              <span className="plan_price1">150$</span>
              <span className="plan_price2">120$</span>
            </div>
            <div className="plan_button">
              <button
                onClick={() => {
                  window.ym(99593582, "reachGoal", "formButton");
                  setActive(true);
                  setPlanName("Сильвер");
                  console.log(active);
                }}
              >
                Оставить заявку
              </button>
            </div>
            <div className="plan_icons">
              <img src={icon1} alt="" />
            </div>
          </div>
          {/* ------------------------------------------------------------- */}
          <div className="plan plan_gold">
            <span className="plan_name">Голд</span>
            <h3 className="plan_subtitle">Полный онлайн курс в записи</h3>
            <div className="plan_desc">
              <h1 className="plan_desc_title">Содержание</h1>
              <ul className="plan_modules">
                <li>
                  Модуль 1 <br /> <span>Психология</span>
                </li>
                <li>
                  Модуль 2 <br /> <span>Настройка техники</span>
                </li>
                <li>
                  Модуль 3 <br /> <span>Практика</span>
                </li>
                <li>
                  Модуль 4 <br /> <span>Монтаж</span>
                </li>
                <li>
                  Модуль 5 <br /> <span>Эффекты</span>
                </li>
                <li>
                  Модуль 6 <br /> <span>Цветокоррекция</span>
                </li>
                <li>
                  Модуль 7 <br />{" "}
                  <span>Как продвигать себя как мобилографа</span>
                </li>
                <li>
                  Модуль 8 <br /> <span>Как найти клиентов</span>
                </li>
              </ul>
              <span className="plan_bonus">Бонусы</span>
            </div>
            <div className="plan_inside">
              <h1 className="plan_inside_title">Что внутри</h1>
              <ul className="plan_inside_wrapper">
                <li>Доступ к материалам курса 6 месяцев после покупки</li>
                <li>Общий чат участников</li>
                <li>Консультация от спикера</li>
              </ul>
            </div>
            <div className="plan_price">
              <span className="plan_price1">200$</span>
              <span className="plan_price2">150$</span>
            </div>
            <div className="plan_button">
              <button
                onClick={() => {
                  window.ym(99593582, "reachGoal", "formButton");
                  setActive(true);
                  setPlanName("Голд");
                  console.log(active);
                }}
              >
                Оставить заявку
              </button>
            </div>
            <div className="plan_icons">
              <img src={icon1} alt="" />
            </div>
          </div>
          {/* ------------------------------------------------------------- */}
          <div className="plan plan_platinum">
            <span className="plan_name">
              Платинум{" "}
              <span className="plan_name2 hidden">Самый популярный</span>
            </span>
            <span className="plan_name2">Самый популярный</span>
            <h3 className="plan_subtitle">
              Полный онлайн курс в записи <br />
              <span>+оффлайн практика и монтаж</span>{" "}
            </h3>
            <div className="plan_desc">
              <h1 className="plan_desc_title">Содержание</h1>
              <div className="plan_modules">
                <span>
                  <strong>Модуль 1</strong>
                  <br />
                  <b>Психология</b>
                </span>
                <span>
                  <strong>Модуль 2</strong>
                  <br />
                  <b>Настройка техники</b>
                </span>
                <span>
                  <strong>Модуль 3</strong>
                  <br />
                  <b>Практика</b>
                </span>
                <span>
                  <strong>Модуль 4</strong>
                  <br />
                  <b>Монтаж</b>
                </span>
                <span>
                  <strong>Модуль 5</strong>
                  <br />
                  <b>Эффекты</b>
                </span>
                <span>
                  <strong>Модуль 6</strong>
                  <br />
                  <b>Цветокоррекция</b>
                </span>
                <span>
                  <strong>Модуль 7</strong>
                  <br />
                  <b>Как продвигать себя как мобилографа</b>
                </span>
                <span>
                  <strong>Модуль 8</strong>
                  <br />
                  <b>Как найти клиентов</b>
                </span>
              </div>
              <span className="plan_bonus">Бонусы</span>
            </div>
            <div className="plan_inside">
              <h1 className="plan_inside_title">Что внутри</h1>
              <ul className="plan_inside_wrapper">
                <li>Доступ к материалам курса 6 месяцев после покупки</li>
                <li>Общий чат участников</li>
                <li>Консультация от спикера</li>
              </ul>
            </div>
            <div className="plan_price">
              <span className="plan_price1">400$</span>
              <span className="plan_price2">300$</span>
            </div>
            <div className="plan_button">
              <button
                onClick={() => {
                  window.ym(99593582, "reachGoal", "formButton")
                  setActive(true);
                  setPlanName("Платинум");
                  console.log(active);
                }}
              >
                Оставить заявку
              </button>
            </div>
            <div className="plan_icons">
              <img src={icon1} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="plans_bg"></div>
      <Modal
        active={active}
        setActive={setActive}
        planName={planName}
        reached={reached}
        setReached={setReached}
      />
      <Success reached={reached} setReached={setReached} />
    </div>
  );
}

export default Plans;
