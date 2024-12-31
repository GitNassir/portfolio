import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const AnimationLottie = ({ animationPath }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationPath,
      });
    }
  }, [animationPath]);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
};

export default AnimationLottie;
