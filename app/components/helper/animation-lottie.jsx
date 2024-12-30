"use client";

import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width = '95%' }) => {
  return (
    <Lottie
      animationData={animationPath}
      loop={true}
      autoplay={true}
      style={{
        width: width,
      }}
    />
  );
};

export default AnimationLottie;
