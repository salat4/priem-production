import s from "./about.module.css";
import Button from "../../General/Button";
import Title from "../../General/Title";

export const About = () => {
  return (
    <section id="about" className={s.aboutSection}>
      <div className="container">
        <div className={`${s.contentContainer}`}>
          <Title text={"About Us"} style={"title"} rotate={true} />
          <p className={`${s.textAbout}`}>
            Продакшн-компания по созданию творческих и коммерческих проектов.
            Начиная от идеи до реализации на экране. От формата видео в минуту
            до полнометражных картин. Своя аппаратура, своя команда, свой стиль.
          </p>
          <p className={`${s.textAbout}`}>
            Особенность нашей работы заключается в индивидуальном подходе к
            нашему заказчику. Мы создаем уникальную идею и сценарий, исходя из
            наполнения его замыслом. Полностью ведем предпродакшн, подбирая
            команду под запрос. После чего создаем лучшую съемку, с уверенностью
            на каждом этапе. И доводим проект до его финального конца - монтаж,
            цветокоррекция, саунд дизайн и выход на экраны.
          </p>
          <Button text={"Оставить заявку"} />
        </div>
      </div>
    </section>
  );
};
