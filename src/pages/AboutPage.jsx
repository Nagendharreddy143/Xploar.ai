import useAos from "../hooks/useAos";
import AboutHero from "../components/about/AboutHero";
import MissionVision from "../components/about/MissionVision";
import CoreValues from "../components/about/CoreValues";
import Founders from "../components/about/Founders";
import CtaSection from "../components/home/CtaSection"; // Reusing CTA

const AboutPage = ({ onOpenModal }) => {
  useAos();

  return (
    <>
      <AboutHero />
      <MissionVision />
      <CoreValues />
      <Founders />
      <CtaSection onOpenModal={onOpenModal} />
    </>
  );
};

export default AboutPage;
