import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, BackgroundImage, Logo, About, SpanTitle, Title, Description, Buttons, Button, TextButton } from './styles';

import backgroundImg from '../../assets/images/Clouds.png';
import logoImg from '../../assets/images/logo.png';

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
      <BackgroundImage source={backgroundImg} >
        <Logo source={logoImg} resizeMode="contain" />
        <About>
          <SpanTitle>Bem-Vindo ao</SpanTitle>
          <Title>Dirbbox</Title>
          <Description>
            Melhor plataforma de armazenamento em nuvem para todas as empresas e indivíduos gerenciarem seus dados
            {'\n\n'}
            Faça parte, é de graça.
            </Description>
        </About>

        <Buttons>
          <Button onPress={handleNavigationToCadastroPage} >
            <TextButton >Cadastar</TextButton>
          </Button>
          <Button onPress={handleNavigationToLoginPage} >
            <TextButton >Login</TextButton>
          </Button>
        </Buttons>

      </BackgroundImage>
    </Container>
  );
};

export default Inicial;
