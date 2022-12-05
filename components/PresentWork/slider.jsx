import Slider from "react-slick";
import Image from "next/image";
import pic from "../../images/pic.jpg";
import pic1 from "../../images/pic1.jpg";
import s from "./presWorks.module.css";

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
export default function SimpleSlider() {
  const settings = {
    // dots: true,
    // infinite: true,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    // autoplay: true,
    // speed: 4000,
    // autoplaySpeed: 4000,
    // cssEase: "linear",

    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings}>
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
    </Slider>
  );
}
