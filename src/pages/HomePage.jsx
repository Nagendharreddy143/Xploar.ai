import useAos from "../hooks/useAos";
import HeroSection from "../components/home/HeroSection";
import ChallengeSection from "../components/home/ChallengeSection";
import FeaturesSection from "../components/home/FeaturesSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import CtaSection from "../components/home/CtaSection";
import DotBackground from "../components/home/DotBackground";
import AllInOneSection from "../components/home/AllInOneSection";
import OutcomesSection from "../components/home/OutcomesSection";
import FaqSection from "../components/home/FaqSection";

const HomePage = () => {
  useAos();

  return (
    <>
      <DotBackground />
      <HeroSection />
      <div id="main-content" className="relative bg-ice-white z-10">
        <ChallengeSection />
        <AllInOneSection />
        <FeaturesSection />
        <HowItWorksSection />
        <OutcomesSection />
        <FaqSection />
        <CtaSection />
      </div>
    </>
  );
};

export default HomePage;
