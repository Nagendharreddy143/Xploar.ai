import { useEffect, useState, useRef } from "react";

// A custom hook to observe when an element is visible on screen
const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0 } // Triggers as soon as a single pixel is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isIntersecting;
};

const useTimelineAnimation = (threadRef, sectionRef) => {
  const isVisible = useOnScreen(sectionRef); // Check if the section is on screen

  useEffect(() => {
    const threadElement = threadRef.current;
    const sectionElement = sectionRef.current;

    if (!isVisible || !threadElement || !sectionElement) {
      return; // Do nothing if the section is not visible or elements are missing
    }

    const handleScroll = () => {
      // getBoundingClientRect is more reliable as it's relative to the viewport
      const { top, height } = sectionElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate how far the top of the section is from the top of the viewport
      // A negative 'top' means the top of the section has passed the top of the viewport
      const scrollDistance = -top;

      // We want the animation to happen across the full height of the section
      // 'height - viewportHeight' is the total scroll distance while the section is filling the screen
      const totalScrollableHeight = height - viewportHeight;

      if (scrollDistance < 0) {
        // If we are above the section, progress is 0
        threadElement.style.height = "0%";
        return;
      }

      if (scrollDistance > totalScrollableHeight) {
        // If we have scrolled past the section, progress is 100
        threadElement.style.height = "100%";
        return;
      }

      // Calculate the progress as a percentage
      const progress = (scrollDistance / totalScrollableHeight) * 100;

      // Apply the height, ensuring it doesn't go above 100%
      threadElement.style.height = `${Math.min(100, progress)}%`;
    };

    // Add the scroll listener ONLY when the section is visible
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Run once to set the initial state
    handleScroll();

    // The cleanup function removes the listener when the section is no longer visible
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible, threadRef, sectionRef]); // Re-run this effect when visibility changes
};

export default useTimelineAnimation;
