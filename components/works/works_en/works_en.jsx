import Image from "next/image";
import s from "../works.module.css";
import container from "../../../styles/container.module.css";
import axios from "axios";
import Backdrop from "../../../General/Backdrop";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
// import toggleBackdrop from "../../../General/toggleBackdrop";
const BASE_URL_VIMEO = "https://player.vimeo.com";
const acces = "bbcf126b704644bb50aea408d498767c";

function Works_en({ snapshot }) {
  // const [vid, setVid] = useState(null);
  const [video, setVideo] = useState(null);
  const [snapshots, setSnapshots] = useState(null);
  const [backdrop, setBackdrop] = useState(false)
  // const router = useRouter();
  const getVideo = (str) => {
    setVideo(str);
    document.body.classList.add("no-scroll")
  };
  const toggleBackdrop = () =>{
    setBackdrop(!backdrop)
  }
  useEffect(() =>{
    const exitBackdrop = (e) =>{
      if (e.key === "Escape"){
        setBackdrop(!backdrop)
      }
    }
    if (backdrop){
      document.addEventListener('keydown',exitBackdrop)
    }
    return() =>{
      document.removeEventListener('keydown',exitBackdrop)
    }
    
  },[backdrop])
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
      <section
        className={`${container.container__stretch} ${s.works__section}`}
      >
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
                  <li key={inx} className = {s.works__item} onClick={() => getVideo(it.player_embed_url)}>
                    <Image
                      src={it.pictures.base_link}
                      onClick = {toggleBackdrop}
                      alt="Stroka"
                      
                      layout="fill"
                    />
                    <div className={s.works__description}>
                        <p className={s.works__directed}>{it.description.directed}</p>
                        <p className={s.works__director}>{it.description.director}</p>
                    </div>
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
            {backdrop && (
              <div className = {s.backdrop} onClick = {toggleBackdrop}>
               {video &&
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
               } 
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
}
export default Works_en;
