import React, { useState } from "react";

function Slides({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === slides.length - 1;

  const handleNext = () => {
    if (isLastSlide) return;
    setCurrentSlide((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (isFirstSlide) return;
    setCurrentSlide((prev) => prev - 1);
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={() => setCurrentSlide(0)}
          disabled={isFirstSlide}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          onClick={handlePrevious}
          disabled={isFirstSlide}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          onClick={handleNext}
          disabled={isLastSlide}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[currentSlide].title}</h1>
        <p data-testid="text">{slides[currentSlide].text}</p>
      </div>
    </div>
  );
}

export default Slides;
