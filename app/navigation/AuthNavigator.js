import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LOGIN, REGISTER, WELCOME } from '../constants/NavigationScreens';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={WELCOME} component={WelcomeScreen} options={{headerShown: false }} />
      <Stack.Screen name={LOGIN} component={LoginScreen} />
      <Stack.Screen name={REGISTER} component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
