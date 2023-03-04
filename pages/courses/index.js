import { useEffect, useState } from "react";
// import Image from "next/image";
// import ss from "@/generalFunc/mobileMenu/mobMenu.module.css";
import s from "./courses.module.css";
import {
  Header,
  Button,
  Title,
  Contacts,
  isSectionOutOfView,
  toggleBackdrop,
  FormSubscribe,
} from "@/generalFunc";
import "../../18next";
import { useTranslation } from "react-i18next";
import BasicImage from "@/images/background/Basic.png";
import ProImage from "@/images/background/Pro.png";
import VipImage from "@/images/background/Vip.png";
import {
  BasicCard,
  VipCard,
  ProCard,
} from "@/components/Courses/cardCourses/Card";

function PageCourses() {
  const [showForm, setShowForm] = useState(false);
  const [coursesTitleForSubscribe, setCoursesTitleForSubscribe] =
    useState(null);
  const [courseName, setCourseName] = useState("");
  const { t } = useTranslation("translation");

  const openForm = (e) => {
    const { id } = e.target;
    setCourseName(id);
    setShowForm(!showForm);
  };

  const toggleShowBackdrop = (e) => {
    const DoClose = toggleBackdrop(e);
    if (`${DoClose}` === "false") {
      setShowForm(toggleBackdrop(e));
    }
  };

  useEffect(() => {
    const arr = [];
    for (let index = 0; index < 13; index++) {
      arr.push("coursesPage.card");
    }
    setCoursesTitleForSubscribe(arr);
    window.removeEventListener("scroll", isSectionOutOfView);
    // window.addEventListener("keydown", toggleShowBackdrop);
    // return () => {
    //   window.removeEventListener("keydown", toggleShowBackdrop);
    // };
  }, []);

  return (
    <>
      <Header />
      <Contacts />

      <section className={s.coursesSection}>
        <div className="container">
          <Title
            text={t("coursesPage.title")}
            style={s.pageTitle}
            rotate="false"
          />
          <p className={s.description}>{t("coursesPage.description")}</p>
          <Button showForm={() => setShowForm(true)} text={t("buttonLeave")} />

          <div className={s.cardContainer}>
            <BasicCard openForm={openForm} image={BasicImage} />
            <ProCard openForm={openForm} image={ProImage} />
            <VipCard openForm={openForm} image={VipImage} />
          </div>
        </div>
        {showForm && (
          <FormSubscribe
            toggleShowBackdrop={toggleShowBackdrop}
            course={courseName}
          />
        )}
      </section>
    </>
  );
}

export default PageCourses;
