import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { Container } from '../components/styled';
import wordArt from '../assets/images/examples-wordart.png';

const CustomContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

class Interlude extends PureComponent {
  render() {
    return (
      <CustomContainer>
        <img src={wordArt} className='example-image' alt="Examples"/>
      </CustomContainer>
    );
  }
}

export default Interlude;
