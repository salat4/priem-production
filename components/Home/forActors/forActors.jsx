import React, { useState } from "react";
import s from "../about/about.module.css";
import ss from "./forActors.module.css";
import { toggleBackdrop, Title, Button } from "@/generalFunc";
import { useTranslation } from "react-i18next";
import Link from "next/link";

function ForActors() {
  const { t } = useTranslation("translation");

  return (
    <section className={ss.section}>
      <div className="container">
        <div className={`${s.contentContainer}`}>
          <Title text={"For actors"} style={"title"} styleForContainer={s} />
          <p className={`${s.textAbout}`}>
            {t("homePage.section.actors.text.first")}
          </p>
          <p className={`${s.textAbout}`}>
            <span className={ss.attentionText}>PRIËM PRODUCTION </span>
            {t("homePage.section.actors.text.secondary")}
          </p>
          <Button style={ss.forActorsButtonMore}>
            <Link href="/courses">{t("buttonMore")}</Link>
          </Button>
        </div>
      </div>
      {/* {showForm && <FormSubscribe toggleShowBackdrop={toggleShowBackdrop} />} */}
    </section>
  );
}

export default ForActors;
