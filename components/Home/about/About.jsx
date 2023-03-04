import s from "./about.module.css";
import { useTranslation } from "react-i18next";
import { FormSubscribe, toggleBackdrop, Title, Button } from "@/general";
import { useState } from "react";

function About() {
  const { t } = useTranslation("translation");
  const [showForm, setShowForm] = useState(false);
  console.log("first");
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
          <Title
            text={t("homePage.section.about.title")}
            style={"title"}
            rotate={true}
          />
          <p className={`${s.textAbout}`}>
            {t("homePage.section.about.text.first")}
          </p>
          <p className={`${s.textAbout}`}>
            {t("homePage.section.about.text.secondary")}
          </p>
          <Button showForm={() => setShowForm(true)} text={t("buttonLeave")} />
        </div>
      </div>
      {showForm && <FormSubscribe toggleShowBackdrop={toggleShowBackdrop} />}
    </section>
  );
}

export default About;
