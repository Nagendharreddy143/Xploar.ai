import { useEffect, useRef as useReactRef } from "react";

const useScrollAnimation = (threadRef, sectionRef) => {
  // Use a ref to prevent re-triggering animation frames unnecessarily
  const animationFrame = useReactRef(null);

  useEffect(() => {
    const threadElement = threadRef.current;
    const sectionElement = sectionRef.current;

    // Exit early if the elements aren't rendered yet
    if (!threadElement || !sectionElement) {
      return;
    }

    const animateTimelineOnScroll = () => {
      // Get the exact dimensions and positions, same as your original script
      const sectionTop = sectionElement.offsetTop;
      const sectionHeight = sectionElement.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // This is the IDENTICAL calculation from your index.html <script> tag
      const startPoint = sectionTop - viewportHeight / 1.5;
      const endPoint = sectionTop + sectionHeight - viewportHeight / 1.5;

      let progress = 0;
      if (scrollY > startPoint && scrollY < endPoint) {
        progress = (scrollY - startPoint) / (endPoint - startPoint);
      } else if (scrollY >= endPoint) {
        progress = 1;
      }

      // Clamp progress between 0 and 1 to prevent visual bugs
      const clampedProgress = Math.max(0, Math.min(1, progress));

      // Apply the height style to the timeline thread
      threadElement.style.height = `${clampedProgress * 100}%`;
    };

    const handleScroll = () => {
      // Cancel any previous animation frame to avoid performance issues
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      // Request a new animation frame for a smooth update
      animationFrame.current = requestAnimationFrame(animateTimelineOnScroll);
    };

    // Run the animation once on load to set the correct initial state
    handleScroll();

    // Add event listeners for scroll and resize
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    // This is the cleanup function. It runs when the component is removed.
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [threadRef, sectionRef]); // The hook depends on the refs being available
};

export default useScrollAnimation;
