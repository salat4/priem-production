import Footer_en from "../../components/footer/footer_en/footer_en";
import Footer_ua from "../../components/footer/footer_uk/footer_uk";
import { HeaderUa } from "../../components/header";
import { Hero } from "../../components/hero/Hero";
Footer_ua
export default function Ua() {
  return (
    <>
      <HeaderUa />
      <Hero />
      <footer>
        <Footer_ua></Footer_ua>
      </footer>
    </>
  );
}
