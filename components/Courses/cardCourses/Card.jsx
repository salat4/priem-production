import React, { useEffect, useState } from "react";
import Image from "next/image";
import textCard from "@/locales/en/translation.json";
import { Button } from "@/general";
import s from "./card.module.css";
import "animate.css";
import { useTranslation } from "react-i18next";

export const BasicCard = ({ image, openForm }) => {
  const { t } = useTranslation("translation");
  const [show, setShow] = useState(false);
  const [key, setKey] = useState(null);
  const [additKey, setAdditKey] = useState(null);

  const showInfoCard = () => {
    if (window.innerWidth > 800) {
      return;
    }
    setShow(!show);
  };

  useEffect(() => {
    const result = Object.keys(textCard.coursesPage.card)
      .slice(0, 15)
      .reduce((acc, cur, idx) => {
        if (idx % 2 === 0) {
          acc.push({
            key1: cur,
            key2: Object.keys(textCard.coursesPage.card)[idx + 1],
          });
        }
        return acc;
      }, []);
    const res = Object.keys(textCard.coursesPage.card).slice(16, 19);
    setAdditKey(res);
    setKey(result);
    if (window.innerWidth > 800) {
      setShow(true);
    }
  }, []);

  return (
    <div className={s.card}>
      <div onClick={showInfoCard} className={s.cardImageContainer}>
        <Image src={image} alt="Basic course" height={102} />
      </div>
      {show && (
        <div className={s.optionsForCard}>
          {key &&
            key.map((text, inx) => {
              if (inx < 4) {
                return (
                  <p
                    key={inx}
                    className={`${
                      s.activeBasic
                    } ${"animate__animated animate__flipInX"}`}
                  >
                    <span>{t(`coursesPage.card.${text.key1}`)}</span>
                    {t(`coursesPage.card.${text.key2}`)}
                  </p>
                );
              }
              return (
                <p
                  key={inx}
                  className={`${
                    s.hidden
                  } ${"animate__animated animate__flipInX"}`}
                >
                  <span>{t(`coursesPage.card.${text.key1}`)}</span>
                  {t(`coursesPage.card.${text.key2}`)}
                </p>
              );
            })}
          <div className={s.separatorBasic}></div>
          <div className={s.additional}>
            <p
              className={`${
                s.additionalBasic
              } ${"animate__animated animate__flipInX"}`}
            >
              - {t("coursesPage.cardTime.17")}
              <span>{t("coursesPage.cardTime.18")}</span>
            </p>
            {additKey &&
              additKey.map((el, indx) => {
                return (
                  <p
                    className={`${
                      s.additionalBasic
                    } ${"animate__animated animate__flipInX"}`}
                    key={indx}
                  >
                    - {t(`coursesPage.card.${el}`)}
                  </p>
                );
              })}
            <p className={s.additionalPointHidden}>
              - {t("coursesPage.card.23")}
            </p>
          </div>
          <Button
            id="Basic course"
            showForm={openForm}
            text={t("buttonLeave")}
          />
        </div>
      )}
    </div>
  );
};

