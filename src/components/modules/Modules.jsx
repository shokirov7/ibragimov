import React, { useRef, useState } from "react";
import "./Modules.css";

function Modules() {
  const refs = useRef([]);
  const modules = [
    {
      id: 1,
      name: "Модуль 1. Психология",
      desc: "Введение в курс, основные цели и возможности мобильной съемки.",
      stages: [
        "Страхи",
        "Уверенность",
        "Креатив",
        "Опыт",
        "Насмотренность",
      ],
    },
    {
      id: 2,
      name: "Модуль 2. Настройка техники",
      stages: [
        "Настройка камеры",
        "Выбор стабилизатора и его правильное использование (DJI MIMO)",
        "Приложения для монтажа",
      ],
      desc: null,
    },
    {
      id: 3,
      name: "Модуль 3. Практика",
      stages: [
        "Статичное видео",
        "Динамичное видео",
        "Эффект робота",
      ],
      desc: null,
    },
    {
      id: 4,
      name: "Модуль 4. Практика с машиной (Automotive)",
      stages: [
        "Начало монтажа (музыка)",
        "Трекинг",
        "Статичный стиль",
        "Динамичный стиль",
        "Эффект робота",
        "Спидрамп в Blurrr",
      ],
      desc: "Automotive",
    },
    {
      id: 5,
      name: "Модуль 5. Эффекты",
      stages: null,
      desc: "Изучение различных эффектов для улучшения качества видео и создания уникального контента.",
    },
    {
      id: 6,
      name: "Модуль 6. Цветокоррекция",
      stages: null,
      desc: "Техники работы с цветом для улучшения визуальной составляющей ваших видеоматериалов.",
    },
    {
      id: 7,
      name: "Модуль 7. Как продвигать себя как мобилографа",
      stages: null,
      desc: "Стратегии личного бренда и продвижения ваших работ в социальных сетях и других платформах.",
    },
    {
      id: 8,
      name: "Модуль 8. Как найти клиентов",
      stages: null,
      desc: "Методы поиска и привлечения клиентов для работы с мобильной съемкой.",
    },
  ];
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    setSelected((prev) => (prev === i ? null : i));
  };

  return (
    <div className="modules">
      <div style={{ color: "white" }} className="modules_container">
        <h1 className="modules_title">Программа курса</h1>
        <h2 className="modules_title2">
          Вот, что ты получишь внутри каждого модуля...
        </h2>
        <span className="modules_title3">Всё самое необходимое</span>
        <div className="module_container">
          {modules.map((e, i) => (
            <span
              key={i}
              className={selected === i ? "module active" : "module"}
            >
              <div className="module_top" onClick={() => toggle(i)}>
                <h1 className="module_name">{e.name}</h1>
                <div
                  className={
                    selected === i ? "module_icon active" : "module_icon"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="15"
                    viewBox="0 0 24 15"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_2_495)">
                      <path
                        d="M13.5789 12.6839C13.5789 11.8119 12.872 11.1049 12 11.1049C11.128 11.1049 10.421 11.8119 10.421 12.6839H13.5789ZM10.8835 13.8005C11.5001 14.4171 12.4999 14.4171 13.1165 13.8005L23.1649 3.75207C23.7815 3.13545 23.7815 2.13572 23.1649 1.5191C22.5482 0.902486 21.5485 0.902486 20.9318 1.5191L12 10.451L3.06811 1.5191C2.45149 0.902486 1.45176 0.902486 0.835143 1.5191C0.218526 2.13572 0.218526 3.13545 0.835143 3.75207L10.8835 13.8005Z"
                        fill="#FF8562"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_495">
                        <rect
                          width="24"
                          height="13.8947"
                          fill="white"
                          transform="translate(0 0.683594)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div
                style={{
                  maxHeight:
                    selected === i
                      ? `${refs.current[i]?.scrollHeight || 0}px`
                      : "0px",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
                ref={(el) => (refs.current[i] = el)}
                className="module_bottom"
              >
                <ul className="module_theme">
                  <li>Темы уроков:</li>
                </ul>
                {!e.stages && e.desc && <p className="module_desc">{e.desc}</p>}

                {e.stages && e.stages.length > 0 && (
                  <ol className="module_stages">
                    {e.stages.map((stage, i) => (
                      <li key={i}>{stage}</li>
                    ))}
                  </ol>
                )}
              </div>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modules;
