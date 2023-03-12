import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

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
export default function SimpleSlider({ s }) {
  const { t } = useTranslation("translation");
  const arr = [
    {
      picture:
        "https://res.cloudinary.com/priem-cloud/image/upload/v1678566879/partners/Yuri_Konovalsky_puchqg.png",
      name: "1",
      position: "1AC Focuspuller ",
    },
    {
      picture:
        "https://res.cloudinary.com/priem-cloud/image/upload/v1678566877/partners/Ruslan_Bogdan_yzmoiq.png",
      name: "2",
      position: "Dop",
    },
    {
      picture:
        "https://res.cloudinary.com/priem-cloud/image/upload/v1678566875/partners/Denis_Shyst_stu1z1.png",
      name: "3",
      position: "Gafer",
    },
    {
      picture:
        "https://res.cloudinary.com/priem-cloud/image/upload/v1678566875/partners/Vladimir_Akulov_inmz2b.png",
      name: "4",
      position: "Gafer ",
    },
    {
      picture:
        "https://res.cloudinary.com/priem-cloud/image/upload/v1678566878/partners/Yura_Katynsky_qk42kr.png",
      name: "5",
      position: "EDIT ",
    },
    {
      picture:
        "https://res.cloudinary.com/priem-cloud/image/upload/v1678566875/partners/Anna_Dovbush_mtmpfa.png",
      name: "6",
      position: "Art director ",
    },
    {
      picture:
        "https://res.cloudinary.com/priem-cloud/image/upload/v1678566877/partners/Vadim_Lysak_ljhbpb.png",
      name: "7",
      position: "Sfx - tornadoSfx ",
    },
    {
      picture:
        "https://res.cloudinary.com/priem-cloud/image/upload/v1678566870/partners/Evgeny_Vasilchenko_abeaof.png",
      name: "8",
      position: "Dop ",
    },
    {
      picture:
        "https://res.cloudinary.com/priem-cloud/image/upload/v1678566873/partners/Alisa_Ulyankina_ujjcyc.png",
      name: "9",
      position: "Make up ",
    },
    {
      picture:
        "https://res.cloudinary.com/priem-cloud/image/upload/v1678566878/partners/Mitya_Borodin_rs663s.png",
      name: "10",
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
      {arr.map((el) => {
        return (
          <div key={el.name}>
            <div className={s.box}>
              <Image src={el.picture} alt="person" width={300} height="369" />
              <p className={s.name}>
                {t(`homePage.section.partners.${el.name}`)}
              </p>
              <p className={s.position}>{el.position}</p>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
