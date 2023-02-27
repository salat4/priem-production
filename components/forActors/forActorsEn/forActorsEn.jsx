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
            An actor’s portfolio is the fundamental working material when
            cooperating with casting directors, directors and an agent. After
            all, this is the only opportunity to see you on camera before
            meeting you in person.
          </p>
          <p className={`${s.textAbout}`}>
            <span className={ss.attentionText}>PRIËM PRODUCTION </span>
            provides packages with partial or full portfolios. We know the
            filmmaking market from the inside and know exactly what casting
            directors and directors pay attention to at the casting stage and we
            are willing to work with you personally on your presentation,
            confidence on camera and create high-quality material.
          </p>
          <Button text={"Read more"} />
        </div>
      </div>
    </section>
  );
}
