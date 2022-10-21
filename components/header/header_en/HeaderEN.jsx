import MobileMenu from "../../../images/burger-menu.svg";
import LogoHeader from "../../../images/Logo.png";
import s from "./HeaderEn.module.css";
import { useState } from "react";
import Image from "next/image";
import MobileMenuEn from "../../mobileMenu/mobileMenu_en/MobileMenuEN";
import Backdrop from "../../../General/Backdrop";
import Link from "next/link";

export default function HeaderEn() {
  const [show, setFirst] = useState("one");

  const toggleShowMenu = (e) => {
    const { id } = e.currentTarget;
    if (e.key === "Escape" || id === "close") {
      setFirst("close");
    }
  };

  return (
    <>
      {show === "show" && <Backdrop toggleShowMenu={toggleShowMenu} />}
      <section className={s.headerSection}>
        <div className="containerStretch">
          <div className={s.headerContainer}>
            <button
              className={s.burgetMenuButton}
              onClick={() => setFirst("show")}
            >
              <Image src={MobileMenu} alt="Menu" />
            </button>
            <button className={s.logoContainer}>
              <Link href="/en">
                <Image
                  src={LogoHeader}
                  alt="Logo in header"
                  width="140"
                  height="140"
                />
              </Link>
            </button>
            <ul className={s.navigationMenuList}>
              <li>
                <Link href="/en/works">Works</Link>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contacts</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <MobileMenuEn toggleShowMenu={toggleShowMenu} show={show} />
    </>
  );
}
