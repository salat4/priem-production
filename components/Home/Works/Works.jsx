import React, { useState } from "react";
import s from "./Works.module.css";
import { Title } from "@/generalFunc";
import { useTranslation } from "react-i18next";

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
                src="https://res.cloudinary.com/priem-cloud/video/upload/v1677976430/work-templates/work-templates_author-course-c_scale_q_auto_good_w_568_mp4_eoyz1o.mp4"
              />
              <div className={s.works__list__item__description}>
                <p className={s.works__list__item__text}>Авторский курс</p>
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
                src="https://res.cloudinary.com/priem-cloud/video/upload/v1677976430/work-templates/work-templates_clip_vjtshx.mp4"
              />
              <div className={s.works__list__item__description}>
                <p className={s.works__list__item__text}>Клип</p>
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
                src="https://res.cloudinary.com/priem-cloud/video/upload/v1677976431/work-templates/work-templates_reclama-c_scale_q_auto_good_w_568_mp4_mtrnio.mp4"
              />
              <div className={s.works__list__item__description}>
                <p className={s.works__list__item__text}>Реклама</p>
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
                src="https://res.cloudinary.com/priem-cloud/video/upload/v1677976429/work-templates/work-templates_actors-port-c_scale_co_rgb_ffffff_h_320_q_auto_good_w_568_mp4_y9w637.mp4"
              />
              <div className={s.works__list__item__description}>
                <p className={s.works__list__item__text}> Актерское порфолио</p>
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
                src="https://res.cloudinary.com/priem-cloud/video/upload/v1677976430/work-templates/work-templates_short-metr-c_scale_q_auto_best_w_568_mp4_tm7ni6.mp4"
              />
              <div className={s.works__list__item__description}>
                <p className={s.works__list__item__text}>Короткий метр</p>
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
                src="https://res.cloudinary.com/priem-cloud/video/upload/v1677976429/work-templates/work-templates_video-poetica-c_scale_q_auto_good_w_568_mp4_npvw0l.mp4"
              />
              <div className={s.works__list__item__description}>
                <p className={s.works__list__item__text}>Видео - поезия</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Works;
