// import Footer_en from "@/components/footer/footer_en/footer_en";
import { Hero } from "@/components/Home";
import { About } from "@/components/Home";
import { Contacts, Header } from "@/generalFunc";
import { Team } from "@/components/Home";
import { ForActors } from "@/components/Home";
// import { HmM_en } from "@/components/HmM";
// import Partners_en from "@/components/partners/partners_en/partners_en";
// import { PresWorks } from "../../components/PresentWork";
import Head from "next/head";
// import Works_en from "@/components/works/works_en/works_en";
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
      {/* <HmM_en /> */}
      <About />
      <Team />
      <ForActors />
      {/* <Partners_en /> */}
      {/* <PresWorks /> */}
      {/* <Works_en /> */}
      <Contacts />
      {/* <footer id="footer">
        <Footer_en />
      </footer> */}
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
