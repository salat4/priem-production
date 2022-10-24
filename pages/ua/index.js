import Footer_ua from "../../components/footer/footer_uk/footer_uk";
import { HeaderUa } from "../../components/header";
import { Hero } from "../../components/hero/Hero";
import { About } from "../../components/about/aboutUA";
import { Contacts } from "../../components/contacts/ContactUA";

export default function Ua() {
  return (
    <>
      <HeaderUa />
      <Hero />
      <About />
      <Contacts />
      <footer>
        <Footer_ua />
      </footer>
    </>
  );
}
