import React, { PureComponent } from 'react';
import styled from 'styled-components';

import julie from '../assets/images/julie.jpg';
import henrique from '../assets/images/me.jpg';
import { Container, Title } from '../components/styled';

const CustomContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
  background-color: #61dafb;
  color: #fff;
`;

const Paragraph = styled.p`
  font-size: calc(16px + 2vmin);
  font-weight: lighter;
`;

const ProfileContainer = styled.div`
  height: 300px;
  width: 300px;
  padding: 24px;
  border-radius: 100%;
  overflow: hidden;
  background-color: #fff;
  
  img {
    width: 120%;
    height: 120%;
    margin-left: -10%;
    margin-top: -10%;
  }
`;

class AboutMe extends PureComponent {
  render() {
    return (
      <CustomContainer>
        <img src={julie} className='bouncing-box' aria-hidden={true} alt=''/>
        <ProfileContainer>
          <img src={henrique} aria-hidden={true} alt=''/>
        </ProfileContainer>
        <Title>
          Thanks!
        </Title>
        <Paragraph>
          Questions?
        </Paragraph>
      </CustomContainer>
    );
  }
}

export default AboutMe;
