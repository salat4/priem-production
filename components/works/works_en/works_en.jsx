import Image from "next/image";
import s from "../works.module.css";
import container from "../../../styles/container.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
// import { useRouter } from "next/router";
const acces = "bbcf126b704644bb50aea408d498767c";

function Works_en({ snapshot }) {
  const [vid, setVid] = useState(null);

  // const router = useRouter();
  const getVideo = () => {
    axios
      .get("http://localhost:8080/video")
      .then((res) => {
        console.log(res.data);
        const qwe = new DOMParser()
          .parseFromString(res.data.html, "text/html")
          .getElementsByTagName("iframe")[0];
        // router.push(res.data.player_embed_url);
        setVid(qwe);
      })
      .catch((error) => console.log(error));
  };

  // useEffect(() => {
  //   let iframe = document.getElementById("#iframe");
  //   let player = new Vimeo.Player(iframe);
  //   player.on("play", function () {
  //     console.log("Played the video");
  //   });

  //   player.getVideoTitle().then(function (title) {
  //     console.log("title:", title);
  //   });
  // }, []);

  // let i = 1;
  return (
    <>
      <section
        className={`${container.container__stretch} ${s.works__section}`}
      >
        <button onClick={getVideo}>Get video</button>
        {vid && (
          <ReactPlayer
            url="https://player.vimeo.com/video/767582772"
            // style={{
            //   position: "absolute",
            //   top: 0,
            //   left: 0,
            //   width: "100" + "vh",
            //   height: "100" + "vh",
            // }}
            config={{
              vimeo: {
                playerOptions: {
                  playsinline: true,
                },
              },
            }}
          />
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
        )}

        {/* <ul className={s.works__list}>
                    {snapshot.map((snap)=>(
                        <li className={s.works__item} key = {i++}>
                            <span className={s.works__image}>
                                <Image src ={snap.url}
                                    layout="fill"
                                />
                            </span>
                            <div className={ s.works__box}>
                                <p className={s.works__name}>{snap.name}</p>
                                <p className={s.works__dop}>{snap.dop}</p>
                            </div>
                            {console.log(snap)}
                        </li>

                    ))}
                </ul> */}
      </section>
    </>
  );
}
export default Works_en;
