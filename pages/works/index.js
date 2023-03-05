import { Header } from "@/generalFunc";
import axios from "axios";
// import Works_en from "../../components/works/works_en/works_en";
// import Footer_en from "../../components/footer/footer_en/footer_en";
// import { Contacts } from "../../components/contacts/ContactEN";
import { CldImage, CldVideoPlayer } from "next-cloudinary";
import { Video, Transformation } from "cloudinary-react";
import { useEffect, useState } from "react";
import "../../18next";

function Works(props) {
  const [first, setFirst] = useState(null);
  useEffect(() => {
    console.log(props.data);
    setFirst(props.data);
  }, [props]);

  return (
    <>
      <Header />
      <div>
        {/* <Video publicId="work-templates/IMG_0111_udcgyb">
          <Transformation
            color="#ffffff"
            height="320"
            quality="auto:good"
            width="568"
            crop="scale"
          />
        </Video> */}
        {/* {first && (
          <video
            playsInline
            autoPlay
            loop
            muted
            type="video/mp4"
            src={first[0].url}
             width="200"
          />
        )} */}
      </div>

      {/* <Works_en />
      <Contacts />
      <footer>
        <Footer_en />
      </footer> */}
    </>
  );
}
export default Works;

export async function getServerSideProps() {
  const res = await axios("http://localhost:3000/api/hello");

  return {
    props: {
      data: res.data.data.resources,
    },
  };
}

// export async function getStaticProps() {
// const res = await fetch('http://localhost:8080/snapshot')
// const snapshot = await res.json()
// if (!snapshot){
//     return{
//         notFound: true
//     }
// }
// return{
//     props:{
//         snapshot
//     }
// }

// export async function getStaticProps(){
//   const res = await fetch('http://localhost:8080/snapshot')
//   const snapshot = await res.json()
//   if (!snapshot){
//       return{
//           notFound: true
//       }
//   }
//   return{
//       props:{
//           snapshot
//       }
//   }
// }
