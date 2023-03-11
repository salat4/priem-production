import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import s from "./presWorks.module.css";
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
    // {
    //   picture: Yuri_Konovalsky,
    //   name: "Yuri Konovalsky",
    //   position: "1AC Focuspuller ",
    // },
    // {
    //   picture: Ruslan_Bogdan,
    //   name: "Ruslan Bogdan",
    //   position: "Dop",
    // },
    {
      picture: Denis_Shyst,
      name: "Denis Shyst",
      position: "Gafer",
    },
    {
      picture: Vladimir_Akulov,
      name: "Vladimir Akulov",
      position: "Gafer ",
    },
    {
      picture: Yura_Katynsky,
      name: "Yura Katynsky",
      position: "EDIT ",
    },
    {
      picture: Anna_Dovbush,
      name: "Anna Dovbush",
      position: "Art director ",
    },
    // {
    //   picture: Vadim_Lysak,
    //   name: "Vadim Lysak",
    //   position: "Sfx - tornadoSfx ",
    // },
    // {
    //   picture: Evgeny_Vasilchenko,
    //   name: "Evgeny Vasilchenko",
    //   position: "Dop ",
    // },
    // {
    //   picture: Alisa_Ulyankina,
    //   name: "Alisa Ulyankina",
    //   position: "Make up ",
    // },
    // {
    //   picture: Mitya_Borodin,
    //   name: "Mitya Borodin",
    //   position: "1 st ass director ",
    // },
  ];
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 10,
    infinite: true,
    dots: false,
    speed: 35000,
    autoplaySpeed: 0,
    autoplay: true,
    arrows: false,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          lazyLoad: false,
          // infinite: true,
          dots: false,
          speed: 1000,
          autoplaySpeed: 0,
          // arrows: false,
          pauseOnHover: false,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          lazyLoad: false,
          infinite: true,
          dots: false,
          speed: 1000,
          autoplaySpeed: 0,
          arrows: false,
          pauseOnHover: false,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          lazyLoad: false,
          // infinite: true,
          dots: false,
          speed: 1000,
          // autoplaySpeed: 0,
          // arrows: false,
          pauseOnHover: false,
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
                <Image src={el.url} alt="person" width={300} height="369" />
                {/* <p className={s.name}>{el.name}</p>
              <p className={s.position}>{el.position}</p> */}
              </div>
            </div>
          );
        })}
      {/* <div>
        <div>
          <Image src={pic1} alt="person" width={305} height={355} />
        </div>
      </div>
      <div>
        <div>
          <Image
            className={s.card_img}
            src={pic}
            alt="person"
            width={305}
            height={355}
          />
        </div>
      </div>
      <div>
        <div>
          <Image src={pic1} alt="person" width={305} height={355} />
        </div>
      </div>
      <div>
        <div>
          <Image
            className={s.card_img}
            src={pic}
            alt="person"
            width={305}
            height={355}
          />
        </div>
      </div>
      <div>
        <div>
          <Image src={pic1} alt="person" width={305} height={355} />
        </div>
      </div>
      <div>
        <div>
          <Image
            className={s.card_img}
            src={pic}
            alt="person"
            width={305}
            height={355}
          />
        </div>
      </div> */}
    </Slider>
  );
}
