import React from "react";
import Title from "@/General/Title";
import s from "@/components/about/about.module.css";
import ss from "./forActors.module.css";
import Button from "@/General/Button";

export default function ForActorsEn() {
  return (
    <section className={ss.section}>
      <div className="container">
        <div className={`${s.contentContainer}`}>
          <Title text={"For actors"} style={"title"} rotate={true} />
          <p className={`${s.textAbout}`}>
            Актёрское портфолио является основополагающим рабочим материалом при
            сотрудничестве с кастинг-директорами, режиссерами и агентом. Ведь
            это единственная возможность увидеть вас в кинокадре, прежде чем
            познакомиться лично.
          </p>
          <p className={`${s.textAbout}`}>
            <span className={ss.attentionText}>PRIËM PRODUCTION</span>{" "}
            предоставляет пакеты услуг с частичным или полным портфолио. Мы
            знаем рынок кинематографа изнутри и знаем, на что именно обращают
            внимание кастинг-директора, и режиссеры на этапе отбора и готовы
            поработать с тобой лично над твоей подачей, уверенностью в кадре и
            создать качественные материалы.
          </p>
          <Button text={"Оставить заявку"} />
        </div>
      </div>
    </section>
  );
}
