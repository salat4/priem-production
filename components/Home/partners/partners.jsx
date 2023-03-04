import Image from "next/image";
import React from "react";
import { Title } from "@/general";
import s from "./partners.module.css";
import Yuri from "@/images/Yuri.png";
import Alisa from "@/images/Alisa.png";
import Denis from "@/images/Denis.png";
import Ruslan from "@/images/Ruslan.png";
import Vladimir from "@/images/Vladimir.png";
import { useTranslation } from "react-i18next";
function Partners() {
  const { t } = useTranslation("translation");
  return (
    // <section className={s.partners}>
    // <div className="container">
    <div className={s.partners__content}>
      <Title
        text={t("homePage.section.partners.title")}
        style={"title"}
        rotate={false}
      />
      <ul className={s.partners__list}>
        <li className={s.partners__list__item}>
          <Image
            className={s.partners__list__item__image}
            src={Yuri}
            // width={220}
            // height={240}
            alt="Yuri Konovalsky"
          />
          <div className={s.partners__list__item__description}>
            <p className={s.partners__list__item__names}>Yuri Konovalsky</p>
            <p className={s.partners__list__item__job}>1AC Focuspuller </p>
          </div>
        </li>
        <li className={s.partners__list__item}>
          <Image
            className={s.partners__list__item__image}
            src={Alisa}
            // width={220}
            // height={240}
            alt="Alisa Ulyankina"
          />
          <div className={s.partners__list__item__description}>
            <p className={s.partners__list__item__names}>Alisa Ulyankina</p>
            <p className={s.partners__list__item__job}>Make up </p>
          </div>
        </li>
        <li className={s.partners__list__item}>
          <Image
            className={s.partners__list__item__image}
            src={Ruslan}
            // width={220}
            // height={240}
            alt="Ruslan Bogdan"
          />
          <div className={s.partners__list__item__description}>
            <p className={s.partners__list__item__names}>Ruslan Bogdan</p>
            <p className={s.partners__list__item__job}>Dop</p>
          </div>
        </li>
        <li className={s.partners__list__item}>
          <Image
            className={s.partners__list__item__image}
            src={Vladimir}
            // width={220}
            // height={240}
            alt="Vladimir Akulov"
          />
          <div className={s.partners__list__item__description}>
            <p className={s.partners__list__item__names}>Vladimir Akulov</p>
            <p className={s.partners__list__item__job}>Gafer </p>
          </div>
        </li>
        <li className={s.partners__list__item}>
          <Image
            className={s.partners__list__item__image}
            src={Denis}
            // width={220}
            // height={240}
            alt="Denis Shyst"
          />
          <div className={s.partners__list__item__description}>
            <p className={s.partners__list__item__names}>Denis Shyst</p>
            <p className={s.partners__list__item__job}>Gafer </p>
          </div>
        </li>
      </ul>
    </div>
    // </div>
    // </section>
  );
}

export default Partners;
