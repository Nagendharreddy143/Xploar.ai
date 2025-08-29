import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import NotFound from "./pages/NotFound";
import RedirectHome from "./components/common/RedirectHome";

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
    <>
      <RedirectHome />
      <Routes>
      {/* Main pages with layout */}
      <Route path="/" element={
        <MainLayout pageName={getPageName()}>
          <HomePage />
        </MainLayout>
      } />
      <Route path="/about" element={
        <MainLayout pageName={getPageName()}>
          <AboutPage />
        </MainLayout>
      } />
      <Route path="/contact" element={
        <MainLayout pageName={getPageName()}>
          <ContactPage />
        </MainLayout>
      } />
      <Route path="/privacy-policy" element={
        <MainLayout pageName={getPageName()}>
          <PrivacyPolicy />
        </MainLayout>
      } />
      <Route path="/terms-conditions" element={
        <MainLayout pageName={getPageName()}>
          <TermsConditions />
        </MainLayout>
      } />

      {/* 404 page without layout (standalone) */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
