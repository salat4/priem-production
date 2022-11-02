import Footer_en from "../../components/footer/footer_en/footer_en";
import { HeaderEn } from "../../components/header";
import { Hero } from "../../components/hero/Hero";
import { About } from "../../components/about/aboutEN";
import { Contacts } from "../../components/contacts/ContactEN";
// import Team from "../../components/team/team";
import { HmM } from "../../components/HmM";
import { Partners } from "../../components/partners";
import { PresWorks } from "../../components/PresentWork";
export default function En() {
  return (
    <>
      <HeaderEn />
      <Hero />
      <About />
      <HmM />
      <Partners />
      <PresWorks />
      {/* <Team /> */}
      <Contacts />
      <footer id="footer">
        <Footer_en />
      </footer>
    </>
  );
}
