import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { Container, Title } from '../components/styled';

import logo from '../assets/images/logo.svg';

const LogoImage = styled.img`
  height: 400px;
  align-self: center;
`;

const List = styled.ul`
  margin-top: 20%;
`;

const ListItem = styled.li`
  margin-bottom: 64px;
  font-size: calc(20px + 2vmin);
`;

class CoreConcepts extends PureComponent {
  render() {
    return (
      <Container>
        <LogoImage src={logo} alt="logo"/>
        <div>
          <Title>
            Core Concepts
          </Title>
          <List>
            <ListItem>Component based</ListItem>
            <ListItem>Declarative</ListItem>
            <ListItem>Developed by Facebook and community</ListItem>
          </List>
        </div>
      </Container>
    );
  }
}

export default CoreConcepts;
