import Footer_en from "../../components/footer/footer_en/footer_en";
import { HeaderEn } from "../../components/header";
import { Hero } from "../../components/hero/Hero";
import { About } from "../../components/about/aboutUA";
import { Contacts } from "../../components/contacts/ContactEN";
export default function En() {
  return (
    <>
      <HeaderEn />
      <Hero />
      <About/>
      <Contacts/>
      <footer>
        <Footer_en></Footer_en>
      </footer>
    </>
  );
}
