import { useState } from "react";
import "../styles/slideshow.scss";

export default function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slideshow">
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image" />

      {pictures.length > 1 && (
        <>
          <button className="nav left" onClick={prev}>‹</button>
          <button className="nav right" onClick={next}>›</button>
          <span className="counter">{currentIndex + 1}/{pictures.length}</span>
        </>
      )}
    </div>
  );
}