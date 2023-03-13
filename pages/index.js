import { Contacts, Header, Footer } from "@/generalFunc";
import {
  ForActors,
  Works,
  About,
  Hero,
  Team,
  PresWorks,
  HmM
} from "@/components/Home";
// import { HmM_en } from "@/components/HmM";
// import Partners_en from "@/components/partners/partners_en/partners_en";
import Head from "next/head";
import "../18next";
import axios from "axios";

export default function Home() {
  return (
    // <I18nextProvider i18n={i18next}>
    <>
      {/* <Head>
        <title>Priem production</title>
      </Head> */}
      {/* <Header /> */}
      {/* <Hero /> */}
      <HmM/>
      {/* <About /> */}
      {/* <Team /> */}
      {/* <ForActors /> */}
      {/* <Partners_en /> */}
      {/* <PresWorks /> */}
      {/* <Works /> */}
      {/* <Contacts /> */}
      {/* <footer id="footer">
        <Footer />
      </footer> */}
    </>
    // </I18nextProvider>
  );
}

// export async function getServerSideProps() {
//   const res = await axios(
//     "https://priem-production-git-partners-image-salat4.vercel.app/api/hello"
//   );
//   console.log(res.data.data);
//   return {
//     props: {
//       data: res.data.data.resources,
//     },
//   };
// }

// import { useRouter } from "next/router";
// import { useEffect } from "react";

// export default function Home() {
//   const router = useRouter();
//   useEffect(() => {
//     router.push("/en");
//   });
// }
