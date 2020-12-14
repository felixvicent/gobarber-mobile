import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import Background from '~/components/Background';

import logo from '~/assets/logo.png';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

const SignUp = ({ navigation }) => (
  <Background>
    <Container>
      <Image source={logo} />

      <Form>
        <FormInput
          icon="person-outline"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Nome completo"
        />

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

      <SignLink onPress={() => navigation.replace('SignIn')}>
        <SignLinkText>Já tem cadastro?</SignLinkText>
      </SignLink>
    </Container>
  </Background>
);

SignUp.propTypes = {
  navigation: PropTypes.shape({ replace: PropTypes.func }).isRequired,
};

export default SignUp;
