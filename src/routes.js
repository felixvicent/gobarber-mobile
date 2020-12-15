import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';

const MainStack = createStackNavigator();
const SignStack = createStackNavigator();
const AppTabs = createBottomTabNavigator();

const SignNavigator = () => (
  <SignStack.Navigator screenOptions={{ headerShown: false }}>
    <SignStack.Screen name="SignIn" component={SignIn} />
    <SignStack.Screen name="SignUp" component={SignUp} />
  </SignStack.Navigator>
);

const AppNavigator = () => (
  <AppTabs.Navigator>
    <AppTabs.Screen name="Dashboard" component={Dashboard} />
  </AppTabs.Navigator>
);

export default (isSigned = false) => () => (
  <NavigationContainer>
    <MainStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={isSigned ? 'App' : 'Sign'}
    >
      <MainStack.Screen name="Sign" component={SignNavigator} />
      <MainStack.Screen name="App" component={AppNavigator} />
    </MainStack.Navigator>
  </NavigationContainer>
);
