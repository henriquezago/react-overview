import React, { PureComponent } from 'react';
import Highlight from 'react-highlight.js';

import { Container, Title } from '../components/styled';
import styled from 'styled-components';

const CustomContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
  background-color: #282c34;
  color: #fff;
`;

const codeSnippet = `<button onClick={activateLasers}>
  Activate Lasers
</button>`;

class Events extends PureComponent {
  render() {
    return (
      <CustomContainer>
        <Title>
          Events
        </Title>
        <Highlight language='html'>
          {codeSnippet}
        </Highlight>
      </CustomContainer>
    );
  }
}

export default Events;
