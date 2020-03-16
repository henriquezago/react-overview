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

const codeSnippet = 'import React, { Suspense } from \'react\';\n' +
  '\n' +
  'const OtherComponent = React.lazy(() => import(\'./OtherComponent\'));\n' +
  '\n' +
  'function MyComponent() {\n' +
  '  return (\n' +
  '    <div>\n' +
  '      <Suspense fallback={<div>Loading...</div>}>\n' +
  '        <OtherComponent />\n' +
  '      </Suspense>\n' +
  '    </div>\n' +
  '  );\n' +
  '}';

class LazyLoading extends PureComponent {
  render() {
    return (
      <CustomContainer>
        <Title>
          Lazy Loading
        </Title>
        <Highlight language='javascript'>
          {codeSnippet}
        </Highlight>
      </CustomContainer>
    );
  }
}

export default LazyLoading;
