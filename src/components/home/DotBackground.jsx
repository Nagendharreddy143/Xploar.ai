import useDotBackground from "../../hooks/useDotBackground";

const DotBackground = () => {
  // The hook does all the heavy lifting.
  useDotBackground("dot-background");

  return <canvas id="dot-background"></canvas>;
};

export default DotBackground;
