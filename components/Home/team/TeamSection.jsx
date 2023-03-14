import Image from "next/image";
import { Title } from "@/generalFunc";
import s from "./Team.module.css";
import Partners from "../partners/partners";
import { useTranslation } from "react-i18next";

function Team() {
  const { t } = useTranslation("translation");
  return (
    <>
      <section id="team" className={s.teamSection}>
        <div className="container">
          <div className={s.sectionContainer}>
            <Title text={"Team"} style="title" styleForContainer={s} />
            <div className={s.contentContainer}>
              <div className={s.imageContainer}>
                <div className={s.card}>
                  <span>
                    {/* <Image
                      src="https://res.cloudinary.com/priem-cloud/image/upload/v1678660237/partners/Irina_Priemnitskaya_ewiufx.png"
                      alt="team section: Ira"
                      className={s.asd}
                      width={209}
                      height="254"
                    /> */}
                  </span>
                  <p className={s.position}>Producer</p>
                  <p className={s.name}>{t("homePage.section.team.Ira")}</p>
                </div>
                <div>
                  <span>
                    {/* <Image
                      src="https://res.cloudinary.com/priem-cloud/image/upload/v1678660237/partners/Gleb_Mikhaylichenko_xa9bge.png"
                      alt="team section: Gleb"
                      width={209}
                      height="254"
                    /> */}
                  </span>
                  <p className={s.position}>Director</p>
                  <p className={s.name}>{t("homePage.section.team.Gleb")}</p>
                </div>
              </div>
              <div className={s.descriptionContainer}>
                <p>{t("homePage.section.team.text.first")}</p>
                <p>{t("homePage.section.team.text.secondary")}</p>
              </div>
            </div>
            {/* <Partners /> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
