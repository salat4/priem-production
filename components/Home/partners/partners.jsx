import React from "react";
import { Title } from "@/generalFunc";
import s from "./partners.module.css";
import SimpleSlider from "../presentWork/slider.jsx";
function Partners() {
  return (
    <>
      <Title text={"Our partners"} style={"title"} styleForContainer={s} />
      <section className={s.partners}>
        <SimpleSlider s={s} />
      </section>
    </>
  );
}

export default Partners;
