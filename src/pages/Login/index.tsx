import React from 'react';

import { Container } from './styles';

import BackgroundImage from '../../components/BackgroundImage';
import About from '../../components/About';

function Login() {

  return (
    <Container>
      <BackgroundImage />
      <About back={true} title="Login"/>
    </Container>
  );
};

export default Login;
