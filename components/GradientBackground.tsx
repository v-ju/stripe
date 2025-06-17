// components/GradientBackground.tsx
"use client";

import { useEffect } from "react";

export default function GradientBackground() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/gh/greentfrapp/pocoloco@minigl/minigl.js";
    script.onload = () => {
      // @ts-ignore
      const gradient = new Gradient();
      gradient.initGradient(".canvas");
    };
    document.body.appendChild(script);
  }, []);

  return (
    
      <canvas className="canvas" />
    
  );
}
