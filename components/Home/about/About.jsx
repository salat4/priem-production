import s from "./about.module.css";
import { useTranslation } from "react-i18next";
import { FormSubscribe, toggleBackdrop, Title, Button } from "@/generalFunc";
import { useState } from "react";

function About() {
  const { t } = useTranslation("translation");
  const [showForm, setShowForm] = useState(false);

  const toggleShowBackdrop = (e) => {
    const DoClose = toggleBackdrop(e);
    if (`${DoClose}` === "false") {
      setShowForm(toggleBackdrop(e));
    }
  };

  return (
    <section id="about" className={s.aboutSection}>
      <div className="container">
        <div className={`${s.contentContainer}`}>
          <Title text={"About us"} style={"title"} styleForContainer={s} />
          <p className={`${s.textAbout}`}>
            {t("homePage.section.about.text.first")}
          </p>
          <p className={`${s.textAbout}`}>
            {t("homePage.section.about.text.secondary")}
          </p>
          <Button style="buttonForm" showForm={() => setShowForm(true)}>
            {t("buttonLeave")}
          </Button>
        </div>
      </div>
      {showForm && <FormSubscribe toggleShowBackdrop={toggleShowBackdrop} />}
    </section>
  );
}

export default About;
