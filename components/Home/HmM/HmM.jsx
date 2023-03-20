import s from "./HmM.module.css";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { isMobileSafari } from "react-device-detect";
import { isSafari } from "react-device-detect";
import { useTranslation } from "react-i18next";

function HmM() {
  const [size, setSize] = useState("");
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [orientation, setOrientation] = useState();
  const { t } = useTranslation("translation");

  const detect = () => {
    if (isMobileSafari) {
      setOrientation(window.orientation);
    } else if (isSafari) {
      setOrientation(90);
    } else {
      setOrientation(screen.orientation.type);
    }
  };

  useEffect(() => {
    const oriental = window.addEventListener("resize", detect);
  }, []);

  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
    if (isMobileSafari) {
      setOrientation(window.orientation);
    } else if (isSafari) {
      setOrientation(90);
    } else {
      setOrientation(screen.orientation.type);
    }
    if (height / width <= 0.59) {
      setSize("Three");
    } else if (height / width <= 0.88) {
      setSize("Two");
    } else {
      setSize("One");
    }
  }, [height, width, orientation]);

  return (
    <>
      <section className={`${s.HmM}`}>
        {size === "One" && (
          <>
            <div className={s.videoContainer__1}>
              <video
                className={s.video__1}
                playsInline
                autoPlay
                loop
                muted
                src="https://res.cloudinary.com/priem-cloud/video/upload/v1679330679/work-templates/BackVideo_aqupng.mov"
              />
            </div>
          </>
        )}
        {size === "Two" && (
          <>
            <div className={s.videoBox__2}>
              <div className={s.videoContainer__2__1}>
                <video
                  className={s.video__2__1}
                  playsInline
                  autoPlay
                  loop
                  muted
                  src="https://res.cloudinary.com/priem-cloud/video/upload/v1679330679/work-templates/BackVideo_aqupng.mov"
                />
              </div>
              <div className={s.videoContainer__2__2}>
                <video
                  className={s.video__2__2}
                  playsInline
                  autoPlay
                  loop
                  muted
                  src="https://res.cloudinary.com/priem-cloud/video/upload/v1679330679/work-templates/BackVideo_aqupng.mov"
                />
              </div>
            </div>
          </>
        )}
        {size === "Three" && (
          <>
            <div className={s.videoBox__3}>
              <div className={s.videoContainer__3__1}>
                <video
                  className={s.video__3__1}
                  playsInline
                  autoPlay
                  loop
                  muted
                  src="https://res.cloudinary.com/priem-cloud/video/upload/v1679330679/work-templates/BackVideo_aqupng.mov"
                />
              </div>
              <div className={s.videoContainer__3__2}>
                <video
                  className={s.video__3__2}
                  playsInline
                  autoPlay
                  loop
                  muted
                  src="https://res.cloudinary.com/priem-cloud/video/upload/v1679330679/work-templates/BackVideo_aqupng.mov"
                />
              </div>
              <div className={s.videoContainer__3__3}>
                <video
                  className={s.video__3__3}
                  playsInline
                  autoPlay
                  loop
                  muted
                  src="https://res.cloudinary.com/priem-cloud/video/upload/v1679330679/work-templates/BackVideo_aqupng.mov"
                />
              </div>
            </div>
          </>
        )}
        <div className={s.HmM__box}>
          <div className={s.HmM__box__item}>
            <div className={s.HmM__item}>
              <p className={s.HmM__title}>
                {t("homePage.section.backstage.block1.title")}
              </p>
              <ul className={s.HmM__about}>
                <li className={s.HmM__description}>
                  <span>{t("homePage.section.backstage.block1.point1")}</span>
                </li>
                <li className={s.HmM__description}>
                  <span>{t("homePage.section.backstage.block1.point2")}</span>
                </li>
                <li className={s.HmM__description}>
                  <span>{t("homePage.section.backstage.block1.point3")}</span>
                </li>
                <li className={s.HmM__description}>
                  <span>{t("homePage.section.backstage.block1.point4")}</span>
                </li>
              </ul>
            </div>
            <div className={s.HmM__item}>
              <p className={s.HmM__title}>
                {t("homePage.section.backstage.block2.title")}
              </p>
              <ul className={s.HmM__about}>
                <li className={s.HmM__description}>
                  <span>{t("homePage.section.backstage.block2.point1")}</span>
                </li>
                <li className={s.HmM__description}>
                  <span>{t("homePage.section.backstage.block2.point2")}</span>
                </li>
              </ul>
            </div>
          </div>
          <hr className={s.separator} />
          <div className={s.HmM__box__item}>
            <div className={s.HmM__item}>
              <p className={s.HmM__title}>
                {t("homePage.section.backstage.block3.title")}
              </p>
              {/* <p className={s.HmM__title}>
                {t("homePage.section.backstage.block3.point1")}
              </p> */}
              <ul className={s.HmM__about}>
                <li className={s.HmM__description}>
                  <span>{t("homePage.section.backstage.block3.point2")}</span>
                </li>
                <li className={s.HmM__description}>
                  <span>{t("homePage.section.backstage.block3.point3")}</span>
                </li>
                <li className={s.HmM__description}>
                  <span>{t("homePage.section.backstage.block3.point4")}</span>
                </li>
                <li className={s.HmM__description}>
                  <span>{t("homePage.section.backstage.block3.point5")}</span>
                </li>
              </ul>
            </div>

            <div className={s.HmM__item}>
              <p className={s.HmM__title}>
                {t("homePage.section.backstage.block4.title")}
              </p>
              <ul className={s.HmM__about}>
                <li className={s.HmM__description}>
                  <span>{t("homePage.section.backstage.block4.point1")}</span>
                </li>
                <li className={s.HmM__description}>
                  <span>{t("homePage.section.backstage.block4.point2")}</span>
                </li>
              </ul>
            </div>
          </div>
          <hr className={s.separator} />
          <div className={s.HmM__box__item}>
            <div className={s.HmM__item}>
              <p className={s.HmM__title}>
                {t("homePage.section.backstage.block5.title")}
              </p>
              <ul className={s.HmM__about}>
                <li className={s.HmM__description}>
                  <span>{t("homePage.section.backstage.block5.point1")}</span>
                </li>
                <li className={s.HmM__description}>
                  <span>{t("homePage.section.backstage.block5.point2")}</span>
                </li>
              </ul>
            </div>
            <div className={s.HmM__item}>
              <p className={s.HmM__title}>
                {t("homePage.section.backstage.block6.title")}
              </p>
              <ul className={s.HmM__about}>
                <li className={s.HmM__description}>
                  <span>{t("homePage.section.backstage.block6.point1")}</span>
                </li>
                <li className={s.HmM__description}>
                  <span>{t("homePage.section.backstage.block6.point2")}</span>
                </li>
                <li className={s.HmM__description}>
                  <span>{t("homePage.section.backstage.block6.point3")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HmM;
