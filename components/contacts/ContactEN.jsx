import s from "./contact.module.css";

import {
  INSTAGRAM,
  EMAIL_PRODUCTION,
  TEL_GLEB,
  TEL_IRA,
} from "../../Constants/Constants";
// import { useCallback, useEffect, useState } from "react";

export const Contacts = () => {
  // const [fix, setFix] = useState("qwe");

  // const styleAbout = useCallback(() => {
  //   let target = document.getElementById("footer");

  //   if (!target) {
  //     return;
  //   }
  //   var targetPosition = {
  //       top: window.pageYOffset + target.getBoundingClientRect().top,
  //     },
  //     windowPosition = {
  //       bottom: window.pageYOffset + document.documentElement.clientHeight,
  //     };

  //   if (targetPosition.top < windowPosition.bottom) {
  //     setFix("isFixed");
  //   } else {
  //     setFix("qwe");
  //   }
  // }, []);

  // useEffect(() => {
  //   if (window) {
  //     window.addEventListener("scroll", styleAbout);
  //   }
  //   return () => {
  //     window.removeEventListener("scroll", styleAbout);
  //   };
  // }, [styleAbout]);

  return (
    <section id="contacts" className="asd">
      <div className={s.wrap}>
        <div className={s.section}>
          <h2 className={s.title}>How to contact us</h2>
          <div className={s.social_list}>
            <p className={s.text}>
              see our works:
              <br />
              <a
                className={s.social_link}
                target="_blank"
                rel="noreferrer"
                href={INSTAGRAM}
              >
                Instagram
              </a>
            </p>
            <p className={s.text}>
              our mail:
              <br />
              <a
                className={s.social_link}
                target="_blank"
                href={`mailto:${EMAIL_PRODUCTION}`}
                rel="noreferrer"
              >
                {EMAIL_PRODUCTION}
              </a>
            </p>
            <p className={s.text}>
              Phones:
              <br />
              <a className={s.social_link} href={`tel:${TEL_GLEB}`}>
                {TEL_GLEB}
              </a>
              <br />
              <a className={s.social_link} href={`tel:${TEL_IRA}`}>
                {TEL_IRA}
              </a>
            </p>
          </div>

          <form className={s.subscribe_form} autoComplete="off">
            <input
              className={s.subscribe_form__input}
              type="email"
              placeholder="Your email"
            />
            <button className={s.btn} type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
