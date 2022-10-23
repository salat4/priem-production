import Footer_ru from "../../components/footer/footer_ru/footer_ru";
import { HeaderRus } from "../../components/header";
import { Hero } from "../../components/hero/Hero";
import { About } from "../../components/about/aboutru";
import { Contacts } from "../../components/contacts/Contactsru";

export default function Ua() {
  return (
    <>
      <HeaderRus />
      <Hero />
      <About/>
      <Contacts/>
      <footer>
        <Footer_ru></Footer_ru>
      </footer>
    </>
  );
}
