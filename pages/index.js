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
import axios from "axios";

export default function Home({ data }) {
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
      <Team dataCloud={data} />
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

export async function getServerSideProps() {
  const res = await axios("http://localhost:3000/api/hello");
  return {
    props: {
      data: res.data.data.resources,
    },
  };
}

// import { useRouter } from "next/router";
// import { useEffect } from "react";

// export default function Home() {
//   const router = useRouter();
//   useEffect(() => {
//     router.push("/en");
//   });
// }
