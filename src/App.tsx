import React from 'react';
import './App.scss';
import Carousel from './components/Carousel';

interface State {
  images: string[];
  itemWidth: number;
  frameSize: number;
  step: number;
  animationDuration: number;
  infinite: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    images: [
      './img/1.png',
      './img/2.png',
      './img/3.png',
      './img/4.png',
      './img/5.png',
      './img/6.png',
      './img/7.png',
      './img/8.png',
      './img/9.png',
      './img/10.png',
    ],
    itemWidth: 130,
    frameSize: 3,
    step: 3,
    animationDuration: 1000,
    infinite: false,
  };

  render() {
    const { images, itemWidth, frameSize, step, animationDuration, infinite } =
      this.state;

    return (
      <div className="App">
        {/* eslint-disable-next-line */}
        <h1 data-cy="title">Carousel with {images.length} images</h1>
        <div className="inputs">
          <label htmlFor="itemWidthId">
            itemWidth:
            <input
              type="number"
              id="itemWidthId"
              value={itemWidth}
              onChange={e => this.setState({ itemWidth: +e.target.value })}
            />
          </label>
          <label htmlFor="frameSizeId">
            Frame Size:
            <input
              type="number"
              value={frameSize}
              id="frameSizeId"
              onChange={e => this.setState({ frameSize: +e.target.value })}
            />
          </label>
          <label htmlFor="stepId">
            Step:
            <input
              type="number"
              value={step}
              id="stepId"
              onChange={e => this.setState({ step: +e.target.value })}
            />
          </label>
          <label htmlFor="animationDurationId">
            Animation Duration:
            <input
              type="number"
              id="animationDurationId"
              value={animationDuration}
              onChange={e =>
                this.setState({ animationDuration: +e.target.value })
              }
            />
          </label>
          <label htmlFor="infiniteId">
            Infinite:
            <input
              type="checkbox"
              id="infiniteId"
              onChange={e => this.setState({ infinite: e.target.checked })}
            />
          </label>
        </div>

        <Carousel
          images={images}
          itemWidth={itemWidth}
          frameSize={frameSize}
          step={step}
          animationDuration={animationDuration}
          infinite={infinite}
        />
      </div>
    );
  }
}

export default App;
