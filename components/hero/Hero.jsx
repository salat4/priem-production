import { useEffect, useState } from "react";
import VideoHero from "../../Video/Video2.mp4";

export const Hero = () => {
  const [first, setfirst] = useState(0);

  // useEffect(() => {
  //   window.onresize = function (event) {
  //     setfirst(document.documentElement.clientWidth);
  //   };
  // }, []);

  // useEffect(() => {
  //   setfirst(document.documentElement.clientWidth);
  // }, []);

  return (
    <section>
      {/* <ReactPlayer src={VideoHero} /> */}
      <video
        width={first}
        autoPlay
        loop
        muted
        src={require("../../Video/Video3.mp4")}
      />
      {/* <video autoPlay loop muted>
        <source src={VideoHero} />
      </video> */}
      {/* <h1>Hero</h1> */}
    </section>
  );
};
{
  /* type="video/mp4" */
}
