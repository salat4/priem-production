import s from "./contact.module.css";

export const Contacts = () => {
  return (
    <section id="contacts">
      <div className={s.wrap}>
        <div className={s.section}>
          <h2 className={s.title}>How to contact us</h2>
          <div className={s.social_list}>
            <p className={s.text}>
              see our works:
              <br />
              <a
                className={s.social_link}
                href="https://www.instagram.com/priem.production/?igshid=YmMyMTA2M2Y%3D"
              >
                Instagram
              </a>
            </p>
            <p className={s.text}>
              our mail:
              <br />
              <a
                className={s.social_link}
                href="mailto:priem.mih.production@gmail.com"
              >
                priem.mih.production@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
