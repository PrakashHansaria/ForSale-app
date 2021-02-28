import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LISTINGS, LISTING_DETAILS } from '../constants/NavigationScreens';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import ListingsScreen from '../screens/ListingsScreen';

const Stack = createStackNavigator();
const FeedNavigator = () => {
  return (
    <Stack.Navigator mode="modal" screenOptions={{headerShown:false}}>
      <Stack.Screen name={LISTINGS} component={ListingsScreen} />
      <Stack.Screen name={LISTING_DETAILS} component={ListingDetailsScreen}/>
    </Stack.Navigator>
  );
};

export default FeedNavigator;
