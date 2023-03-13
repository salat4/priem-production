import axios from "axios";
import { useState, useEffect } from "react";
import { Backdrop } from "@/generalFunc";
import s from "./Form.module.css";
import { useTranslation } from "react-i18next";
import { leaverRequest } from "../../API/leaveRequest";

function FormSubscribe({ toggleShowBackdrop, course }) {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [errorMessageName, setErrorMessageName] = useState("");
  const [errorMessagePhone, setErrorMessagePhone] = useState("");
  const [requestResult, setRequestResult] = useState("");

  const { t } = useTranslation("translation");

  const sendSubscribe = async (e) => {
    e.preventDefault();
    if (!userName) {
      setErrorMessageName(t("form.requiredField"));
      return;
    }
    if (!userPhone) {
      setErrorMessagePhone(t("form.requiredField"));
      return;
    }
    if (userPhone[0] !== "+") {
      setErrorMessagePhone(t("form.errorPhoneCode"));
      return;
    }
    try {
      await leaverRequest({ userName, userPhone, course });
      setRequestResult(t("form.requestSuccessResult"));
    } catch (error) {
      setRequestResult(t("form.requestRejectedResult"));
    }
    setUserName("");
    setUserPhone("");
  };

  const handleChangeUserInfo = (e) => {
    const { value, name } = e.target;
    switch (name) {
      case "name":
        if (/^[а-яА-ЯёЁa-zA-ZіІїЇґҐєЄ]+$/.test(value) || !value) {
          setUserName(value);
          setErrorMessageName("");
          return;
        }
        setErrorMessageName(t("form.errorName"));
        break;
      case "phone":
        if (/^[+\d]+$/.test(value) || !value) {
          setUserPhone(value);
          if (value[0] !== "+") {
            setErrorMessagePhone(t("form.errorPhoneCode"));
            return;
          }
          setErrorMessagePhone("");
          return;
        }
        setErrorMessagePhone(t("form.errorPhone"));

        break;

      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", toggleShowBackdrop);
    return () => {
      window.removeEventListener("keydown", toggleShowBackdrop);
    };
  }, [toggleShowBackdrop]);

  return (
    <Backdrop toggleShowBackdrop={toggleShowBackdrop}>
      <div className={s.formContainer}>
        <form
          onSubmit={sendSubscribe}
          className={s.form}
          autoComplete="off"
          data-close="close"
        >
          <label className={s.labelForm}>
            <input
              className={`${s.formInput} ${s.formInputName}`}
              type="text"
              placeholder={t("form.placeholderName")}
              onChange={handleChangeUserInfo}
              value={userName}
              name="name"
            />
            <span className={s.errorMessage}>
              {errorMessageName && errorMessageName}
            </span>
          </label>
          <label className={s.labelForm}>
            <input
              className={`${s.formInput} ${s.formInputPhone}`}
              type="tel"
              placeholder="+ xxx xxxxxxxx"
              onChange={handleChangeUserInfo}
              value={userPhone}
              name="phone"
            />
            <span className={s.errorMessage}>
              {errorMessagePhone && errorMessagePhone}
            </span>
          </label>
          <button className={s.buttonForm} type="submit">
            {t("form.buttonSend")}
          </button>
        </form>
        <p className={s.resultRequestMessage}>{requestResult}</p>
      </div>
    </Backdrop>
  );
}

export default FormSubscribe;
