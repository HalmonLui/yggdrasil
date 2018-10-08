import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import LoadingScreen from '../screens/LoadingScreen';
import BattleScreen from '../screens/BattleScreen';

const LoginStack = createStackNavigator({Login: LoginScreen});

export default createSwitchNavigator(
  {
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Loading: LoadingScreen,
  Login: LoginStack,
  Main: MainTabNavigator,
  Battle: BattleScreen,
  },
  {
    initialRouteName: 'Loading',
  }
);
