import { Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

function App() {
  const location = useLocation();
  const getPageName = () => {
    switch (location.pathname) {
      case "/about":
        return "about";
      case "/contact":
        return "contact";
      default:
        return "home";
    }
  };

  return (
    <MainLayout page={getPageName()}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
