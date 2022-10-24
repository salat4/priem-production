import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import s from "./Hero.module.css";

export const Hero = () => {
  const [first, setFirst] = useState(0);
  const router = useRouter();

  const h = () => {
    let posTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
    setFirst(posTop);
  };

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", h);
    }
    return () => {
      window.removeEventListener("scroll", h);
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
        <Link href={`${router.pathname}`}>Check out all works</Link>
        {first < 2380 && (
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
