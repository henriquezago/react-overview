import React, { PureComponent } from 'react';
import AwesomeSlider from 'react-awesome-slider/src/core';
import AwesomeFrame from 'react-awesome-slider/src/components/react-awesome-frame';

import {
  AboutMe,
  Bonus,
  ConditionalRendering,
  CoreConcepts,
  Events,
  Forms,
  Introduction,
  Jsx,
  LazyLoading,
  Lists,
  StyledComponents,
  TypeChecking,
  TypeCheckingPart2
} from './slides';

import 'react-awesome-slider/dist/styles.css';
import 'highlight.js/styles/default.css';

import './App.css';

class App extends PureComponent {
  render() {
    return (
      <AwesomeSlider className='slider-container'
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

        <AwesomeFrame>
          <Events/>
        </AwesomeFrame>

        <AwesomeFrame>
          <Forms/>
        </AwesomeFrame>

        <AwesomeFrame>
          <Lists/>
        </AwesomeFrame>

        <AwesomeFrame>
          <ConditionalRendering/>
        </AwesomeFrame>

        <AwesomeFrame>
          <LazyLoading/>
        </AwesomeFrame>

        <AwesomeFrame>
          <Bonus/>
        </AwesomeFrame>

        <AwesomeFrame>
          <StyledComponents/>
        </AwesomeFrame>

        <AwesomeFrame>
          <TypeChecking/>
        </AwesomeFrame>

        <AwesomeFrame>
          <TypeCheckingPart2/>
        </AwesomeFrame>

        <AwesomeFrame>
          <AboutMe/>
        </AwesomeFrame>
      </AwesomeSlider>
    );
  }
}

export default App;
