import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Button } from 'react-native';
import AppText from './app/components/AppText';
import Screen from './app/components/Screen';
import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';

const Tweets = ({ navigation }) => {
  return (
    <Screen>
      <AppText>Tweets</AppText>
      <Button title="View Tweet details" onPress={() => navigation.navigate('TweetsDetails')} />
    </Screen>
  );
};

const TweetsDetails = () => {
  return (
    <Screen>
      <AppText>TweetsDetails</AppText>
    </Screen>
  );
};

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Tweets">
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen name="TweetsDetails" component={TweetsDetails} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Tweets">
      <Tab.Screen name="Tweets" component={Tweets} />
      <Tab.Screen name="TweetsDetails" component={TweetsDetails} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
