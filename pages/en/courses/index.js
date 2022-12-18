import s from "./courses.module.css";

function PageCourses() {
  return (
    <section className={s.coursesSection}>
      <div className="containerStretch">
        <h2 className={s.pageTitle}>Courses</h2>
        <div className={s.cardsContainer}>
          <div className={s.cardContainer}>
            <h3 className={s.cardTitle}>courseName: Pro</h3>
            <ul className={s.coursesList}>
              <li>Визитка хронометраж 1 минута. 2 видео на 2 языках</li>
              <li>Сцена из кино/пьесы (с возможностью партнера в кадре)</li>
              <li>Монолог (из кино/пьесы)</li>
              <li>
                Шоурил из оговорённых работ (снятых сцен с нами + материалы
                актера)
              </li>
              <li>Хедшоты (6 основных фото для актёрского портфолио)</li>
              <li>
                Личная консультация с коучем и преподавателем по актёрскому
                мастерству
              </li>
            </ul>
          </div>
          <div className={s.cardContainer}>
            <h3 className={s.cardTitle}>courseName: Extended</h3>
            <ul className={s.coursesList}>
              <li>Визитка хронометраж 1 минута. 2 видео на 2 языках</li>
              <li>Монолог (из кино/пьесы)</li>
              <li>Хедшоты (6 основных фото для актёрского портфолио)</li>
              <li>
                Личная консультация с коучем и преподавателем по актёрскому
                мастерству
              </li>
            </ul>
          </div>
          <div className={s.cardContainer}>
            <h3 className={s.cardTitle}>courseName: Basic</h3>
            <ul className={s.coursesList}>
              <li>Визитка хронометраж 1 минута. 2 видео на 2 языках</li>
              <li>Хедшоты (6 основных фото для актёрского портфолио)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageCourses;
