"use client";

import { useEffect, useState } from "react";
import Webcam from "react-webcam";
// function getWindowDimensions() {
//   if (typeof window !== "undefined") {
//     const { innerWidth: width, innerHeight: height } = window;
//     return {
//       width,
//       height,
//     };
//   } else {
//     return {
//       width: 1280,
//       height: 720,
//     };
//   }
// }

// function useWindowDimensions() {
//   const [windowDimensions, setWindowDimensions] = useState(
//     getWindowDimensions()
//   );

//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions(getWindowDimensions());
//     }

//     window.addEventListener("resize", () => setTimeout(handleResize, 10));
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return windowDimensions;
}

export default function WebcamImpl() {
  // const { height, width } = useWindowDimensions();

  return (
    // <div className="relative flex w-screen h-screen">
    <Webcam
      //   height={width}

      videoConstraints={{
        // width: width,
        // height: height,
        facingMode: "user",
      }}
      screenshotFormat="image/jpeg"
      style={{
        position: "absolute",
        textAlign: "center",
        overflow: "hidden",
        right: 0,
        height: "100vh",
        // width: "100%",
        objectFit: "fill",
      }}
      //   width={height}
      // className="w-screen flex absolute h-screen"
    />
    // </div>
  );
}
