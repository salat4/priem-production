import s from "./Hero.module.css";

function Hero() {
  return (
    <section id="home" className={`${s.heroSectionContainer}`}>
      <div className={s.videoContainer}>
        <video
          className={s.video}
          playsInline
          autoPlay
          loop
          muted
          type="video/mp4"
          src={require("../../../Video/Video2.mp4")}
        />
        <div className={s.title}>
          <div className={s.heroText}></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
