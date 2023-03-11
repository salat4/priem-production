import { Contacts, Header, Footer } from "@/generalFunc";
import {
  ForActors,
  Works,
  About,
  Hero,
  Team,
  PresWorks,
} from "@/components/Home";
// import { HmM_en } from "@/components/HmM";
// import Partners_en from "@/components/partners/partners_en/partners_en";
import Head from "next/head";
import "../18next";

export default function Home() {
  return (
    // <I18nextProvider i18n={i18next}>
    <>
      <Head>
        <title>Priem production</title>
      </Head>
      <Header />
      <Hero />
      {/* <HmM/> */}
      <About />
      <Team />
      <ForActors />
      {/* <Partners_en /> */}
      {/* <PresWorks /> */}
      {/* <Works /> */}
      <Contacts />
      <footer id="footer">
        <Footer />
      </footer>
    </>
    // </I18nextProvider>
  );
}

// export async function getStaticProps() {
//   // const res = await fetch('https://drive.google.com/drive/folders/1fxqd9hhnhPNHuUQ70r_1nXqoH4lt8AXO?usp=share_link')
//   // const snapshot = await res.json()
//   // console.log(res);
//   // if (!res) {
//   //   return {
//   //     notFound:true
//   //   }
//   // }
//   // return {
//   //   props: {
//   //     res
//   //   }
//   // }
// }

// import { useRouter } from "next/router";
// import { useEffect } from "react";

// export default function Home() {
//   const router = useRouter();
//   useEffect(() => {
//     router.push("/en");
//   });
// }
