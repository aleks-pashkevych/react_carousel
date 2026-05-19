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
  // animationDuration = 1000,
  // infinite = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="Carousel">
      <ul
        className="Carousel__list"
        style={{
          display: 'flex',
          gap: '10px',
          margin: '0 auto',
          overflow: 'hidden',
          width: `${itemWidth * frameSize}px`,
        }}
      >
        {images.map((image, index) => {
          return (
            <li key={index} style={{ listStyle: 'none' }}>
              <img
                src={image}
                alt={`${currentIndex + 1}`}
                style={{
                  transform: `translateX(-${currentIndex * step * itemWidth}px)`,
                }}
              />
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        onClick={() => {
          if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
          }
        }}
      >
        Prev
      </button>
      <button type="button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
