import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

import {  ButtonGroup } from './styles';

import { Container, Button, TextButton, InputGroup,Input } from '../../components/Styles';
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
          <Input keyboardType="name-phone-pad" secureTextEntry={true} maxLength={16} placeholder="Senha" />
        </InputGroup>
        <ButtonGroup>
          <Button>
            <TextButton>Cadastrar</TextButton>
          </Button>
        </ButtonGroup>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Cadastro;
