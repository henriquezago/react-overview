import React, { PureComponent } from 'react';
import Highlight from 'react-highlight.js';
import styled from 'styled-components';

import { Container, Title } from '../components/styled';

const CustomContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
  background-color: #282c34;
  color: #fff;
`;

const codeSnippet = `function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}`;

class ConditionalRendering extends PureComponent {
  render() {
    return (
      <CustomContainer>
        <Title>
          Conditional Rendering
        </Title>
        <Highlight language='javascript'>
          {codeSnippet}
        </Highlight>
      </CustomContainer>
    );
  }
}

export default ConditionalRendering;
