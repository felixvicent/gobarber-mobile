/* eslint-disable react/prop-types */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

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
  <AppTabs.Navigator
    tabBarOptions={{
      keyboardHidesTabBar: true,
      activeTintColor: '#fff',
      inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
      style: { backgroundColor: '#8d41a8', borderTopWidth: 0 },
    }}
  >
    <AppTabs.Screen
      options={{
        tabBarLabel: 'Agendamentos',
        tabBarIcon: ({ color }) => (
          <Icon name="event" size={20} color={color} />
        ),
      }}
      name="Dashboard"
      component={Dashboard}
    />
    <AppTabs.Screen
      options={{
        tabBarLabel: 'Meu Perfil',
        tabBarIcon: ({ color }) => (
          <Icon name="person" size={20} color={color} />
        ),
      }}
      name="Profile"
      component={Profile}
    />
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
