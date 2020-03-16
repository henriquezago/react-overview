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

const listsCodeSnippet = `function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);`;

class Lists extends PureComponent {
  render() {
    return (
      <CustomContainer>
        <Title>
          Lists
        </Title>
        <Highlight language='javascript'>
          {listsCodeSnippet}
        </Highlight>
      </CustomContainer>
    );
  }
}

export default Lists;
