import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h1 className="footer_title">Остались вопросы?</h1>
      <p className="footer_subtitle">
        Можешь задать их напрямую мне в личный телеграм
      </p>
      <Link
        onClick={() => {
          window.ym(99593582, "reachGoal", "speakerClick");
        }}
        className="footer_button"
        target="_blank"
        to="https://t.me/Ibragimovadmin"
      >
        Написать мне в Телеграм
      </Link>
      <Link
        onClick={() => {
          window.ym(99593582, "reachGoal", "siteCreator");
        }}
        to="https://t.me/aaaa_111000"
        className="site_creator"
      >
        Разработка сайта Амирхон Шокиров
      </Link>
    </footer>
  );
}

export default Footer;
