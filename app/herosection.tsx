"use client";
import data from "./_data/index.json";
import {BackgroundBeams} from "./_components/ui/background-beams";
import React, { useEffect, useState, useRef} from "react";

export default function HeroSection() {

  const [index, setIndex] = useState(0);
  const values = data?.titles || [];
  const gradients = data?.gradients || [];
  const [gradientIndex, setGradientIndex] = useState(0);

  let spanRef= useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const change = () => {
      setIndex((currentIndex) => (currentIndex + 1) % values.length);
      setGradientIndex((currentGradientIndex) => (currentGradientIndex + 1) % gradients.length);
    };
    const triggerAnimation = () => {
      if (spanRef.current) {
        spanRef.current.classList.remove("hero--section--animation");
        void spanRef.current.offsetWidth;
        spanRef.current.classList.add("hero--section--animation");
      }
    };

    let intervalId: NodeJS.Timeout | undefined;
    const timeoutId = setTimeout(() => {
      change();
      triggerAnimation();
      intervalId = setInterval(() => {
        change();
        triggerAnimation();
      }, 4000);
    }, 1500); // Adjusted to 1.5 seconds for the initial delay

    // Cleanup function for the useEffect
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId); // Clear the timeout if the component unmounts or dependencies change
    };
  }, [values.length, gradients.length]);


  return (
    <section id="Home" className="hero--section">
      <div className="hero--section--content">
        <div className="hero--section--row fadeIn">
          <span className="section--title">Hi,</span>
          <span className="section--title">my</span>
          <span className="section--title">name</span>
          <span className="section--title">is</span>
          <span className="section--title">Aiden</span>
        </div>
        <div className="hero--section--row secondFadeIn">
          <span className="section--title">I&apos;m</span>
          <span className="section--title">a</span>
        </div>
      </div>
      <h1 className="hero--section--title">
          <span ref={spanRef} className="hero--section--title--color spec" style={{backgroundImage: gradients[gradientIndex]}}>{values[index]}</span>
      </h1>
      <BackgroundBeams/>
    </section>
  );
}
