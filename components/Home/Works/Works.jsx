import React, { useEffect, useState } from "react";
import s from "./Works.module.css";
import { Title } from "@/generalFunc";
import { useTranslation } from "react-i18next";
import Image from "next/image";

function Works() {
  const { t, i18n } = useTranslation("translation");
  const [first, setFirst] = useState(false);

  useEffect(() => {}, [i18n.language]);

  const playVideo = (e) => {
    const { id } = e.target;
    const video = document.getElementById(id);
    if (video) {
      video.pause();
    }
  };

  const stopVideo = (e) => {
    const { id } = e.target;
    const video = document.getElementById(id);
    if (video) {
      video.play();
    }
  };

  return (
    <section className={s.works}>
      <div className="container">
        <div className={s.works__content}>
          <Title styleForContainer={s} text={"Our works"} style={"title"} />
          <ul className={s.works__list}>
            <li
              className={s.works__list__item}
              onMouseLeave={stopVideo}
              onMouseMove={playVideo}
            >
              <video
                className={s.video}
                playsInline
                autoPlay
                id={"Author's course"}
                loop
                muted
                type="video/mp4"
                src="https://res.cloudinary.com/priem-cloud/video/upload/v1679087563/work-templates/AUTH-COURSE_qwgxen.mov"
              />
              <div className={s.works__list__item__description}>
                <p className={s.works__list__item__text}>
                  <Image
                    width="241"
                    height="36"
                    src={t("homePage.section.works.autors")}
                    alt="Test"
                  />
                </p>
              </div>
            </li>
            <li
              className={s.works__list__item}
              onMouseLeave={stopVideo}
              onMouseMove={playVideo}
            >
              <video
                className={s.video}
                playsInline
                autoPlay
                id={"Clip"}
                loop
                muted
                type="video/mp4"
                src="https://res.cloudinary.com/priem-cloud/video/upload/c_scale,h_348,w_620/v1679088866/work-templates/Clip_jvgh92.mp4"
              />
              <div className={s.works__list__item__description}>
                <p className={s.works__list__item__text}>
                  <Image
                    width="75"
                    height="36"
                    src={t("homePage.section.works.clip")}
                    alt="Test"
                  />
                </p>
              </div>
            </li>

            <li
              className={s.works__list__item}
              onMouseLeave={stopVideo}
              onMouseMove={playVideo}
            >
              <video
                className={s.video}
                playsInline
                autoPlay
                id={"Adversting"}
                loop
                muted
                type="video/mp4"
                src="https://res.cloudinary.com/priem-cloud/video/upload/v1679087596/work-templates/ADVENT_z35zft.mov"
              />
              <div className={s.works__list__item__description}>
                <p className={s.works__list__item__text}>
                  <Image
                    width="150"
                    height="36"
                    src={t("homePage.section.works.adversting")}
                    alt="Test"
                  />
                </p>
              </div>
            </li>
            <li
              className={s.works__list__item}
              onMouseLeave={stopVideo}
              onMouseMove={playVideo}
            >
              <video
                className={s.video}
                playsInline
                autoPlay
                id={"Actor's portfolio"}
                loop
                muted
                type="video/mp4"
                src="https://res.cloudinary.com/priem-cloud/video/upload/v1679087596/work-templates/ACT-PORT_mztfbc.mov"
              />
              <div className={s.works__list__item__description}>
                <p className={s.works__list__item__text}>
                  <Image
                    width="319"
                    height="36"
                    src={t("homePage.section.works.portfolio")}
                    alt="Test"
                  />
                </p>
              </div>
            </li>
            <li
              className={s.works__list__item}
              onMouseLeave={stopVideo}
              onMouseMove={playVideo}
            >
              <video
                className={s.video}
                playsInline
                autoPlay
                id={"Short-metr"}
                loop
                muted
                type="video/mp4"
                src="https://res.cloudinary.com/priem-cloud/video/upload/v1679307906/work-templates/SHORT_ihtbbs.mov"
              />
              <div className={s.works__list__item__description}>
                <p className={s.works__list__item__text}>
                  <Image
                    width={i18n.language === "ru" ? 200 : 100}
                    height="36"
                    src={t("homePage.section.works.short")}
                    alt="Test"
                  />
                </p>
              </div>
            </li>
            <li
              className={s.works__list__item}
              onMouseLeave={stopVideo}
              onMouseMove={playVideo}
            >
              <video
                className={s.video}
                playsInline
                autoPlay
                id={"Poetry"}
                loop
                muted
                type="video/mp4"
                src="https://res.cloudinary.com/priem-cloud/video/upload/c_scale,h_348,w_620/v1679311275/work-templates/POETRY_mt8pm1.mov"
              />
              <div className={s.works__list__item__description}>
                <p className={s.works__list__item__text}>
                  <Image
                    width="228"
                    height="36"
                    src={t("homePage.section.works.poetry")}
                    alt="Test"
                  />
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Works;
