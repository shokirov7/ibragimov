import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Modal.css";
import Success from "./Success";

function Modal({ active, setActive, planName, reached, setReached }) {
  const [formData, setFormData] = useState({
    plan: planName,
    name: "",
    phone: "",
    telegram: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Имя не может быть пустым.";
    } else if (!/^[A-Za-zА-Яа-я\s]+$/.test(formData.name)) {
      newErrors.name = "Имя может содержать только буквы.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Номер телефона обязателен.";
    } else if (!/^\+998\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/.test(formData.phone)) {
      newErrors.phone = "Введите номер в формате: +998 90 000 00 00.";
    }

    if (!formData.telegram.trim()) {
      newErrors.telegram = "Укажите ваш Telegram.";
    } else if (!/^@[\w]+$/.test(formData.telegram)) {
      newErrors.telegram = "Введите Telegram в формате @username.";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    const templateParams = {
      planName,
      name: formData.name,
      phone: formData.phone,
      telegram: formData.telegram,
    };

    emailjs
      .send(
        "service_hgpf8wc",
        "template_e9cwpgm",
        templateParams,
        "ZWQcKEZum4sOc0AaG"
      )
      .then(
        () => {
          setActive(false);
          setFormData({
            name: "",
            phone: "",
            telegram: "",
          });
          setReached(true);
        },
        (error) => {
          console.error("Ошибка при отправке:", error);
          alert("Ошибка отправки заявки.");
        }
      );
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
            <input
              id="phone"
              type="tel"
              placeholder="+998 90 000 00 00"
              value={formData.phone}
              onChange={handleChange}
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
              onChange={handleChange}
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
