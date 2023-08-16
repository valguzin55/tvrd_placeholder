"use client";

import { useEffect, useState } from "react";
import Webcam from "react-webcam";
function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  } else {
    return {
      width: 0,
      height: 0,
    };
  }
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default function WebcamImpl() {
  const { height, width } = useWindowDimensions();

  return (
    <Webcam
      //   height={width}
      videoConstraints={{
        width: width,
        height: height,
      }}
      screenshotFormat="image/jpeg"
      //   width={height}
      className="w-full h-full flex absolute top-0"
    />
  );
}
