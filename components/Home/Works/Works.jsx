import React, { useState } from "react";
import s from "./Works.module.css";
import { Title } from "@/generalFunc";
import AuthEn from "@/images/filters/Auth-courseEn.png";
import ActPortEn from "@/images/filters/Act-portEn.png";
import AdverstEn from "@/images/filters/AdverstingEn.png";
import PoetryEn from "@/images/filters/PoetryEn.png";
import Short from "@/images/filters/ShortEn.png";
import ClipEn from "@/images/filters/ClipEn.png";
import AuthRu from "@/images/filters/Auth-courseRu.png";
import ActPortRu from "@/images/filters/Act-portRu.png";
import AdverstRu from "@/images/filters/AdverstingRu.png";
import PoetryRu from "@/images/filters/PoetryRu.png";
import ShortRu from "@/images/filters/ShortRu1x.png";
import ClipRu from "@/images/filters/ClipRu.png";
import { useTranslation } from "react-i18next";
import Image from "next/image";

function Works() {
  const { t } = useTranslation("translation");
  const [first, setFirst] = useState(false);

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
                  <Image className={s.qwe} src={AuthEn} alt="Test" />
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
                src="https://res.cloudinary.com/priem-cloud/video/upload/v1679088866/work-templates/Clip_jvgh92.mov"
              />
              <div className={s.works__list__item__description}>
                <p className={s.works__list__item__text}>
                  <Image src={ClipEn} alt="Test" />
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
                  <Image src={AdverstEn} alt="Test" />
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
                  <Image src={ActPortEn} alt="Test" />
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
                src="https://res.cloudinary.com/priem-cloud/video/upload/v1679087559/work-templates/SHORT_cj3kam.mov"
              />
              <div className={s.works__list__item__description}>
                <p className={s.works__list__item__text}>
                  <Image src={Short} alt="Test" />
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
                src="https://res.cloudinary.com/priem-cloud/video/upload/v1679087014/work-templates/Poetry_sctvc1.mov"
              />
              <div className={s.works__list__item__description}>
                <p className={s.works__list__item__text}>
                  <Image src={PoetryEn} alt="Test" />
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
