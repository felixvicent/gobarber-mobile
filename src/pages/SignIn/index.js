import React from 'react';
import { Image } from 'react-native';

import Background from '~/components/Background';
// import Button from '~/components/Button';

import logo from '~/assets/logo.png';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

const SignIn = () => (
  <Background>
    <Container>
      <Image source={logo} />

      <Form>
        <FormInput
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
        />

        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Sua senha secreta"
        />

        <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
      </Form>

      <SignLink onPress={() => {}}>
        <SignLinkText>Criar conta gratuita</SignLinkText>
      </SignLink>
    </Container>
  </Background>
);

export default SignIn;