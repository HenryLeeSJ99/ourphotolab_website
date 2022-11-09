import "../slideshow/slider.css";
import React, { useState, useEffect, useRef } from "react";

export default function Slideshow() {
  const imgs = [
    "./images/DSC00915.jpg",
    "./images/DSC01004.jpg",
    "./images/DSC07621.jpg",
    "./images/DSC07667.jpg",
    "./images/DSC09214.jpg",
  ];
  const delay = 5000;

  
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === imgs.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {imgs.map((backgroundColor, index) => (
          <div className="slide" key={index}>
            <img className="img" src={imgs[index]}></img>
          </div>

        ))}
      </div>
      <div className="slideshowDots">
        {imgs.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
