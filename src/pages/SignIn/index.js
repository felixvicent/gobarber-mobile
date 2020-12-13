import React from 'react';

import Background from '~/components/Background';
import Input from '~/components/Input';
import Button from '~/components/Button';

const SignIn = () => (
  <Background>
    <Input
      icon="call"
      placeholder="Digite seu nome"
      style={{ marginTop: 30 }}
    />
    <Button>Button</Button>
  </Background>
);

export default SignIn;
