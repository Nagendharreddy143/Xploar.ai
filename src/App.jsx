import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

// Lazy load UPSC components for better performance
const XploarPhase1 = lazy(() => import("./components/upsc/XploarPhase1"));
const XploarPhase2 = lazy(() => import("./components/upsc/XploarPhase2"));

// Loading component for UPSC routes
const UPSCLoading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
      <p className="mt-4 text-lg text-gray-600">Loading UPSC Preparation App...</p>
    </div>
  </div>
);

function App() {
  const location = useLocation();
  const getPageName = () => {
    switch (location.pathname) {
      case "/about":
        return "about";
      case "/contact":
        return "contact";
      case "/upsc":
        return "upsc";
      case "/upsc2":
        return "upsc2";
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
        <Route 
          path="/upsc" 
          element={
            <Suspense fallback={<UPSCLoading />}>
              <XploarPhase1 />
            </Suspense>
          } 
        />
        <Route 
          path="/upsc2" 
          element={
            <Suspense fallback={<UPSCLoading />}>
              <XploarPhase2 />
            </Suspense>
          } 
        />
      </Routes>
    </MainLayout>
  );
}

export default App;
