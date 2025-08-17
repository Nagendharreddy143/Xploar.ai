import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
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
      case "/privacy-policy":
        return "privacy-policy";
      case "/terms-conditions":
        return "terms-conditions";
      default:
        return "home";
    }
  };

  return (
    <MainLayout pageName={getPageName()}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
