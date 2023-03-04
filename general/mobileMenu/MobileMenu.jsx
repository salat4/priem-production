import Link from "next/link";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { scrollToSection } from "@/general";
import Text from "@/images/background/Text-rotate-mobile.png";
import s from "./mobMenu.module.css";
import Image from "next/image";

function MobileMenu({ toggleShowBackdrop, show }) {
  const { t } = useTranslation("translation");

  useEffect(() => {
    if (show === "one") {
      return;
    }
    window.addEventListener("keydown", toggleShowBackdrop);
    return () => {
      window.removeEventListener("keydown", toggleShowBackdrop);
    };
  }, [toggleShowBackdrop, show]);

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
            {t("navigation.home")}
          </Link>
        </li>
        <li className={s.menuItem}>
          <button id="toAbout" data-close="close" onClick={scrollAndCloseMenu}>
            {t("navigation.about")}
          </button>
        </li>
        <li className={s.menuItem}>
          <button id="toTeam" data-close="close" onClick={scrollAndCloseMenu}>
            {t("navigation.team")}
          </button>
        </li>
        <li className={s.menuItem}>
          <Link href="/courses" prefetch={false} passHref>
            {t("navigation.actors")}
          </Link>
        </li>
        <li className={s.menuItem}>
          <Link href="/works" prefetch={false} passHref>
            {t("navigation.works")}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
