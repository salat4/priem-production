import s from "./HmM.module.css";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { isMobileSafari } from "react-device-detect";
import { isSafari } from "react-device-detect";

function HmM() {
  const [size, setSize] = useState("");
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [orientation, setOrientation] = useState();
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
                src={require("../../../Video/IMG_5834.mp4")}
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
                  src={require("../../../Video/IMG_5834.mp4")}
                />
              </div>
              <div className={s.videoContainer__2__2}>
                <video
                  className={s.video__2__2}
                  playsInline
                  autoPlay
                  loop
                  muted
                  src={require("../../../Video/IMG_5834.mp4")}
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
                  src={require("../../../Video/IMG_5834.mp4")}
                />
              </div>
              <div className={s.videoContainer__3__2}>
                <video
                  className={s.video__3__2}
                  playsInline
                  autoPlay
                  loop
                  muted
                  src={require("../../../Video/IMG_5834.mp4")}
                />
              </div>
              <div className={s.videoContainer__3__3}>
                <video
                  className={s.video__3__3}
                  playsInline
                  autoPlay
                  loop
                  muted
                  src={require("../../../Video/IMG_5834.mp4")}
                />
              </div>
            </div>
          </>
        )}
        <div className={s.HmM__box}>
          <div className={s.HmM__box__item}>
            <div className={s.HmM__item}>
              <p className={s.HmM__title}>Разработка сценария</p>
              <ul className={s.HmM__about}>
                <li className={s.HmM__description}>
                  <p>разработка идеи</p>
                </li>
                <li className={s.HmM__description}>
                  <p>подбор референсов</p>
                </li>
                <li className={s.HmM__description}>
                  <p>написание сценария</p>
                </li>
                <li className={s.HmM__description}>
                  <p>подробная раскадровка</p>
                </li>
              </ul>
            </div>
            <div className={s.HmM__item}>
              <p className={s.HmM__title}>Команда</p>
              <ul className={s.HmM__about}>
                <li className={s.HmM__description}>
                  <p>подбор команды под запрос</p>
                </li>
                <li className={s.HmM__description}>
                  <p>работа с лучшими в стране </p>
                </li>
              </ul>
            </div>
          </div>
          <div className={s.HmM__box__item}>

            <div className={s.HmM__item}>
              <p className={s.HmM__title}>Камера / свет</p>
              <p>Мы имеем:</p>
              <ul className={s.HmM__about}>
                <li className={s.HmM__description}>
                  <p>Blackmagic 4k </p>
                </li>
                <li className={s.HmM__description}>
                  <p>2 LED  </p>
                </li>
                <li className={s.HmM__description}>
                  <p>2 Softbox  </p>
                </li>
                <li className={s.HmM__description}>
                  <p>1 Godox  </p>
                </li>
              </ul>
            </div>
            <div className={s.HmM__item}>
              <p className={s.HmM__title}>Монтаж / цветокоррекция / саунд дизайн</p>
              <ul className={s.HmM__about}>
                <li className={s.HmM__description}>
                  <p>коллаборация с командой на больших проектах</p>
                </li>
                <li className={s.HmM__description}>
                  <p>базовая обработка видео на локальных проектах</p>
                </li>
              </ul>
            </div>
          </div>
          <div className={s.HmM__box__item}>

            <div className={s.HmM__item}>
              <p className={s.HmM__title}>Актерская подготовка</p>
              <ul className={s.HmM__about}>
                <li className={s.HmM__description}>
                  <p>работа с коучем по актёрскому мастерству  </p>
                </li>
                <li className={s.HmM__description}>
                  <p>репетиции с режиссером перед съемкой  </p>
                </li>
              </ul>
            </div>
            <div className={s.HmM__item}>
              <p className={s.HmM__title}>Костюм / Грим  дизайн</p>
              <ul className={s.HmM__about}>
                <li className={s.HmM__description}>
                  <p>работа с нашим стилистом </p>
                </li>
                <li className={s.HmM__description}>
                  <p>базоработа с нашим гримером </p>
                </li>
                <li className={s.HmM__description}>
                  <p>подбор и разработка образа </p>
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
