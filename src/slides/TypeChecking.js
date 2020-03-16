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

const codeSnippet = 'import PropTypes from \'prop-types\';\n' +
  '\n' +
  'class Greeting extends React.Component {\n' +
  '  render() {\n' +
  '    return (\n' +
  '      <h1>Hello, {this.props.name}</h1>\n' +
  '    );\n' +
  '  }\n' +
  '}\n' +
  '\n' +
  'Greeting.propTypes = {\n' +
  '  name: PropTypes.string\n' +
  '};';

class TypeChecking extends PureComponent {
  render() {
    return (
      <CustomContainer>
        <Title>
          Typechecking With PropTypes
        </Title>
        <Highlight language='javascript'>
          {codeSnippet}
        </Highlight>
      </CustomContainer>
    );
  }
}

export default TypeChecking;
