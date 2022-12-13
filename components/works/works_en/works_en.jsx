import Image from "next/image";
import s from "../works.module.css";
import container from "../../../styles/container.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Alexander_Lutchak from "../../../images/partners/Alexander_Lutchak.png";
import Alexandra_Degas from "../../../images/partners/Alexandra_Degas.png";
import Backdrop from "../../../General/Backdrop";
import ReactPlayer from "react-player";
const BASE_URL_VIMEO = "https://player.vimeo.com";
// import { useRouter } from "next/router";
const acces = "bbcf126b704644bb50aea408d498767c";

function Works_en({ snapshot }) {
  const [vid, setVid] = useState(null);
  const [video, setVideo] = useState(null);
  const [snapshots, setSnapshots] = useState(null);

  // const router = useRouter();
  const getVideo = (str) => {
    setVideo(str);
    // axios
    //   .get("http://localhost:8080/video")
    //   .then((res) => {
    //     console.log(res.data);
    //     // const qwe = new DOMParser()
    //     //   .parseFromString(res.data.html, "text/html")
    //     //   .getElementsByTagName("iframe")[0];
    //     // console.log(qwe);
    //     // // router.push(res.data.player_embed_url);
    //     setVid(true);
    //   })
    //   .catch((error) => console.log(error));
  };

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

  // let i = 1;
  return (
    <>
      <section
        className={`${container.container__stretch} ${s.works__section}`}
      >
        <button onClick={getVideo}>Get video</button>
        {snapshots && (
          <>
            <ul>
              {snapshots.map((it, inx) => {
                console.log(it);
                return (
                  <li key={inx} onClick={() => getVideo(it.player_embed_url)}>
                    <Image
                      src={it.pictures.base_link}
                      alt="Stroka"
                      width="300"
                      height="200"
                    />
                    {/* <ReactPlayer
                      url="https://i.vimeocdn.com/video/1567106440-d9d3cbd795603169accdef7b9e74a3428ec326317bdf2361aff7246f6207cf0b-d"
                      className={s.worksVideoQwe}
                      config={{
                        vimeo: {
                          playerOptions: {
                            playsinline: true,
                            width: 200,
                            controls: false,
                            autoplay: true,
                          },
                        },
                      }}
                    /> */}
                  </li>
                );
              })}
            </ul>
            {video && (
              <ReactPlayer
                url={video}
                className={s.worksVideoQwe}
                config={{
                  vimeo: {
                    playerOptions: {
                      playsinline: true,
                    },
                  },
                }}
              />
            )}

            {/* <ReactPlayer
              url="https://player.vimeo.com/video/767582772"
              className={s.worksVideoQwe}
              config={{
                vimeo: {
                  playerOptions: {
                    playsinline: true,
                    width: 200,
                  },
                },
              }}
            /> */}
          </>
        )}
      </section>
    </>
  );
}
export default Works_en;
// <iframe
// style={{
//   position: "absolute",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100%",
// }}
//   frameBorder="0"
//   playsInline
//   allowFullScreen
//   controls={false}
//   autoPlay
//   loop
//   muted="false"
//   src={vid.src}
//   type="video/mp4"
// ></iframe>
// )}
// const qwe = new DOMParser()
//   .parseFromString(res.data.html, "text/html")
//   .getElementsByTagName("iframe")[0];
// console.log(qwe);
// // router.push(res.data.player_embed_url);

// https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/75e49e80-9f84-49be-a0a0-9d997e1322d1.gif?ClientID=vimeo-core-prod&Date=1670853878&Signature=8529fe90a66476e451c1afa58f7832872fdeef00
