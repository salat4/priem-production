import s from "./contact.module.css";

export const Contacts = () => {
  return (
    <section>
      <div className={s.wrap}>
        <div className={s.section}>
          <h2 className={s.title}>Як нас знайти</h2>
          <div className={s.social_list}>
            <p className={s.text}>
              наші роботи:
              <br />
              <a
                className={s.social_link}
                href="https://www.instagram.com/priem.production/?igshid=YmMyMTA2M2Y%3D"
              >
                Instagram
              </a>
            </p>
            <p className={s.text}>
              наша пошта:
              <br />
              <a
                className={s.social_link}
                href="mailto:priem.mih.production@gmail.com"
              >
                priem.mih.production@gmail.com
              </a>
            </p>
          </div>
          
          <form className={s.subscribe_form} autoComplete="off">
            <input
              className={s.subscribe_form__input}
              type="email"
              placeholder="Ваша пошта"
            />
            <button className={s.btn} type="submit">
            Підписатися
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
