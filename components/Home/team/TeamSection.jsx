import Image from "next/image";
import Ira from "@/images/co-founders/teamIra.png";
import Gleb from "@/images/co-founders/teamGleb.png";
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
            <Title
              styleAll = {s}
              text={t("homePage.section.team.title")}
              style="title"
              rotate={true}
            />
            <div className={s.contentContainer}>
              <div className={s.imageContainer}>
                <div className={s.card}>
                  <span>
                    <Image src={Ira} alt="team section: Ira" />
                  </span>
                  <p className={s.position}>Producer</p>
                  <p className={s.name}>Irina Priemnitskaya</p>
                </div>
                <div>
                  <span>
                    <Image src={Gleb} alt="team section: Gleb" />
                  </span>
                  <p className={s.position}>Director</p>
                  <p className={s.name}>Gleb Mikhaylichenko</p>
                </div>
              </div>
              <div className={s.descriptionContainer}>
                <p>{t("homePage.section.team.text.first")}</p>
                <p>{t("homePage.section.team.text.secondary")}</p>
              </div>
            </div>
            <Partners />
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
