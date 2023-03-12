import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./presWorks.module.css";
import Evgeny_Vasilchenko from "@/images/partners/Evgeny_Vasilchenko.png";
import Alisa_Ulyankina from "@/images/partners/Alisa_Ulyankina.png";
import Anna_Dovbush from "@/images/partners/image 25.svg";
import Denis_Shyst from "@/images/partners/imageTest4x.jpg";
import Mitya_Borodin from "@/images/partners/image4x.png";
import Ruslan_Bogdan from "@/images/partners/image4xCom.png";
import Vadim_Lysak from "@/images/partners/Vadim_Lysak.png";
import Vladimir_Akulov from "@/images/partners/image4x.png";
import Yura_Katynsky from "@/images/partners/image4xCom.png";
import Yuri_Konovalsky from "@/images/partners/Yuri_Konovalsky.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}
export default function SimpleSlider({ s, dataCloud }) {
  const arr = [
    {
      picture:
        "https://res.cloudinary.com/priem-cloud/image/upload/v1678566879/partners/Yuri_Konovalsky_puchqg.png",
      name: "Yuri Konovalsky",
      position: "1AC Focuspuller ",
    },
    {
      picture:
        "https://res.cloudinary.com/priem-cloud/image/upload/v1678566877/partners/Ruslan_Bogdan_yzmoiq.png",
      name: "Ruslan Bogdan",
      position: "Dop",
    },
    {
      picture:
        "https://res.cloudinary.com/priem-cloud/image/upload/v1678566875/partners/Denis_Shyst_stu1z1.png",
      name: "Denis Shyst",
      position: "Gafer",
    },
    {
      picture:
        "https://res.cloudinary.com/priem-cloud/image/upload/v1678566875/partners/Vladimir_Akulov_inmz2b.png",
      name: "Vladimir Akulov",
      position: "Gafer ",
    },
    {
      picture:
        "https://res.cloudinary.com/priem-cloud/image/upload/v1678566878/partners/Yura_Katynsky_qk42kr.png",
      name: "Yura Katynsky",
      position: "EDIT ",
    },
    {
      picture:
        "https://res.cloudinary.com/priem-cloud/image/upload/v1678566875/partners/Anna_Dovbush_mtmpfa.png",
      name: "Anna Dovbush",
      position: "Art director ",
    },
    {
      picture:
        "https://res.cloudinary.com/priem-cloud/image/upload/v1678566877/partners/Vadim_Lysak_ljhbpb.png",
      name: "Vadim Lysak",
      position: "Sfx - tornadoSfx ",
    },
    {
      picture:
        "https://res.cloudinary.com/priem-cloud/image/upload/v1678566870/partners/Evgeny_Vasilchenko_abeaof.png",
      name: "Evgeny Vasilchenko",
      position: "Dop ",
    },
    {
      picture:
        "https://res.cloudinary.com/priem-cloud/image/upload/v1678566873/partners/Alisa_Ulyankina_ujjcyc.png",
      name: "Alisa Ulyankina",
      position: "Make up ",
    },
    {
      picture:
        "https://res.cloudinary.com/priem-cloud/image/upload/v1678566878/partners/Mitya_Borodin_rs663s.png",
      name: "Mitya Borodin",
      position: "1 st ass director ",
    },
  ];
  const settings = {
    slidesToShow: 4,
    // slidesToScroll: 1,
    // infinite: true,
    dots: true,
    speed: 500,
    // autoplaySpeed: 3000,
    // autoplay: true,
    // arrows: false,
    // pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          // slidesToScroll: 1,
          // lazyLoad: false,
          // infinite: true,
          dots: true,
          speed: 500,
          // autoplaySpeed: 0,
          // arrows: false,
          // pauseOnHover: false,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          // slidesToScroll: 1,
          // lazyLoad: false,
          // infinite: true,
          dots: true,
          speed: 500,
          // autoplaySpeed: 0,
          // arrows: false,
          // pauseOnHover: false,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          // slidesToScroll: 10,
          // lazyLoad: false,
          // infinite: true,
          dots: true,
          speed: 500,
          // autoplaySpeed: 0,
          // arrows: false,
          // pauseOnHover: false,
          cssEase: "linear",
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings}>
      {dataCloud &&
        dataCloud.map((el) => {
          return (
            <div key={el.name}>
              <div className={s.box}>
                <Image
                  src={el.secure_url}
                  alt="person"
                  width={300}
                  height="369"
                />
                {/* <p className={s.name}>{el.name}</p>
                <p className={s.position}>{el.position}</p> */}
              </div>
            </div>
          );
        })}
    </Slider>
  );
}
