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

const SignIn = ({ navigation }) => (
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

      <SignLink onPress={() => navigation.replace('SignUp')}>
        <SignLinkText>Criar conta gratuita</SignLinkText>
      </SignLink>
    </Container>
  </Background>
);

SignIn.propTypes = {
  navigation: PropTypes.shape({ replace: PropTypes.func }).isRequired,
};

export default SignIn;
