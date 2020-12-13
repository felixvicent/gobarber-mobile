import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

const Tabs = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="SignIn" component={SignIn} />
      <Tabs.Screen name="SignUp" component={SignUp} />
    </Tabs.Navigator>
  </NavigationContainer>
);
