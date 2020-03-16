import React, { PureComponent } from 'react';
import Highlight from 'react-highlight.js';

import { Container, Title } from '../components/styled';
import styled from 'styled-components';

const CustomContainer = styled(Container)`
  flex-direction: column;
  justify-content: flex-start;
  padding: 32px;
  align-items: center;
  background-color: #282c34;
  color: #fff;
`;

const CodeContainer = styled.div`
  overflow-y: scroll;
  margin-bottom: 90px;
`;

const codeSnippet = 'import PropTypes from \'prop-types\';\n' +
  '\n' +
  'MyComponent.propTypes = {\n' +
  '  // You can declare that a prop is a specific JS type. By default, these\n' +
  '  // are all optional.\n' +
  '  optionalArray: PropTypes.array,\n' +
  '  optionalBool: PropTypes.bool,\n' +
  '  optionalFunc: PropTypes.func,\n' +
  '  optionalNumber: PropTypes.number,\n' +
  '  optionalObject: PropTypes.object,\n' +
  '  optionalString: PropTypes.string,\n' +
  '  optionalSymbol: PropTypes.symbol,\n' +
  '\n' +
  '  // Anything that can be rendered: numbers, strings, elements or an array\n' +
  '  // (or fragment) containing these types.\n' +
  '  optionalNode: PropTypes.node,\n' +
  '\n' +
  '  // A React element.\n' +
  '  optionalElement: PropTypes.element,\n' +
  '\n' +
  '  // A React element type (ie. MyComponent).\n' +
  '  optionalElementType: PropTypes.elementType,\n' +
  '  \n' +
  '  // You can also declare that a prop is an instance of a class. This uses\n' +
  '  // JS\'s instanceof operator.\n' +
  '  optionalMessage: PropTypes.instanceOf(Message),\n' +
  '\n' +
  '  // You can ensure that your prop is limited to specific values by treating\n' +
  '  // it as an enum.\n' +
  '  optionalEnum: PropTypes.oneOf([\'News\', \'Photos\']),\n' +
  '\n' +
  '  // An object that could be one of many types\n' +
  '  optionalUnion: PropTypes.oneOfType([\n' +
  '    PropTypes.string,\n' +
  '    PropTypes.number,\n' +
  '    PropTypes.instanceOf(Message)\n' +
  '  ]),\n' +
  '\n' +
  '  // An array of a certain type\n' +
  '  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),\n' +
  '\n' +
  '  // An object with property values of a certain type\n' +
  '  optionalObjectOf: PropTypes.objectOf(PropTypes.number),\n' +
  '\n' +
  '  // An object taking on a particular shape\n' +
  '  optionalObjectWithShape: PropTypes.shape({\n' +
  '    color: PropTypes.string,\n' +
  '    fontSize: PropTypes.number\n' +
  '  }),\n' +
  '  \n' +
  '  // An object with warnings on extra properties\n' +
  '  optionalObjectWithStrictShape: PropTypes.exact({\n' +
  '    name: PropTypes.string,\n' +
  '    quantity: PropTypes.number\n' +
  '  }),   \n' +
  '\n' +
  '  // You can chain any of the above with `isRequired` to make sure a warning\n' +
  '  // is shown if the prop isn\'t provided.\n' +
  '  requiredFunc: PropTypes.func.isRequired,\n' +
  '\n' +
  '  // A value of any data type\n' +
  '  requiredAny: PropTypes.any.isRequired,\n' +
  '\n' +
  '  // You can also specify a custom validator. It should return an Error\n' +
  '  // object if the validation fails. Don\'t `console.warn` or throw, as this\n' +
  '  // won\'t work inside `oneOfType`.\n' +
  '  customProp: function(props, propName, componentName) {\n' +
  '    if (!/matchme/.test(props[propName])) {\n' +
  '      return new Error(\n' +
  '        \'Invalid prop `\' + propName + \'` supplied to\' +\n' +
  '        \' `\' + componentName + \'`. Validation failed.\'\n' +
  '      );\n' +
  '    }\n' +
  '  },\n' +
  '\n' +
  '  // You can also supply a custom validator to `arrayOf` and `objectOf`.\n' +
  '  // It should return an Error object if the validation fails. The validator\n' +
  '  // will be called for each key in the array or object. The first two\n' +
  '  // arguments of the validator are the array or object itself, and the\n' +
  '  // current item\'s key.\n' +
  '  customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {\n' +
  '    if (!/matchme/.test(propValue[key])) {\n' +
  '      return new Error(\n' +
  '        \'Invalid prop `\' + propFullName + \'` supplied to\' +\n' +
  '        \' `\' + componentName + \'`. Validation failed.\'\n' +
  '      );\n' +
  '    }\n' +
  '  })\n' +
  '};';

class TypeCheckingPart2 extends PureComponent {
  render() {
    return (
      <CustomContainer>
        <Title>
          Typechecking With PropTypes
        </Title>
        <CodeContainer>
          <Highlight language='javascript'>
            {codeSnippet}
          </Highlight>
        </CodeContainer>
      </CustomContainer>
    );
  }
}

export default TypeCheckingPart2;
