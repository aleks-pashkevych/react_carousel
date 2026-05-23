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
  itemWidth = +130,
  frameSize = 3,
  step = 3,
  animationDuration = 1000,
  infinite = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + step < images.length) {
      setCurrentIndex(currentIndex + step);
    } else if (infinite === true) {
      setCurrentIndex(0);

      return;
    }

    return;
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - step);
    } else if (infinite === true) {
      setCurrentIndex(images.length - frameSize);
    }
  };

  return (
    <div
      className="Carousel"
      style={{
        width: `${itemWidth * frameSize}px`,
      }}
    >
      <ul
        className="Carousel__list"
        style={{
          display: 'flex',
          overflow: 'hidden',
          width: `${itemWidth * frameSize}px`,
          padding: 0,
          transform: `translateX(-${currentIndex * itemWidth}px)`,
          transition: `transform ${animationDuration}ms`,
        }}
      >
        {images.map((image, index) => {
          return (
            <li
              key={index + 1}
              style={{ width: `${itemWidth}`, listStyle: 'none' }}
            >
              <img
                src={image}
                alt="image"
                data-cy="carousel-img"
                style={{ width: `${itemWidth}px` }}
              />
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        data-cy="prev"
        disabled={!infinite && currentIndex - step < 0}
        onClick={() => {
          handlePrev();
        }}
      >
        Prev
      </button>
      <button
        type="button"
        data-cy="next"
        disabled={!infinite && currentIndex + step > images.length - frameSize}
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
