import Image from "next/image";
import s from "../works.module.css";
import container from "../../../styles/container.module.css";
import axios from "axios";
import { useState } from "react";
// import { useRouter } from "next/router";
const acces = "bbcf126b704644bb50aea408d498767c";

function Works_en({ snapshot }) {
  const [vid, setVid] = useState(null);

  // const router = useRouter();
  const getVideo = () => {
    axios
      .get("http://localhost:8080/video")
      .then((res) => {
        console.log(res);
        // const qwe = new DOMParser()
        //   .parseFromString(res.data.body.html, "text/html")
        //   .getElementsByTagName("iframe")[0];
        // console.log(qwe);
        // router.push(res.data.player_embed_url);
        // setVid(qwe);
      })
      .catch((error) => console.log(error));
  };

  // let i = 1;
  return (
    <>
      <section
        className={`${container.container__stretch} ${s.works__section}`}
      >
        <button onClick={getVideo}>Get video</button>
        {vid && (
          <video
            className={s.video}
            playsInline
            autoPlay
            loop
            muted
            src={vid.src}
            type="video/mp4"
          />
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
