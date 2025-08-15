import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const useAos = (options) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      // This is the key change. Setting it to false makes animations trigger
      // every time you scroll into view, not just the first time.
      once: false,
      offset: 120,
      ...options,
    });
    // Add a refresh call to handle any dynamic content changes
    AOS.refresh();
  }, [options]);
};

export default useAos;
