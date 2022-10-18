import MobileMenu from "../../../images/burger-menu.svg";
import s from "./HeaderEn.module.css";
import { useState } from "react";
import Image from "next/image";

export default function HeaderEn() {
  const [first, setFirst] = useState(false);

  return (
    <>
      <section className={s.headerSection}>
        <div className={s.containerStretch}>
          <div className={s.headerContainer}>
            <button className={s.burgetMenuButton}>
              <Image src={MobileMenu} alt="Menu" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
