import s from "./presWorks.module.css";
import SimpleSlider from "./slider";

function PresWorks() {
  return (
    <section className={s.presWorks}>
      <div className={s.presWorksSlider}>
        <SimpleSlider />
      </div>
    </section>
  );
}

export default PresWorks;
