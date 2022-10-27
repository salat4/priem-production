import s from "./about.module.css";
// import Image from "next/image";
import pic from "../../images/pic.jpg";
import pic1 from "../../images/pic1.jpg";
import { useCallback, useEffect, useState } from "react";

export const About = () => {
  const [fix, setFix] = useState("qwe");

  const styleTeam = useCallback(() => {
    let target = document.getElementById("team");
    let target1 = document.getElementById("about");

    if (!target) {
      return;
    }
    var targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        qwe: window.pageYOffset + target1.getBoundingClientRect().top,
      },
      windowPosition = {
        bottom: window.pageYOffset + document.documentElement.clientHeight,
      };
    if (targetPosition.top < windowPosition.bottom) {
      setFix("isFixed");
    } else {
      setFix("qwe");
    }
    if (targetPosition.qwe === 0 && target1.className === "isFixed") {
      setFix("qweBack");
    }
  }, []);

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", styleTeam);
    }
    return () => {
      window.removeEventListener("scroll", styleTeam);
    };
  }, [styleTeam]);

  return (
    <section id="about" className={fix}>
      <div className={`${s.wrap}`}>
        <div className={`${s.section}`}>
          <p className={`${s.p}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            voluptates ea enim velit sequi maiores ex. Rerum porro voluptatum,
            aperiam molestiae temporibus facere ut voluptatibus nihil explicabo
            tempora deleniti impedit at officia! Laudantium delectus accusantium
            itaque debitis eius, ratione nihil, aspernatur, minus nulla et
            neque?
          </p>
        </div>
      </div>
    </section>
  );
};

// const element = document.getElementById("about");

// const scroll = (e) => {
//   e.preventDefault()
//   element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

// };
