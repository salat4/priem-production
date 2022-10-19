import MobileMenu from "../../../images/burger-menu.svg";
import s from "./HeaderEn.module.css";
import { useState } from "react";
import Image from "next/image";
import MobileMenuEn from "../../mobileMenu/mobileMenu_en/MobileMenuEN";
import Backdrop from "../../../General/Backdrop";

export default function HeaderEn() {
  const [show, setFirst] = useState("close");

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
        <div className={s.containerStretch}>
          <div className={s.headerContainer}>
            <button
              className={s.burgetMenuButton}
              onClick={() => setFirst("show")}
            >
              <Image src={MobileMenu} alt="Menu" />
            </button>
          </div>
        </div>
      </section>
      <MobileMenuEn toggleShowMenu={toggleShowMenu} show={show} />
      {/* {first && <MobileMenuEn toggleShowMenu={toggleShowMenu} />} */}
    </>
  );
}
