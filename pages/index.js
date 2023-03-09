import { Hero } from "@/components/Home";
import { About } from "@/components/Home";
import { Contacts, Header } from "@/generalFunc";
import { Team } from "@/components/Home";
import { ForActors } from "@/components/Home";
import {Works} from '@/components/Home'
// import * as Home from "@/components/Home"
import Head from "next/head";
import "../18next";
import {Footer} from "@/generalFunc"
export default function Home() {
  return (
    // <I18nextProvider i18n={i18next}>
    <>
      <Head>
        <title>Priem production</title>
      </Head>
      {/* <Header /> */}
      {/* <Hero /> */}
      {/* <HmM/> */}
      {/* <About /> */}
      <Team />
      {/* <ForActors /> */}
      {/* <Partners_en /> */}
      {/* <PresWorks /> */}
      <Works />
      {/* <Contacts /> */}
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
