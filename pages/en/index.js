import Footer_en from "../../components/footer/footer_en/footer_en";
import { HeaderEn } from "../../components/header";
import { Hero } from "../../components/hero/Hero";
import { About } from "../../components/about/aboutEN";
import { Contacts } from "../../components/contacts/ContactEN";
// import Team from "../../components/team/team";
import  HmM_en  from "../../components/HmM/HmM_en/HmM_en";
import { Partners } from "../../components/partners";
import { PresWorks } from "../../components/PresentWork";
export default function En() {
  return (
    <>
      <HeaderEn />
      <Hero />
      <About />
      <HmM_en />
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
