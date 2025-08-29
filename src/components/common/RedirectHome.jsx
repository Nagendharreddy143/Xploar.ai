import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RedirectHome = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Only redirect if we're at the root path and it's a page refresh
    if (location.pathname === '/' && window.performance) {
      // Get the navigation entry
      const navEntry = performance.getEntriesByType('navigation')[0];
      // Check if it's a reload
      if (navEntry && navEntry.type === 'reload') {
        // Scroll to top
        window.scrollTo(0, 0);
      }
    }
    // If we're at an undefined route, redirect to home
    if (location.pathname !== '/' && 
        !['/about', '/contact', '/privacy', '/terms'].includes(location.pathname)) {
      navigate('/');
      window.scrollTo(0, 0);
    }
  }, [location, navigate]);

  return null;
};

export default RedirectHome;
