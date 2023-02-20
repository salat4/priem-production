import React from 'react'
import Title from '../../../General/Title'
import s from "../works.module.css"
import Image from "next/image";
import course from "../../../images/course.png"
import portfolio from "../../../images/portfolio.png"
import add from "../../../images/add.png"
import poetry from "../../../images/poetry.png"
import meter from "../../../images/meter.png"
import clip from "../../../images/clip.png"
const Works_en = () => {
  return (
    <section className={s.works}>
      <div className='container'>
        <div className={s.works__content}>
        <Title text = {"our works"} style={"title"} rotate={true}/>

        <ul className={s.works__list}>
          <li className={s.works__list__item}>
            <Image
              className={s.works__list__item__image}
              src={course}
              width={568}
              height={320}
              alt="Course"
            ></Image>
            <div className={s.works__list__item__description}>
              <p className={s.works__list__item__text}> Авторский курс</p>
            </div>
          </li>
          <li className={s.works__list__item}>
            <Image
              className={s.works__list__item__image}
              src={portfolio}
              width={568}
              height={320}
              alt="Course"
            ></Image>
            <div className={s.works__list__item__description}>
              <p className={s.works__list__item__text}> Актерское порфолио</p>
            </div>
          </li>
          <li className={s.works__list__item}>
            <Image
              className={s.works__list__item__image}
              src={add}
              width={568}
              height={320}
              alt="Course"
            ></Image>
            <div className={s.works__list__item__description}>
              <p className={s.works__list__item__text}>Реклама</p>
            </div>
          </li>
          <li className={s.works__list__item}>
            <Image
              className={s.works__list__item__image}
              src={poetry}
              width={568}
              height={320}
              alt="Course"
            ></Image>
            <div className={s.works__list__item__description}>
              <p className={s.works__list__item__text}>Видео - поезия</p>
            </div>
          </li>
          <li className={s.works__list__item}>
            <Image
              className={s.works__list__item__image}
              src={meter}
              width={568}
              height={320}
              alt="Course"
            ></Image>
            <div className={s.works__list__item__description}>
              <p className={s.works__list__item__text}>Короткий метр</p>
            </div>
          </li>
          <li className={s.works__list__item}>
            <Image
              className={s.works__list__item__image}
              src={clip}
              width={568}
              height={320}
              alt="Course"
            ></Image>
            <div className={s.works__list__item__description}>
              <p className={s.works__list__item__text}>Клип</p>
            </div>
          </li>
        </ul>
        </div>
      </div>
    </section>
  )
}

export default Works_en
