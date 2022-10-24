import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import s from "./Hero.module.css";

export const Hero = () => {
  const [scroll, setScroll] = useState(0);
  const router = useRouter();

  const visibleButtonLangeage = () => {
    let posTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
    setScroll(posTop);
  };

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", visibleButtonLangeage);
    }
    return () => {
      window.removeEventListener("scroll", visibleButtonLangeage);
    };
  }, []);

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
          <span>I</span>
          <span>Ё</span>
          <span>M</span> PRODUCTION
        </p>
        <Link href={`${router.pathname}/works`}>Check out all works</Link>
        {scroll < 2380 && (
          <div className={s.ChangeLangButtonContainer}>
            <button>
              <Link href={"/en"}>EN</Link>
            </button>
            <button>
              <Link href={"/ru"}>RU</Link>
            </button>
            <button>
              <Link href={"/ua"}>UA</Link>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
