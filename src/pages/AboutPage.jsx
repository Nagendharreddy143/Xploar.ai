import useAos from "../hooks/useAos";
import AboutHero from "../components/about/AboutHero";
import MissionVision from "../components/about/MissionVision";
import CoreValues from "../components/about/CoreValues";
import Founders from "../components/about/Founders";
import OurTeam from "../components/about/OurTeam";
import CtaSection from "../components/home/CtaSection"; // Reusing CTA
import AboutPageSEO from "../components/seo/AboutPageSEO";

const AboutPage = ({ onOpenModal }) => {
  useAos();

  return (
    <>
      <AboutPageSEO />
      <AboutHero />
      <MissionVision />
      <CoreValues />
      <Founders />
      <OurTeam />
      <CtaSection onOpenModal={onOpenModal} />
    </>
  );
};

export default AboutPage;
