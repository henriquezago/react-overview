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

const formsCodeSnippet = `class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}`;

class Forms extends PureComponent {
  render() {
    return (
      <CustomContainer>
        <Title>
          Forms
        </Title>
        <Highlight language='javascript'>
          {formsCodeSnippet}
        </Highlight>
      </CustomContainer>
    );
  }
}

export default Forms;
