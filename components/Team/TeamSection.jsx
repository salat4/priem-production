import Image from "next/image";
import Ira from "../../images/teamIra.png";
import Gleb from "../../images/teamGleb.png";
import Title from "../../General/Title";
import s from "./Team.module.css";

export default function Team() {
  return (
    <section className={s.teamSection}>
      <div className="container">
        <div className={s.contentContainer}>
          <Title text="Team" style="title" rotate={true} />
          <div className={s.imageContainer}>
            <div style={{ position: "relative" }}>
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
              Мы семейная пара актеров с многолетним опытом работы в кадре.
              Пара, которая из жажды к развитию, стала воплощать свои идеи и
              творческие проекты самостоятельно, помимо основной работы в
              индустрии , и получать большой отклик в зрителях. Теперь - начиная
              с весны 2022 года мы выступаем в лице режиссера и продюсера
              являясь создателями собственной Продакшн Компании.
            </p>
            <p>
              И уже имеем за плечами успешные коммерческие проекты, не
              останавливаясь учиться и пробовать новое, наполняя смыслом каждую
              минуту отснятого материала.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
