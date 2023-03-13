// import Link from "next/link";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
import s from "./Hero.module.css";

function Hero() {
  // const [scroll, setScroll] = useState(true);

  // const router = useRouter();

  // const visibleButtonLangeage = () => {
  //   let target = document.getElementById("footer");

  //   if (!target) {
  //     return;
  //   }

  //   var targetPosition = {
  //       top: window.pageYOffset + target.getBoundingClientRect().top,
  //     },
  //     windowPosition = {
  //       bottom: window.pageYOffset + document.documentElement.clientHeight,
  //     };

  //   if (targetPosition.top < windowPosition.bottom) {
  //     setScroll(false);
  //   } else {
  //     setScroll(true);
  //   }
  // };

  // useEffect(() => {
  //   if (window) {
  //     window.addEventListener("scroll", visibleButtonLangeage);
  //   }
  //   return () => {
  //     window.removeEventListener("scroll", visibleButtonLangeage);
  //   };
  // }, []);

  return (
    <section id="home" className={`${s.heroSectionContainer}`}>
      <div className={s.videoContainer}>
        <video
          className={s.video}
          playsInline
          autoPlay
          loop
          muted
          type="video/mp4"
          src={require("../../../Video/Video3.mp4")}
        />
        <div className={s.title}>
          <div className={s.heroText}></div>
        </div>
        {/* <h1 className={s.title}>PRIЁM PRODUCTION</h1> */}
        {/* {scroll && (
          <div className={s.ChangeLangButtonContainer}>
            <button>
              <Link href={"/en"}>EN</Link>
            </button>
            <button>
              <Link href={"/ru"}>RU</Link>
            </button>
          </div>
        )} */}
      </div>
    </section>
  );
}

export default Hero;

{
  /* <iframe
  src="https://player.vimeo.com/video/767582772?h=6a89bce21d"
  width="640"
  height="564"
  frameborder="0"
  allow="autoplay; fullscreen"
  allowfullscreen
></iframe>; */
}
