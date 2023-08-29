import React, { useEffect, useState } from "react";
import './Helloworld.css';

export default function HelloWorld() {
  const valuesArray = ['world !', 'users !', 'friends !', 'everybody !'];
  const [valueIndex, setValueIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(false); // Set fade-in effect to false initially

    const interval = setInterval(() => {
      setValueIndex((prevIndex) => (prevIndex + 1) % valuesArray.length);
      setFadeIn(true); // Trigger fade-in effect
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="content">
      <div className="content__container">
        <span>[</span>
        <span className="content__container__text">Hello</span>
        <span> </span>
        <div className="content__container__item-container">
          <span
            className={`content__container__item ${fadeIn ? "fade-in" : ""}`}
          >
            {valuesArray[valueIndex]}
          </span>
        </div>
        <span>]</span>
      </div>
    </div>
  );
}
