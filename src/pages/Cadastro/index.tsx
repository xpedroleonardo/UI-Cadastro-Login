import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

import { Container, InputGroup, ActionButton, Input, Button, TextButton } from './styles';

import BackgroundImage from '../../components/BackgroundImage';
import About from '../../components/About';

function Cadastro() {

  return (
      <Container>
        <KeyboardAvoidingView>
        <BackgroundImage />
        <About back={true} title="Cadastro" />
        <InputGroup>
          <Input keyboardType="name-phone-pad" placeholder="Nome de usuário" />
          <Input keyboardType="email-address" placeholder="Email" />
          <Input keyboardType="number-pad" placeholder="Senha" />
        </InputGroup>
        <ActionButton>
          <Button>
            <TextButton>Cadastrar</TextButton>
          </Button>
        </ActionButton>
        </KeyboardAvoidingView>
      </Container>
  );
};

export default Cadastro;
