import React, { PureComponent } from 'react';
import Highlight from 'react-highlight.js';

import { Container, Title } from '../components/styled';
import styled from 'styled-components';

const CustomContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
  background: linear-gradient(20deg, rgb(219, 112, 147), rgb(218, 163, 87));
  color: #fff;
`;

const codeSnippet = 'const Button = styled.a`\n' +
  '  display: inline-block;\n' +
  '  border-radius: 3px;\n' +
  '  padding: 0.5rem 0;\n' +
  '  margin: 0.5rem 1rem;\n' +
  '  width: 11rem;\n' +
  '  background: transparent;\n' +
  '  color: white;\n' +
  '  border: 2px solid white;\n' +
  '  ${props => props.primary && css`\n' +
  '    background: white;\n' +
  '    color: palevioletred;\n' +
  '  `}\n' +
  '`\n' +
  'render(\n' +
  '  <div>\n' +
  '    <Button\n' +
  '      href="https://github.com/styled-components/styled-components"\n' +
  '      target="_blank"\n' +
  '      rel="noopener"\n' +
  '      primary\n' +
  '    >\n' +
  '      GitHub\n' +
  '    </Button>\n' +
  '    <Button as={Link} href="/docs">\n' +
  '      Documentation\n' +
  '    </Button>\n' +
  '  </div>\n' +
  ')';

class StyledComponents extends PureComponent {
  render() {
    return (
      <CustomContainer>
        <Title>
          styled-components
        </Title>
        <Highlight language='javascript'>
          {codeSnippet}
        </Highlight>
      </CustomContainer>
    );
  }
}

export default StyledComponents;
