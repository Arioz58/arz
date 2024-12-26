"use client";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

function locationToAngles(lat, lon) {
  return {
    phi: (lon * Math.PI) / 180,
    theta: (lat * Math.PI) / 180,
  };
}

export function CobeDragToLocation() {
  const canvasRef = useRef();
  const focusRef = useRef(locationToAngles(40, 0)); // Strasbourg coordinates

  useEffect(() => {
    let phi = 0;
    let width = 0;
    let brightness = 1;
    let direction = 0.01;
    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener("resize", onResize);
    onResize();
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: focusRef.current.phi,
      theta: focusRef.current.theta,
      dark: 1,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor: [0, 1, 2], // Initial blue color for the marker
      glowColor: [1.2, 1.2, 1.2],
      markers: [{ location: [48.5734, 7.7521], size: 0.1 }], // Strasbourg marker with increased size
      onRender: (state) => {
        state.phi = phi;
        phi += 0.005;
        state.width = width * 2;
        state.height = width * 2;

        // Update marker color for shining effect
        brightness += direction;
        if (brightness <= 1 || brightness >= 1.5) {
          direction *= -1;
        }
        state.markerColor = [0, 0, brightness, 1];
      },
    });
    setTimeout(() => (canvasRef.current.style.opacity = "1"));
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
  className="globe"
  style={{
    width: "130%",
    maxWidth: 600,
    aspectRatio: 1,
    margin: "auto",
    position: "absolute",
    overflow: "hidden",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, 0%)",
  }}
>
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          contain: "layout paint size",
          opacity: 0,
          transition: "opacity 1s ease",
        }}
      />
    </div>
  );
}