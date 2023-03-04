import React, { useState } from "react";
import s from "../about/about.module.css";
import ss from "./forActors.module.css";
import { FormSubscribe, toggleBackdrop, Title, Button } from "@/generalFunc";
import { useTranslation } from "react-i18next";

function ForActors() {
  const { t } = useTranslation("translation");
  const [showForm, setShowForm] = useState(false);

  const toggleShowBackdrop = (e) => {
    const DoClose = toggleBackdrop(e);
    if (`${DoClose}` === "false") {
      setShowForm(toggleBackdrop(e));
    }
  };

  return (
    <section className={ss.section}>
      <div className="container">
        <div className={`${s.contentContainer}`}>
          <Title
            text={t("homePage.section.actors.title")}
            style={"title"}
            rotate={true}
          />
          <p className={`${s.textAbout}`}>
            {t("homePage.section.actors.text.first")}
          </p>
          <p className={`${s.textAbout}`}>
            <span className={ss.attentionText}>PRIËM PRODUCTION </span>
            {t("homePage.section.actors.text.secondary")}
          </p>
          <Button showForm={() => setShowForm(true)} text={t("buttonMore")} />
        </div>
      </div>
      {showForm && <FormSubscribe toggleShowBackdrop={toggleShowBackdrop} />}
    </section>
  );
}

export default ForActors;
