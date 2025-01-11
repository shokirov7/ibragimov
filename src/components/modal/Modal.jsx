import React, { useState } from "react";
import Cleave from "cleave.js/react";
import "./Modal.css";

function Modal({ active, setActive, planName, reached, setReached }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    telegram: "@",  // Убедитесь, что @ всегда есть
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Имя не может быть пустым.";
    } else if (!/^[A-Za-zА-Яа-я\s]+$/.test(formData.name)) {
      newErrors.name = "Имя может содержать только буквы.";
    }

    // Проверка на 9 цифр в номере телефона
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim() || phoneDigits.length !== 12) {
      newErrors.phone = "Введите полный номер телефона.";
    }

    if (
      !formData.telegram.trim() ||
      !/^@[A-Za-z0-9_]+$/.test(formData.telegram)
    ) {
      newErrors.telegram =
        "Введите Telegram в формате @username (без @, только латинские буквы, цифры и _).";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));
  };

  const handleTelegramChange = (value) => {
    if (value.startsWith('@')) {
      setFormData((prev) => ({
        ...prev,
        telegram: value,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        telegram: '@' + value.replace('@', '')
      }));
    }
  };

  const sendTelegramMessage = async (message) => {
    const token = "8083087041:AAF_z3sJFzpyGBvs-7KTX-t5H2R16APp--g";
    const chatId = "731868073";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const params = {
      chat_id: chatId,
      text: message,
    };

    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });
    } catch (error) {
      console.error("Ошибка при отправке уведомления в Telegram:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    const message = `
      Новая заявка на курс:
      Тариф: ${planName}
      Имя: ${formData.name}
      Телефон: ${formData.phone}
      Telegram: ${formData.telegram}
    `;

    // Отправка уведомления в Telegram
    await sendTelegramMessage(message);

    setActive(false);
    setFormData({
      name: "",
      phone: "",
      telegram: "@",
    });
    setReached(true);
  };

  return (
    <div
      onClick={() => setActive(false)}
      className={active ? "modal_wrapper active" : "modal_wrapper"}
    >
      <div
        className={active ? "form-container active" : "form-container"}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Выбранный тариф: {planName}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Имя</label>
            <input
              id="name"
              type="text"
              placeholder="Имя Фамилия"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Номер телефона</label>
            <Cleave
              id="phone"
              options={{
                prefix: "+998",
                delimiters: [" ", " ", "-", "-"],
                blocks: [4, 2, 3, 2, 2],
                numericOnly: true,
              }}
              placeholder="+998 90 123-45-67"
              value={formData.phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="telegram">Telegram</label>
            <input
              id="telegram"
              type="text"
              placeholder="@username"
              value={formData.telegram}
              onChange={(e) => handleTelegramChange(e.target.value)} 
            />
            {errors.telegram && (
              <span className="error">{errors.telegram}</span>
            )}
          </div>
          <button className="form-button" type="submit">
            Оставить заявку
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
