import Image from "next/image";
import s from "../works.module.css";
import container from "../../../styles/container.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Backdrop from "../../../General/Backdrop";
import ReactPlayer from "react-player";
// import { useRouter } from "next/router";
const acces = "bbcf126b704644bb50aea408d498767c";

function Works_en({ snapshot }) {
  const [vid, setVid] = useState(null);

  // const router = useRouter();
  const getVideo = () => {
    axios
      .get(
        "https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/767582772&width=480&height=360"
      )
      .then((res) => {
        console.log(res.data);
        const qwe = new DOMParser()
          .parseFromString(res.data.html, "text/html")
          .getElementsByTagName("iframe")[0];
        console.log(qwe);
        // router.push(res.data.player_embed_url);
        setVid(true);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setVid(true);

    //   let iframe = document.getElementById("#iframe");
    //   let player = new Vimeo.Player(iframe);
    //   player.on("play", function () {
    //     console.log("Played the video");
    //   });

    //   player.getVideoTitle().then(function (title) {
    //     console.log("title:", title);
    //   });
  }, []);

  // let i = 1;
  return (
    <>
      <section
        className={`${container.container__stretch} ${s.works__section}`}
      >
        <button onClick={getVideo}>Get video</button>
        {vid && (
          <>
            {/* <Backdrop /> */}
            <ReactPlayer
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
            />
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
