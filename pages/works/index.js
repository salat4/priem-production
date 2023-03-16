import { Header, Contacts } from "@/generalFunc";
import axios from "axios";
// import Works_en from "../../components/works/works_en/works_en";
// import Footer_en from "../../components/footer/footer_en/footer_en";
// import { Contacts } from "../../components/contacts/ContactEN";
import { CldImage, CldVideoPlayer } from "next-cloudinary";
import { Video, Transformation } from "cloudinary-react";
import { useEffect, useState } from "react";
import s from "./works.module.css";
import "../../18next";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import clip from "@/images/filters/ClipEn.png";
import allW from "@/images/filters/All-worksEn.png";
import authC from "@/images/filters/Auth-courseEn.png";
import poetry from "@/images/filters/PoetryEn.png";
import short from "@/images/filters/FilmEn.png";
import rec from "@/images/filters/AdverstingEn.png";
import actPort from "@/images/filters/Act-portEn.png";
import clipRu from "@/images/filters/ClipRu.png";
import allWRu from "@/images/filters/All-worksRu.png";
import authCRu from "@/images/filters/Auth-courseRu.png";
import poetryRu from "@/images/filters/PoetryRu.png";
import shortRu from "@/images/filters/FilmRu.png";
import recRu from "@/images/filters/AdverstingRu.png";
import actPortRu from "@/images/filters/Act-portRu.png";

function Works(props) {
  const [first, setFirst] = useState(null);
  const { t } = useTranslation("translation");
  useEffect(() => {
    console.log(props.data);
    setFirst(props.data);
  }, [props]);

  return (
    <>
      <Header />
      <Contacts />
      <main className={s.worksPage}>
        <div className="container">
          <ul className={s.filterList}>
            {/* <li>{t("worksPage.filter.allWorks")}</li> */}
            <li>
              <Image
                // src={t("worksPage.filter.clip")}
                src={allWRu}
                alt="Clip"
                // width={130}
                // width={40}
                // height="20"
              />
            </li>
            <li>
              <Image
                // src={t("worksPage.filter.poetry")}
                src={clipRu}
                alt="Clip"
                // width={50}
                // width={85}
                // height="30"
                // height="20"
              />
            </li>
            <li>
              <Image
                // src={t("worksPage.filter.poetry")}
                src={authCRu}
                alt="Clip"
                // width={130}
                // width={85}
                // height="40"
                // height="20"
              />
            </li>
            <li>
              <Image
                // src={t("worksPage.filter.poetry")}
                src={poetryRu}
                alt="Clip"
                // width={130}
                // width={85}
                // height="40"
                // height="20"
              />
            </li>
            <li>
              <Image
                // src={t("worksPage.filter.poetry")}
                src={shortRu}
                alt="Clip"
                // width={130}
                // width={85}
                // height="40"
              />
            </li>
            <li>
              <Image
                // src={t("worksPage.filter.poetry")}
                src={recRu}
                alt="Clip"
                // width={130}
                // width={85}
                // height="40"
                // height="20"
              />
            </li>
            <li>
              <Image
                // src={t("worksPage.filter.poetry")}
                src={actPortRu}
                alt="Clip"
                // width={130}
                // width={85}
                // height="40"
                // height="20"
              />
            </li>
            {/* <li>
              <Image
                src={t("worksPage.filter.autors")}
                alt="Clip"
                width={100}
                height="15"
              />
            </li> */}
            {/* <li>{t("worksPage.filter.portfolio")}</li> */}
            {/* <li>{t("worksPage.filter.monologue")}</li> */}
            {/* <li>{t("worksPage.filter.performance")}</li> */}
          </ul>
          {/* <div className={s.forMarina}>Страница ещё в разработке</div> */}
        </div>
      </main>
      <div>
        {/* {first && (
          <video
            playsInline
            autoPlay
            loop
            muted
            type="video/mp4"
            src={first[0].url}
             width="200"
          />
        )} */}
      </div>

      {/* <Works_en />
      <Contacts />
      <footer>
        <Footer_en />
      </footer> */}
    </>
  );
}
export default Works;

// export async function getServerSideProps() {
//   const res = await axios("http://localhost:3000/api/hello");

//   return {
//     props: {
//       data: res.data.data.resources,
//     },
//   };
// }

// export async function getStaticProps() {
// const res = await fetch('http://localhost:8080/snapshot')
// const snapshot = await res.json()
// if (!snapshot){
//     return{
//         notFound: true
//     }
// }
// return{
//     props:{
//         snapshot
//     }
// }

// export async function getStaticProps(){
//   const res = await fetch('http://localhost:8080/snapshot')
//   const snapshot = await res.json()
//   if (!snapshot){
//       return{
//           notFound: true
//       }
//   }
//   return{
//       props:{
//           snapshot
//       }
//   }
// }
