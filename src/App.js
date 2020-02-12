import React, { PureComponent } from 'react';
import AwesomeSlider from 'react-awesome-slider/src/core';
import AwesomeFrame from 'react-awesome-slider/src/components/react-awesome-frame';

import Introduction from './slides/Introduction';
import CoreConcepts from './slides/CoreConcepts';
import Jsx from './slides/JSX';

import 'react-awesome-slider/dist/styles.css';
import 'highlight.js/styles/default.css';

import './App.css';

class App extends PureComponent {
  render() {
    return (
      <AwesomeSlider className='slider-container'
                     bullets={false}
                     infinite={false}>
        <AwesomeFrame>
          <Introduction/>
        </AwesomeFrame>

        <AwesomeFrame>
          <CoreConcepts/>
        </AwesomeFrame>

        <AwesomeFrame>
          <Jsx/>
        </AwesomeFrame>
      </AwesomeSlider>
    );
  }
}

export default App;
