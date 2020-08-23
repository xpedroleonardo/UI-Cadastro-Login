import React from 'react';

import { ButtonGroup } from './styles';

import BackgroundImage from '../../components/BackgroundImage';
import About from '../../components/About';

import { Container, InputGroup, Input, Button,TextButton  } from '../../components/Styles';

function Login() {

  return (
    <Container>
      <BackgroundImage />
      <About back={true} title="Login"/>
      <InputGroup>
        <Input keyboardType="email-address" placeholder="E-mail ou nome de usuário" />
        <Input keyboardType="name-phone-pad" secureTextEntry={true} maxLength={16} placeholder="Senha" />
      </InputGroup>
      <ButtonGroup>
        <Button>
          <TextButton>Logar</TextButton>
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default Login;
