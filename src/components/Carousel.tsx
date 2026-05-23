import React, { useState } from 'react';
import './Carousel.scss';

type Props = {
  images: string[];
  itemWidth?: number;
  frameSize?: number;
  step?: number;
  animationDuration?: number;
  infinite?: boolean;
};

const Carousel: React.FC<Props> = ({
  images,
  itemWidth = 130,
  frameSize = 3,
  step = 3,
  animationDuration = 1000,
  infinite = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    if (currentIndex <= images.length - frameSize) {
      setCurrentIndex(currentIndex + step);
    } else if (infinite === true) {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - step);
    } else if (infinite === true) {
      setCurrentIndex(images.length - step);
    }
  };

  return (
    <div
      className="Carousel"
      style={{
        display: 'block',
        overflow: 'hidden',
        padding: '0 auto',
      }}
    >
      <ul
        className="Carousel__list"
        style={{
          display: 'flex',
          overflow: 'hidden',
          width: `${itemWidth * frameSize}px`,
          padding: 0,
          transform: `translateX(-${currentIndex * itemWidth * step}px)`,
          transition: `transform ${animationDuration}ms`,
        }}
      >
        {images.map((image, index) => {
          return (
            <li key={index} style={{ listStyle: 'none' }}>
              <img src={image} alt={`${currentIndex + step}`} />
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        data-cy="prev"
        onClick={() => {
          handlePrev();
        }}
      >
        Prev
      </button>
      <button
        type="button"
        data-cy="next"
        onClick={() => {
          handleNext();
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
