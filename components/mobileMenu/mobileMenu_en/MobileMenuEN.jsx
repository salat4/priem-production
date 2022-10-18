import Link from "next/link";
import {
  TEL_IRA,
  TEL_GLEB,
  INSTAGRAM,
  EMAIL_PRODUCTION,
} from "../../Constants/Constants";
import s from "./mobMenuEn.module.css";

export default function MobileMenuEn() {
  return (
    <div className={s.menuContainer}>
      <ul className={s.menuList}>
        <li className={s.menuItem}>
          <Link href="/works">Works</Link>
        </li>
        <li className={s.menuItem}>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <div>
        <ul className={s.menuList}>
          <li className={s.menuItem}>
            <a href={`tel:${TEL_IRA}`}>{TEL_IRA}</a>
          </li>
          <li className={s.menuItem}>
            <a href={`tel:${TEL_GLEB}`}>{TEL_GLEB}</a>
          </li>

          <li className={s.menuItem}>
            <a href={`mailto:${EMAIL_PRODUCTION}`}>{EMAIL_PRODUCTION}</a>
          </li>
          <li className={s.menuItem}>
            <a target="_blank" rel="noreferrer" href={`${INSTAGRAM}`}>
              INSTAGRAM
            </a>
          </li>
        </ul>
      </div>

      <div>
        <img src={LogoMobile} alt="Logo" width="200" />
      </div>
      <div className={s.languageChangeContainer}>
        <button className={s.languageChangeButton}>ENG</button>
        <button className={s.languageChangeButton}>RUS</button>
      </div>
    </div>
  );
}
