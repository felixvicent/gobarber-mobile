import React from 'react';

import Appointment from '~/components/Appointment';
import Background from '~/components/Background';

import { Container, Title, List } from './styles';

const data = [1, 2, 3, 4, 5];

const Dashboard = () => (
  <Background>
    <Container>
      <Title>Agendamentos</Title>

      <List
        data={data}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <Appointment data={item} />}
      />
    </Container>
  </Background>
);

export default Dashboard;
