import Slider from "react-slick";
import Image from "next/image";

// import s from "./presWorks.module.css";
import Evgeny_Vasilchenko from '@/images/partners/Evgeny_Vasilchenko.png';
import Alisa_Ulyankina from "@/images/partners/Alisa_Ulyankina.png"; 
import Anna_Dovbush from "@/images/partners/Anna_Dovbush.png"; 
import Denis_Shyst from "@/images/partners/Denis_Shyst.png"; 
import Mitya_Borodin from "@/images/partners/Mitya_Borodin.png";  
import Ruslan_Bogdan from "@/images/partners/Ruslan_Bogdan.png"; 
import Vadim_Lysak from "@/images/partners/Vadim_Lysak.png";    
import Vladimir_Akulov from "@/images/partners/Vladimir_Akulov.png"; 
import Yura_Katynsky from "@/images/partners/Yura_Katynsky.png";          
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
export default function SimpleSlider({s}) {
  const arr = [
    {
      picture: Yuri_Konovalsky,
      name: "Yuri Konovalsky",
      position: "1AC Focuspuller ",
    },
    {
      picture: Ruslan_Bogdan,
      name: "Ruslan Bogdan",
      position: "Dop",
    },
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
    {
      picture: Vadim_Lysak,
      name: "Vadim Lysak",
      position: "Sfx - tornadoSfx ",
    },
    {
      picture: Evgeny_Vasilchenko,
      name: "Evgeny Vasilchenko",
      position: "Dop ",
    },
    {
      picture: Alisa_Ulyankina,
      name: "Alisa Ulyankina",
      position: "Make up ",
    },
    {
      picture: Mitya_Borodin,
      name: "Mitya Borodin",
      position: "1 st ass director ",
    }
  ];
  const settings = {
    // dots: true,
    // infinite: true,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    // autoplay: true,
    // speed: 4000,
    // autoplaySpeed: 4000,
    // cssEase: "linear",

    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    pauseOnHover: false,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings}>
      {arr.map((el) => {
        return (
          <div key={el.name}>
            <div className={s.box}>
              <Image src={el.picture} alt="person" width={305} height={355} />
              <p className={s.name}>{el.name}</p>
              <p className={s.position }>{el.position}</p>
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
