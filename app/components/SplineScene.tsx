"use client";

import Spline from '@splinetool/react-spline/next';

export default function SplineScene() {
  return (
    <div className="w-full h-screen fixed top-0 left-0 z-0">
      <Spline
        scene="https://prod.spline.design/7C4NRj46JpQ6qnEb/scene.splinecode" 
      />
    </div>
  );
} 