import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ACCOUNT, MESSAGES } from '../constants/NavigationScreens';
import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';

const Stack = createStackNavigator();
const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ACCOUNT} component={AccountScreen} />
      <Stack.Screen name={MESSAGES} component={MessagesScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
