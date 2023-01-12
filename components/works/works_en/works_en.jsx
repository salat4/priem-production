import Image from "next/image";
import s from "../works.module.css";
import container from "../../../styles/container.module.css";
import axios from "axios";
import Backdrop from "../../../General/Backdrop";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import toggleBackdrop from "../../../General/toggleBackdrop";
import CloseModalIcon from "../../../images/Close-icon.svg";
import ss from "../../../components/mobileMenu/mobileMenu_en/mobMenuEn.module.css";
// const BASE_URL_VIMEO = "https://player.vimeo.com";
// const acces = "bbcf126b704644bb50aea408d498767c";

function Works_en() {
  // const [vid, setVid] = useState(null);
  const [video, setVideo] = useState(null);
  const [snapshots, setSnapshots] = useState(null);
  // const [backdrop, setBackdrop] = useState(false);
  // const router = useRouter();
  const getVideo = (str) => {
    setVideo(str);
    console.log(str);
    document.body.classList.add("no-scroll");
  };

  const toggleShowBackdrop = (e) => {
    console.log(e);
    const DoClose = toggleBackdrop(e);
    if (`${DoClose}` === "false") {
      setVideo(toggleBackdrop(e));
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", toggleShowBackdrop);
    return () => {
      window.removeEventListener("keydown", toggleShowBackdrop);
    };
  }, []);
  // const toggleBackdrop = () => {
  //   setBackdrop(!backdrop);
  //   console.log(backdrop);
  // };

  // useEffect(() => {
  //   const exitBackdrop = (e) => {
  //     if (e.key === "Escape") {
  //       setBackdrop(!backdrop);
  //     }
  //   };
  //   if (backdrop) {
  //     document.addEventListener("keydown", exitBackdrop);
  //   }
  //   return () => {
  //     document.removeEventListener("keydown", exitBackdrop);
  //   };
  // }, [backdrop]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/video")
      .then((res) => {
        const dataWithChangedDeskription = res.data.data.map((el) => {
          const koma = el.description && el.description.indexOf(",");
          const firstStr = el.description && el.description.slice(0, koma);
          const secondStr = el.description && el.description.slice(koma + 1);
          if (firstStr && secondStr) {
            return {
              ...el,
              description: {
                director: firstStr,
                directed: secondStr && secondStr.trim(),
              },
            };
          }
        });
        setSnapshots(dataWithChangedDeskription);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <section className={`${s.works__section}`}>
        {snapshots && (
          <>
            {/* <ul className={s.works__list}>
              {snapshots.map((it, inx) => {
                return (
                  <li key={inx} className = {s.works__item} onClick={() => getVideo(it.player_embed_url)}>
                    <Image
                      src={it.pictures.base_link}
                      onClick = {toggleBackdrop}
                      alt="Stroka"
                      
                      layout="fill"
                    />
                  </li>
                );
              })}
            </ul> */}
            <ul className={s.works__list}>
              {snapshots.map((it, inx) => {
                return (
                  <>
                    <li
                      key={inx}
                      className={s.works__item}
                      onClick={() => getVideo(it.player_embed_url)}
                    >
                      <picture>
                        <img
                          className={s.imageItem}
                          src={it.pictures.base_link}
                          alt="Stroka"
                        />
                        <div className={s.works__description}>
                          <p className={s.works__directed}>
                            {it.description.directed}
                          </p>
                          <p className={s.works__director}>
                            {it.description.director}
                          </p>
                        </div>
                      </picture>
                    </li>
                    {/* <li key={inx} className = {s.works__item} onClick={() => getVideo(it.player_embed_url)}>
                    <Image
                      src={it.pictures.base_link}
                      onClick = {toggleBackdrop}
                      alt="Stroka"
                      
                      layout="fill"
                    />
                  </li>
                  <li key={inx} className = {s.works__item} onClick={() => getVideo(it.player_embed_url)}>
                    <Image
                      src={it.pictures.base_link}
                      onClick = {toggleBackdrop}
                      alt="Stroka"
                      
                      layout="fill"
                    />
                  </li>
                  <li key={inx} className = {s.works__item} onClick={() => getVideo(it.player_embed_url)}>
                    <Image
                      src={it.pictures.base_link}
                      onClick = {toggleBackdrop}
                      alt="Stroka"
                      
                      layout="fill"
                    />
                  </li> */}
                  </>
                );
              })}
            </ul>
            {video && (
              <Backdrop>
                <div id="close" className={s.backFromVideo}>
                  <button
                    className={ss.closeIcon}
                    id="close"
                    onClick={toggleShowBackdrop}
                  >
                    <Image
                      src={CloseModalIcon}
                      alt="close menu button"
                      id="close"
                      width="15"
                    />
                  </button>
                  <ReactPlayer
                    url={video}
                    id="close"
                    className={s.worksVideoQwe}
                    config={{
                      vimeo: {
                        playerOptions: {
                          playsinline: true,
                        },
                      },
                    }}
                  />
                </div>
              </Backdrop>
            )}
          </>
        )}
      </section>
    </>
  );
}
export default Works_en;
