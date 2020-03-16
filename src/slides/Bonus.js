import React, { PureComponent } from 'react';
import styled from 'styled-components';

import doge from '../assets/images/banana-doge.png';
import wordArt from '../assets/images/bonus-wordart.png';

const CustomContainer = styled.div`
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background-image: url("../assets/images/banana-doge.png");
`;

const DogeBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  opacity: .7;
`;


class Bonus extends PureComponent {
  render() {
    return (
      <>
        <DogeBackground src={doge} alt="Doge background"/>
        <CustomContainer>
          <img src={wordArt} className='example-image' alt="Bonus"/>
        </CustomContainer>
      </>
    );
  }
}

export default Bonus;
