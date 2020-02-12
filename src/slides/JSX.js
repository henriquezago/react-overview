import React, { PureComponent } from 'react';
import Highlight from 'react-highlight.js';

import { Container, Title } from '../components/styled';
import styled from 'styled-components';

const CustomContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
  background-color: #61dafb;
  color: #fff;
`;

const SnippetsContainer = styled.div`
  display: flex;
  justify-content: center;
  
  > *:first-child {
    margin-right: 64px;
  }
`;

const jsxCodeSnippet = `
class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('hello-example')
);`;

const nonJsxSnippet = `
class HelloMessage extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      "Hello ",
      this.props.name
    );
  }
}

ReactDOM.render(
  React.createElement(HelloMessage, { name: "Taylor" }),
  document.getElementById('hello-example')
);`;

class Jsx extends PureComponent {
  render() {
    return (
      <CustomContainer>
        <Title>
          JSX
        </Title>
        <SnippetsContainer>
          <Highlight language='javascript'>
            {nonJsxSnippet}
          </Highlight>

          <Highlight language='javascript'>
            {jsxCodeSnippet}
          </Highlight>
        </SnippetsContainer>
      </CustomContainer>
    );
  }
}

export default Jsx;
