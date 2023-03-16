import Link from "next/link";
import { useEffect } from "react";
import { scrollToSection } from "@/generalFunc";
import Text from "@/images/background/Text-rotateMob.png";
import s from "./mobMenu.module.css";
import Image from "next/image";

function MobileMenu({ toggleShowBackdrop, show, qwe }) {
  useEffect(() => {
    window.addEventListener("keydown", toggleShowBackdrop);
    return () => {
      window.removeEventListener("keydown", toggleShowBackdrop);
    };
  }, [toggleShowBackdrop]);

  const scrollAndCloseMenu = (e) => {
    scrollToSection(e);
    toggleShowBackdrop(e);
  };

  return (
    <div className={s[`menuContainer--${show}`]}>
      <div className={s.textContainer}>
        <Image className={s.textImage} src={Text} alt="Text production name" />
      </div>
      <ul className={s.menuList}>
        <li className={s.menuItem}>
          <Link href="/" prefetch={false} passHref>
            Home
          </Link>
        </li>
        <li className={s.menuItem}>
          <button id="toAbout" data-close="close" onClick={scrollAndCloseMenu}>
            About us
          </button>
        </li>
        <li className={s.menuItem}>
          <button id="toTeam" data-close="close" onClick={scrollAndCloseMenu}>
            Team
          </button>
        </li>
        <li className={s.menuItem}>
          <Link href="/courses" prefetch={false} passHref>
            For actors
          </Link>
        </li>
        <li className={s.menuItem}>
          <Link href="/works" prefetch={false} passHref>
            Our works
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
