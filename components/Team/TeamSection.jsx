import Image from "next/image";
import Ira from "../../images/teamIra.png";
import Gleb from "../../images/teamGleb.png";
import Title from "../../General/Title";
import s from "./Team.module.css";
import Partners_en from "../partners/partners_en/partners_en";
export default function Team() {
  return (
    <>
      <section className={s.teamSection}>
        <div className="container">
          <div className={s.sectionContainer}>
            <Title text="Team" style="title" rotate={true} />
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
                <p>
                  We are a married couple of actors with many years of
                  experience on camera. The couple who, craving for development,
                  began to implement their ideas and creative projects on their
                  own, in addition to their main work in the industry, and
                  receive valuable feedback from the audience. Now – starting
                  from the spring of 2022 we act as a director and a producer,
                  being the founders of our own production company.
                </p>
                <p>
                  Having many successful commercial projects behind us, we don’t
                  stop learning and trying new things, making every minute of
                  the footage meaningful.
                </p>
              </div>
            </div>
          </div>
          <Partners_en />
        </div>
      </section>
    </>
  );
}
