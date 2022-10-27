import Image from "next/image";
import pic from "../../images/pic.jpg";
import pic1 from "../../images/pic1.jpg";
import { useCallback, useEffect, useState } from "react";
import s from "../about/about.module.css";

export default function Team() {
  const [fix, setFix] = useState("asd");

  const styleCon = useCallback(() => {
    // let target = document.getElementById("contacts");
    let target1 = document.getElementById("about");

    if (!target1) {
      return;
    }
    // var targetPosition = {
    //     top: window.pageYOffset + target.getBoundingClientRect().top,
    //   },
    //   windowPosition = {
    //     bottom: window.pageYOffset + document.documentElement.clientHeight,
    //   };
    // console.log(targetPosition.top);

    // if (targetPosition.top < windowPosition.bottom) {
    //   setFix("isFixed");
    // } else {
    //   setFix("asd");
    // }
    if (target1.className === "qweBack") {
      setFix("isFixed");
    } else {
      setFix("asd");
    }
  }, []);

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", styleCon);
    }
    return () => {
      window.removeEventListener("scroll", styleCon);
    };
  }, [styleCon]);
  return (
    <section id="team" className={fix}>
      <div className={`${s.wrap}`}>
        <div className={`${s.section}`}>
          <ul className={s.team_list}>
            <li className={s.card_team}>
              <div>
                <Image src={pic1} alt="person" width={305} height={355} />
              </div>
              <div className={s.text_wrap}>
                <p className={s.role_p}>Lorem ipsum dolor sit amet.</p>
                <p className={s.name_p}>Name Suname.</p>
                {/* <div className={s.social_list}>
                  <a className={s.social_link} href="tel:+380990432833">
                    Phone
                  </a>
                  <a
                    className={s.social_link}
                    href="https://www.instagram.com/priem.production/?igshid=YmMyMTA2M2Y%3D"
                  >
                    /Instagram
                  </a>
                  <a
                    className={s.social_link}
                    href="mailto:priem.mih.production@gmail.com"
                  >
                    /Mail
                  </a>
                </div> */}
              </div>
            </li>
            <li className={s.card_team}>
              <div>
                <Image
                  className={s.card_img}
                  src={pic}
                  alt="person"
                  width={305}
                  height={355}
                />
              </div>
              <div className={s.text_wrap}>
                <p className={s.role_p}>Lorem ipsum dolor sit amet.</p>
                <p className={s.name_p}>Name Suname.</p>
                {/* <div className={s.social_list}>
                <a className={s.social_link} href="tel:+380635312215">
                  Phone
                </a>
                <a
                  className={s.social_link}
                  href="https://www.instagram.com/priem.production/?igshid=YmMyMTA2M2Y%3D"
                >
                  /Instagram
                </a>
                <a
                  className={s.social_link}
                  href="mailto:priem.mih.production@gmail.com"
                >
                  /Mail
                </a>
              </div> */}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