export const ProCard = ({ image, openForm }) => {
  const { t } = useTranslation("translation");
  const [show, setShow] = useState(false);
  const [key, setKey] = useState(null);
  const [additKey, setAdditKey] = useState(null);

  const showInfoCard = () => {
    if (window.innerWidth > 800) {
      setShow(true);
      return;
    }
    setShow(!show);
  };

  useEffect(() => {
    const result = Object.keys(textCard.coursesPage.card)
      .slice(0, 15)
      .reduce((acc, cur, idx) => {
        if (idx % 2 === 0) {
          acc.push({
            key1: cur,
            key2: Object.keys(textCard.coursesPage.card)[idx + 1],
          });
        }
        return acc;
      }, []);
    const res = Object.keys(textCard.coursesPage.card).slice(16);
    setAdditKey(res);
    setKey(result);
    if (window.innerWidth > 800) {
      setShow(true);
    }
  }, []);

  return (
    <div className={s.card}>
      <div onClick={showInfoCard} className={s.cardImageContainer}>
        <Image src={image} alt="Pro course" height={102} />
      </div>
      {show && (
        <div className={s.optionsForCard}>
          {key &&
            key.map((text, inx) => {
              if (inx < 6) {
                return (
                  <p
                    key={inx}
                    className={`${
                      s.activePro
                    } ${"animate__animated animate__flipInX"}`}
                  >
                    <span>{t(`coursesPage.card.${text.key1}`)}</span>
                    {t(`coursesPage.card.${text.key2}`)}
                  </p>
                );
              }
              return (
                <p
                  key={inx}
                  className={`${
                    s.hidden
                  } ${"animate__animated animate__flipInX"}`}
                >
                  <span>{t(`coursesPage.card.${text.key1}`)}</span>
                  {t(`coursesPage.card.${text.key2}`)}
                </p>
              );
            })}
          <div className={s.separatorPro}></div>
          <div className={s.additional}>
            <p
              className={`${
                s.additionalPro
              } ${"animate__animated animate__flipInX"}`}
            >
              - {t("coursesPage.cardTime.17")}
              <span>{t("coursesPage.cardTime.19")}</span>
            </p>
            {additKey &&
              additKey.map((el, indx) => {
                return (
                  <p
                    key={indx}
                    className={`${
                      s.additionalPro
                    } ${"animate__animated animate__flipInX"}`}
                  >
                    - {t(`coursesPage.card.${el}`)}
                  </p>
                );
              })}
          </div>
          <Button id="Pro course" showForm={openForm} text={t("buttonLeave")} />
        </div>
      )}
    </div>
  );
};

export const VipCard = ({ image, openForm }) => {
  const { t } = useTranslation("translation");
  const [show, setShow] = useState(false);
  const [key, setKey] = useState(null);
  const [additKey, setAdditKey] = useState(null);

  const showInfoCard = () => {
    if (window.innerWidth > 800) {
      setShow(true);
      return;
    }
    setShow(!show);
  };

  useEffect(() => {
    const result = Object.keys(textCard.coursesPage.card)
      .slice(0, 15)
      .reduce((acc, cur, idx) => {
        if (idx % 2 === 0) {
          acc.push({
            key1: cur,
            key2: Object.keys(textCard.coursesPage.card)[idx + 1],
          });
        }
        return acc;
      }, []);
    const res = Object.keys(textCard.coursesPage.card).slice(16);
    setAdditKey(res);
    setKey(result);
    if (window.innerWidth > 800) {
      setShow(true);
    }
  }, []);

  return (
    <div className={s.card}>
      <div onClick={showInfoCard} className={s.cardImageContainer}>
        <Image src={image} alt="Vip course" height={102} />
      </div>
      {show && (
        <div className={s.optionsForCard}>
          {key &&
            key.map((text, inx) => {
              return (
                <p
                  key={inx}
                  className={`${
                    s.activeVip
                  } ${"animate__animated animate__flipInX"}`}
                >
                  <span>{t(`coursesPage.card.${text.key1}`)}</span>
                  {t(`coursesPage.card.${text.key2}`)}
                </p>
              );
            })}
          <div className={s.separatorVip}></div>
          <div className={s.additional}>
            <p
              className={`${
                s.additionalVip
              } ${"animate__animated animate__flipInX"}`}
            >
              - {t("coursesPage.cardTime.17")}
              <span>{t("coursesPage.cardTime.20")}</span>
            </p>
            {additKey &&
              additKey.map((el, indx) => {
                return (
                  <p
                    className={`${
                      s.additionalVip
                    } ${"animate__animated animate__flipInX"}`}
                    key={indx}
                  >
                    - {t(`coursesPage.card.${el}`)}
                  </p>
                );
              })}
          </div>
          <Button id="Vip course" showForm={openForm} text={t("buttonLeave")} />
        </div>
      )}
    </div>
  );
};
