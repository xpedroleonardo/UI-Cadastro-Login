import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Buttons } from './styles';

import About from '../../components/About';
import BackgroundImage from '../../components/BackgroundImage';

import { Container, Button, TextButton } from '../../components/Styles';

function Inicial() {

  const { navigate } = useNavigation();


  function handleNavigationToCadastroPage() {
    navigate('Cadastro');
  }

  function handleNavigationToLoginPage() {
    navigate('Login');
  }


  return (
    <Container>
        <BackgroundImage />

        <About
          span="Bem Vindo ao"
          title="Dirbbox"
          description={`Melhor plataforma de armazenamento em nuvem para todas as empresas e indivíduos gerenciarem seus dados\n\nFaça parte, é de graça.`}
        />

        <Buttons>
          <Button onPress={handleNavigationToCadastroPage} >
            <TextButton >Cadastar</TextButton>
          </Button>
          <Button onPress={handleNavigationToLoginPage} >
            <TextButton >Login</TextButton>
          </Button>
        </Buttons>
    </Container>
  );
};

export default Inicial;
