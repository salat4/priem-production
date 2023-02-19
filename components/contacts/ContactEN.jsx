import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Backdrop from "../../General/Backdrop";
import toggleBackdrop from "../../General/toggleBackdrop";
import Phone from "../../images/Telephone.svg";
import Insta from "../../images/instagram.svg";
import Language from "../../images/earth.svg";
import EmailTwo from "../../images/Email-hover.svg";
import CloseModalIcon from "../../images/Close-icon.svg";
import s from "./contact.module.css";
import ss from "../../components/mobileMenu/mobileMenu_en/mobMenuEn.module.css";

import {
  INSTAGRAM,
  EMAIL_PRODUCTION,
  // TEL_GLEB,
  TEL_IRA,
} from "../../Constants/Constants";
import FormSubscribe from "../../General/Form";

export const Contacts = () => {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(!showForm);
  };

  const toggleShowBackdrop = (e) => {
    const DoClose = toggleBackdrop(e);
    if (`${DoClose}` === "false") {
      setShowForm(toggleBackdrop(e));
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", toggleShowBackdrop);
    return () => {
      window.removeEventListener("keydown", toggleShowBackdrop);
    };
  }, []);
  return (
    <>
      <ul className={s.socialList}>
        <li className={s.socialItem}>
          <a href={`tel:${TEL_IRA}`} rel="noreferrer">
            <Image src={Phone} alt="Phone icon" />
          </a>
        </li>
        <li className={s.socialItem}>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer">
            <Image src={Insta} alt="Instagram icon" />
          </a>
        </li>
        <li className={s.socialItem}>
          <a
            href={`mailto:${EMAIL_PRODUCTION}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image src={EmailTwo} alt="Email icon" />
          </a>
        </li>
        <li className={s.socialItem}>
          <a>
            <button onClick={openForm}>...</button>
          </a>
        </li>
        <li className={s.socialItemLang}>
          <div className={s.ChangeLangButtonContainer}>
            <button>
              <Link href={"/en"}>EN</Link>
            </button>
            <button>
              <Link href={"/ru"}>RU</Link>
            </button>
          </div>
          <Image src={Language} alt="Change language icon" />
        </li>
      </ul>
      {showForm && (
        <>
          <Backdrop toggleShowBackdrop={toggleShowBackdrop}>
            <div className={s.formContainer}>
              <button
                className={ss.closeIcon}
                id="close"
                onClick={toggleShowBackdrop}
              >
                <Image
                  src={CloseModalIcon}
                  alt="close menu button"
                  id="close"
                  width="15"
                />
              </button>
              <FormSubscribe toggleShowBackdrop={toggleShowBackdrop} />
            </div>
          </Backdrop>
        </>
      )}
    </>
    // <section id="contacts" className={s.contactsSection}>
    //   <div className={s.wrap}>
    //     <div className={s.section}>
    //       <h2 className={s.title}>How to contact us</h2>
    //       <div className={s.social_list}>
    //         <div className={s.socialListContainer}>
    //           <div className={s.containerLink}>
    //             <p className={s.text}>see our works</p>
    //             <p className={s.social_link}>
    //               <a href={INSTAGRAM} target="_blank" rel="noreferrer">
    //                 Instagram
    //               </a>
    //             </p>
    //           </div>
    //           <div className={s.containerLink}>
    //             <p className={s.text}>our mail</p>

    //             <p className={s.social_link}>
    //               <a
    //                 target="_blank"
    //                 href={`mailto:${EMAIL_PRODUCTION}`}
    //                 rel="noreferrer"
    //               >
    //                 {EMAIL_PRODUCTION}
    //               </a>
    //             </p>
    //           </div>
    //         </div>
    //         <div className={s.phonesContainer}>
    //           <p className={s.text}>Phones</p>

    //           <p className={s.social_link}>
    //             <a href={`tel:${TEL_GLEB}`}>{TEL_GLEB}</a>
    //           </p>
    //           <p className={s.social_link}>
    //             <a href={`tel:${TEL_IRA}`}>{TEL_IRA}</a>
    //           </p>
    //         </div>
    //         <h2 className={s.titleRight}>How to contact us</h2>
    //       </div>
    //       <FormSubscribe />
    //     </div>
    //   </div>
    // </section>
  );
};
