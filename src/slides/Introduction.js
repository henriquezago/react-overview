import React, { PureComponent } from 'react';
import styled from 'styled-components';

import logo from '../assets/images/logo.svg';
import { Container, Title } from '../components/styled';

const CustomContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
  background-color: #61dafb;
  color: #fff;
`;

const AppHeader = styled.header`
  height: 40vmin;
  width: 40vmin;
  padding: 24px;
  border-radius: 389px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

const Paragraph = styled.p`
  font-size: calc(16px + 2vmin);
  font-weight: lighter;
`;

class Introduction extends PureComponent {
  render() {
    return (
      <CustomContainer>
        <AppHeader>
          <img src={logo} className="App-logo" alt="logo"/>
        </AppHeader>
        <Title>
          ReactJS
        </Title>
        <Paragraph>
          A JavaScript library for building user interfaces
        </Paragraph>
      </CustomContainer>
    );
  }
}

export default Introduction;
