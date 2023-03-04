import axios from "axios";
import { useState, useEffect } from "react";
import { Backdrop } from "@/general";
import s from "./Form.module.css";

function FormSubscribe({ toggleShowBackdrop, course }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const sendSubscribe = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      return;
    }
    // axios
    //   .post("http://localhost:8080/submit", {
    //     phone,
    //     name,
    //     course,
    //   })
    //   .then((res) => console.log(res));
    setName("");
    setPhone("");
    toggleShowBackdrop(e);
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
          className={s.subscribe_form}
          autoComplete="off"
          data-close="close"
        >
          <input
            className={s.subscribe_form__input}
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            className={s.subscribe_form__input}
            type="tel"
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <button
            className={s.buttonForm}
            type="submit"

            // onClick={toggleShowBackdrop}
          >
            Send
          </button>
        </form>
      </div>
    </Backdrop>
  );
}

export default FormSubscribe;
