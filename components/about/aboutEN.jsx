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
            We are a production company for generating creative and commercial
            projects. Starting from the idea to its implementation on the
            screen. From one minute video to full-length pictures. Our own
            equipment, team and style.
          </p>
          <p className={`${s.textAbout}`}>
            The signature style of our work is in the individual approach to our
            customer. We create a unique idea and scenario filling it with the
            concept. We carry out complete pre-production, selecting the team on
            request. Then we create the best shooting process with confidence at
            every stage. And we bring the project to its final end – editing,
            color correction, sound design and the release.
          </p>
          <Button text={"Leave a request"} />
        </div>
      </div>
    </section>
  );
};
