// import { useEffect, useState } from "react";
import s from "./Hero.module.css";

export const Hero = () => {
  // const [width, setWidth] = useState(0);
  // const handleResize = () => setWidth(document.documentElement.clientWidth);

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   setWidth(document.documentElement.clientWidth);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, [width]);

  return (
    <section className={s.heroSectionContainer}>
      <div className={s.videoContainer}>
        <video
          className={s.video}
          playsInline
          autoPlay
          loop
          muted
          src={require("../../Video/Video3.mp4")}
        />
        <p className={s.title}>
          <span>P</span>
          <span>R</span>
          <span>I</span>ЁM PRODUCTION
        </p>
      </div>
    </section>
  );
};
